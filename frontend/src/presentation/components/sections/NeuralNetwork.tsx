import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  r: number;
  fill: string;
  label?: string;
  labelDx?: number;
  labelDy?: number;
  /** Amplitud del vaivén en px (0 = fijo) */
  amp: number;
};

const CENTER = 0;

const nodes: Node[] = [
  { x: 280, y: 225, r: 56, fill: "#0e1725", amp: 4 },
  { x: 125, y: 90, r: 13, fill: "#29b9c6", label: "Gestión", labelDx: 17, labelDy: -10, amp: 14 },
  { x: 435, y: 70, r: 18, fill: "#ae225e", label: "Ventas", labelDx: -110, labelDy: -20, amp: 12 },
  { x: 475, y: 265, r: 13, fill: "#29b9c6", label: "Facturación", labelDx: -55, labelDy: 35, amp: 14 },
  { x: 345, y: 405, r: 13, fill: "#fa338e", label: "Soporte", labelDx: 20, labelDy: 20, amp: 12 },
  { x: 100, y: 340, r: 9, fill: "#31e7ed", label: "A medida", labelDx: -54, labelDy: 30, amp: 15 },
  // Neuronas secundarias, sin etiqueta
  { x: 210, y: 40, r: 4, fill: "#31e7ed", amp: 18 },
  { x: 520, y: 150, r: 4, fill: "#fa338e", amp: 18 },
  { x: 210, y: 420, r: 5, fill: "#29b9c6", amp: 18 },
  { x: 40, y: 200, r: 4, fill: "#ae225e", amp: 18 },
  { x: 470, y: 400, r: 3, fill: "#31e7ed", amp: 16 },
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 5], [5, 4], [4, 2], [2, 3], [1, 3], [5, 2],
  [6, 1], [6, 2], [7, 2], [7, 3], [8, 5], [8, 4], [9, 1], [9, 5], [10, 3], [10, 4],
];

const PULSES = 7;
const PULSE_COLORS = ["#30e5f1", "#ff328d", "#30e5f1", "#ffffff"];

type Pulse = { edge: number; t: number; speed: number; reverse: boolean };

const randomPulse = (): Pulse => ({
  edge: Math.floor(Math.random() * edges.length),
  t: 0,
  speed: 0.35 + Math.random() * 0.45,
  reverse: Math.random() > 0.5,
});

export const NeuralNetwork = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const nodeRefs = useRef<(SVGGElement | null)[]>([]);
  const pulseRefs = useRef<(SVGCircleElement | null)[]>([]);

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

    let raf = 0;
    let last = performance.now();
    let visible = true;

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const s = now / 1000;

      nodes.forEach((n, i) => {
        const ph = phase[i];
        pos[i].x = n.x + Math.sin(s * ph.fx + ph.px) * n.amp;
        pos[i].y = n.y + Math.cos(s * ph.fy + ph.py) * n.amp;
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

      pulses.forEach((p, i) => {
        p.t += p.speed * dt;
        if (p.t >= 1) Object.assign(p, randomPulse());
        const [a, b] = edges[p.edge];
        const [from, to] = p.reverse ? [pos[b], pos[a]] : [pos[a], pos[b]];
        const el = pulseRefs.current[i];
        if (!el) return;
        el.setAttribute("cx", (from.x + (to.x - from.x) * p.t).toFixed(2));
        el.setAttribute("cy", (from.y + (to.y - from.y) * p.t).toFixed(2));
        // Aparece y se desvanece en los extremos de la sinapsis
        el.setAttribute("opacity", Math.sin(p.t * Math.PI).toFixed(3));
      });

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
      role="img"
      aria-label="Kortex conecta gestión, ventas, facturación, soporte y software a medida"
    >
      <svg viewBox="0 0 560 460">
        <defs>
          <filter id="pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="network-lines">
          {edges.map(([a, b], i) => (
            <line
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className={a >= 6 || b >= 6 ? "is-faint" : undefined}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
            />
          ))}
        </g>
        <g filter="url(#pulse-glow)">
          {Array.from({ length: PULSES }, (_, i) => (
            <circle
              key={i}
              ref={(el) => {
                pulseRefs.current[i] = el;
              }}
              className="network-pulse"
              r={i % 3 === 0 ? 3.5 : 2.5}
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
                <circle className="network-core-ring" cx={n.x} cy={n.y} r={n.r} />
                <circle cx={n.x} cy={n.y} r={n.r} fill={n.fill} stroke="#2ce5ef" strokeWidth="2" />
                <text className="network-k" x={n.x} y={n.y + 11} textAnchor="middle">
                  K
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
                <circle cx={n.x} cy={n.y} r={n.r} fill={n.fill} />
                {n.label && (
                  <text
                    className="network-label"
                    x={n.x + (n.labelDx ?? 0)}
                    y={n.y + (n.labelDy ?? 0)}
                  >
                    {n.label}
                  </text>
                )}
              </>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};
