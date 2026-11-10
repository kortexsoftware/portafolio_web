import { useEffect, useRef } from "react";
import { Icon, type IconName } from "../ui/Icon";

type Node = {
  x: number;
  y: number;
  r: number;
  fill: string;
  label?: string;
  icon?: IconName;
  labelDx?: number;
  labelDy?: number;
  /** Amplitud del vaivén en px (0 = fijo) */
  amp: number;
};

const CENTER = 0;

const nodes: Node[] = [
  { x: 280, y: 230, r: 64, fill: "#205c50", amp: 3 },
  {
    x: 114,
    y: 94,
    r: 26,
    fill: "#246b5e",
    label: "Gestión",
    icon: "grid",
    labelDx: 0,
    labelDy: 49,
    amp: 7,
  },
  {
    x: 432,
    y: 80,
    r: 28,
    fill: "#b35f40",
    label: "Ventas",
    icon: "cart",
    labelDx: 0,
    labelDy: 51,
    amp: 6,
  },
  {
    x: 475,
    y: 286,
    r: 26,
    fill: "#246b5e",
    label: "Facturación",
    icon: "file",
    labelDx: 0,
    labelDy: 49,
    amp: 7,
  },
  {
    x: 316,
    y: 409,
    r: 24,
    fill: "#b35f40",
    label: "Soporte",
    icon: "phone",
    labelDx: 0,
    labelDy: 47,
    amp: 6,
  },
  {
    x: 75,
    y: 321,
    r: 26,
    fill: "#246b5e",
    label: "A medida",
    icon: "code",
    labelDx: 0,
    labelDy: 49,
    amp: 7,
  },
  { x: 240, y: 43, r: 5, fill: "#619180", amp: 9 },
  { x: 521, y: 170, r: 5, fill: "#ba8060", amp: 9 },
  { x: 181, y: 436, r: 5, fill: "#619180", amp: 9 },
  { x: 38, y: 199, r: 5, fill: "#ba8060", amp: 9 },
  { x: 463, y: 422, r: 5, fill: "#619180", amp: 8 },
];

const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [1, 5],
  [5, 4],
  [4, 2],
  [2, 3],
  [1, 3],
  [5, 2],
  [6, 1],
  [6, 2],
  [7, 2],
  [7, 3],
  [8, 5],
  [8, 4],
  [9, 1],
  [9, 5],
  [10, 3],
  [10, 4],
];

// Capa lejana: neuronas tenues que se desplazan con el cursor (paralaje)
const depthDots = [
  [70, 40, 3], [180, 120, 2], [350, 30, 2.5], [520, 90, 3], [540, 360, 2.5],
  [400, 200, 2], [150, 260, 2.5], [30, 430, 3], [260, 460, 2], [420, 470, 2.5],
  [505, 230, 2], [10, 120, 2],
] as const;
const depthLinks: [number, number][] = [
  [0, 1], [1, 6], [2, 5], [3, 10], [4, 9], [6, 7], [8, 9], [0, 11], [5, 10],
];

const SERVICE_NODES = [1, 2, 3, 4, 5];
const REPEL_RADIUS = 130;
const REPEL_FORCE = 16;
const PULSES = 6;
const PULSE_COLORS = ["#246b5e", "#b35f40", "#246b5e", "#b35f40"];

type Pulse = { edge: number; t: number; speed: number; reverse: boolean };

const randomPulse = (hot: number | null = null): Pulse => {
  // Con un módulo resaltado, la mayoría de los pulsos viajan del núcleo a él
  if (hot !== null && Math.random() < 0.7) {
    const edge = edges.findIndex(([a, b]) => a === CENTER && b === hot);
    return { edge, t: 0, speed: 0.45 + Math.random() * 0.2, reverse: false };
  }
  return {
    edge: Math.floor(Math.random() * edges.length),
    t: 0,
    speed: 0.18 + Math.random() * 0.2,
    reverse: Math.random() > 0.5,
  };
};

export const NeuralNetwork = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);
  const pulseRefs = useRef<(SVGCircleElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const depthRef = useRef<SVGGElement>(null);
  /** Cursor en coordenadas del viewBox; null fuera del grafo. */
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const hot = useRef<number | null>(null);

  // Resaltado de módulo: funciona también con movimiento reducido
  const setHot = (index: number | null) => {
    if (hot.current === index) return;
    hot.current = index;
    rootRef.current?.classList.toggle("has-hot", index !== null);
    edges.forEach(([a, b], i) => {
      lineRefs.current[i]?.classList.toggle(
        "is-hot",
        index !== null && (a === index || b === index),
      );
    });
    nodeRefs.current.forEach((el, i) => el?.classList.toggle("is-hot", i === index));
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const svg = svgRef.current;
    const ctm = svg?.getScreenCTM();
    if (!svg || !ctm) return;
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    pointer.current = { x: pt.x, y: pt.y };
    const near = SERVICE_NODES.find((i) => {
      const n = nodes[i];
      return Math.hypot(pt.x - n.x, pt.y - n.y) < n.r + 26;
    });
    setHot(near ?? null);
  };

  const onPointerLeave = () => {
    pointer.current = null;
    setHot(null);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Fase y frecuencia distinta por nodo para que no se muevan en bloque
    const phase = nodes.map((_, i) => ({
      px: i * 1.7,
      py: i * 2.3 + 1,
      fx: 0.35 + ((i * 37) % 10) / 40,
      fy: 0.3 + ((i * 53) % 10) / 45,
    }));
    const pulses = Array.from({ length: PULSES }, () => {
      const p = randomPulse();
      p.t = Math.random();
      return p;
    });
    const pos = nodes.map((n) => ({ x: n.x, y: n.y }));
    // Desplazamiento suavizado por repulsión del cursor
    const push = nodes.map(() => ({ x: 0, y: 0 }));
    const parallax = { x: 0, y: 0 };

    let raf = 0;
    let last = performance.now();
    let visible = true;

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const s = now / 1000;

      const p = pointer.current;
      const ease = Math.min(dt * 6, 1);

      nodes.forEach((n, i) => {
        const ph = phase[i];
        let tx = 0;
        let ty = 0;
        if (p && i !== CENTER) {
          const dx = n.x - p.x;
          const dy = n.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < REPEL_RADIUS) {
            const f = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
            tx = (dx / dist) * f;
            ty = (dy / dist) * f;
          }
        }
        push[i].x += (tx - push[i].x) * ease;
        push[i].y += (ty - push[i].y) * ease;
        pos[i].x = n.x + Math.sin(s * ph.fx + ph.px) * n.amp + push[i].x;
        pos[i].y = n.y + Math.cos(s * ph.fy + ph.py) * n.amp + push[i].y;
        nodeRefs.current[i]?.setAttribute(
          "transform",
          `translate(${(pos[i].x - n.x).toFixed(2)} ${(pos[i].y - n.y).toFixed(2)})`,
        );
      });

      edges.forEach(([a, b], i) => {
        const line = lineRefs.current[i];
        if (!line) return;
        line.setAttribute("x1", pos[a].x.toFixed(2));
        line.setAttribute("y1", pos[a].y.toFixed(2));
        line.setAttribute("x2", pos[b].x.toFixed(2));
        line.setAttribute("y2", pos[b].y.toFixed(2));
      });

      pulses.forEach((pulse, i) => {
        pulse.t += pulse.speed * dt;
        if (pulse.t >= 1) Object.assign(pulse, randomPulse(hot.current));
        const [a, b] = edges[pulse.edge];
        const [from, to] = pulse.reverse ? [pos[b], pos[a]] : [pos[a], pos[b]];
        const el = pulseRefs.current[i];
        if (!el) return;
        el.setAttribute("cx", (from.x + (to.x - from.x) * pulse.t).toFixed(2));
        el.setAttribute("cy", (from.y + (to.y - from.y) * pulse.t).toFixed(2));
        // Aparece y se desvanece en los extremos de la sinapsis
        el.setAttribute("opacity", Math.sin(pulse.t * Math.PI).toFixed(3));
      });

      // Paralaje de la capa lejana: se mueve al revés del cursor
      const targetX = p ? (280 - p.x) * 0.04 : 0;
      const targetY = p ? (240 - p.y) * 0.04 : 0;
      parallax.x += (targetX - parallax.x) * ease;
      parallax.y += (targetY - parallax.y) * ease;
      depthRef.current?.setAttribute(
        "transform",
        `translate(${(parallax.x + Math.sin(s * 0.2) * 4).toFixed(2)} ${(parallax.y + Math.cos(s * 0.17) * 4).toFixed(2)})`,
      );

      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // Pausa cuando el grafo sale de pantalla o la pestaña se oculta
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(root);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="network"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      role="img"
      aria-label="Kortex conecta gestión, ventas, facturación, soporte y software a medida"
    >
      <svg ref={svgRef} viewBox="0 0 560 480">
        <g ref={depthRef} className="network-depth">
          {depthLinks.map(([a, b], i) => (
            <line
              key={i}
              x1={depthDots[a][0]}
              y1={depthDots[a][1]}
              x2={depthDots[b][0]}
              y2={depthDots[b][1]}
            />
          ))}
          {depthDots.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} />
          ))}
        </g>
        <g className="network-lines">
          {edges.map(([a, b], i) => (
            <line
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className={
                a === CENTER
                  ? "is-primary"
                  : a >= 6 || b >= 6
                    ? "is-faint"
                    : undefined
              }
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
            />
          ))}
        </g>
        <g className="network-signals">
          {Array.from({ length: PULSES }, (_, i) => (
            <circle
              key={i}
              ref={(el) => {
                pulseRefs.current[i] = el;
              }}
              className="network-pulse"
              r={i % 3 === 0 ? 4 : 3}
              fill={PULSE_COLORS[i % PULSE_COLORS.length]}
              opacity="0"
            />
          ))}
        </g>
        {nodes.map((n, i) => (
          <g
            key={i}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            className={i === CENTER ? "network-core" : "network-node"}
          >
            {i === CENTER ? (
              <>
                <circle
                  className="network-core-ring"
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                />
                <circle
                  className="network-core-disc"
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={n.fill}
                />
                <text
                  className="network-k"
                  x={n.x}
                  y={n.y + 6}
                  textAnchor="middle"
                >
                  K
                </text>
                <text
                  className="network-core-name"
                  x={n.x}
                  y={n.y + 31}
                  textAnchor="middle"
                >
                  KORTEX
                </text>
              </>
            ) : (
              <>
                {n.r >= 9 && (
                  <circle
                    className="network-halo"
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill={n.fill}
                    style={{ animationDelay: `${-i * 0.6}s` }}
                  />
                )}
                <circle
                  className={n.icon ? "network-service" : "network-satellite"}
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={n.fill}
                />
                {n.icon && (
                  <g
                    className="network-service-icon"
                    transform={`translate(${n.x - 11} ${n.y - 11})`}
                  >
                    <Icon name={n.icon} />
                  </g>
                )}
                {n.label && (
                  <g>
                    <rect
                      className="network-label-bg"
                      x={n.x - (n.label.length * 4.5 + 12)}
                      y={n.y + (n.labelDy ?? 0) - 19}
                      width={n.label.length * 9 + 24}
                      height={29}
                      rx={14.5}
                    />
                    <text
                      textAnchor="middle"
                      className="network-label"
                      x={n.x + (n.labelDx ?? 0)}
                      y={n.y + (n.labelDy ?? 0)}
                    >
                      {n.label}
                    </text>
                  </g>
                )}
              </>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};
