import type { CSSProperties } from "react";
import { Icon, type IconName } from "../ui/Icon";

/*
 * Ilustraciones de encabezado, una por módulo. Mismo lenguaje que el grafo
 * de la portada: núcleo K, nodos verde/terracota y conexiones. Animadas solo
 * con CSS; PageHeader agrega `is-paused` cuando salen de pantalla.
 */

const d = (i: number) => ({ "--d": i }) as CSSProperties;

const Core = ({ x, y, r = 30 }: { x: number; y: number; r?: number }) => (
  <g className="pv-core">
    <circle className="pv-core-ring" cx={x} cy={y} r={r} />
    <circle className="pv-core-disc" cx={x} cy={y} r={r} />
    <text x={x} y={y + 8} textAnchor="middle">
      K
    </text>
  </g>
);

const IconNode = ({
  x,
  y,
  icon,
  warm = false,
  r = 20,
}: {
  x: number;
  y: number;
  icon: IconName;
  warm?: boolean;
  r?: number;
}) => (
  <g className={`pv-node${warm ? " is-warm" : ""}`}>
    <circle cx={x} cy={y} r={r} />
    <g transform={`translate(${x - 11} ${y - 11})`}>
      <Icon name={icon} />
    </g>
  </g>
);

const Person = ({ x, y, label, i }: { x: number; y: number; label: string; i: number }) => (
  <g className="pv-person" style={d(i)}>
    <circle className="pv-person-bg" cx={x} cy={y} r={24} />
    <circle className="pv-person-head" cx={x} cy={y - 6} r={6.5} />
    <path className="pv-person-body" d={`M${x - 11} ${y + 13} a11 10 0 0 1 22 0`} />
    <text x={x} y={y + 42} textAnchor="middle">
      {label}
    </text>
  </g>
);

export const AboutVisual = () => {
  const people = [
    { x: 62, y: 62, label: "Fundador" },
    { x: 258, y: 62, label: "Fundador" },
    { x: 160, y: 196, label: "Socio técnico" },
  ];
  return (
    <svg viewBox="0 0 320 250" className="pv pv-about">
      {people.map((p, i) => (
        <line key={i} className="pv-flow" x1={160} y1={112} x2={p.x} y2={p.y} style={d(i)} />
      ))}
      <line className="pv-link" x1={62} y1={62} x2={258} y2={62} />
      <Core x={160} y={112} />
      {people.map((p, i) => (
        <Person key={i} {...p} i={i} />
      ))}
    </svg>
  );
};

export const ProductsVisual = () => {
  const items: { icon: IconName; warm: boolean; angle: number }[] = [
    { icon: "grid", warm: false, angle: 0 },
    { icon: "cart", warm: true, angle: 90 },
    { icon: "file", warm: false, angle: 180 },
    { icon: "code", warm: true, angle: 270 },
  ];
  return (
    <svg viewBox="0 0 320 250" className="pv pv-products">
      <circle className="pv-orbit" cx={160} cy={125} r={88} />
      <circle className="pv-orbit pv-orbit-inner" cx={160} cy={125} r={56} />
      <g className="pv-spin">
        {items.map((it) => {
          const rad = (it.angle * Math.PI) / 180;
          const x = 160 + Math.cos(rad) * 88;
          const y = 125 + Math.sin(rad) * 88;
          return (
            <g key={it.icon} className="pv-counter" style={{ transformOrigin: `${x}px ${y}px` }}>
              <IconNode x={x} y={y} icon={it.icon} warm={it.warm} />
            </g>
          );
        })}
      </g>
      <Core x={160} y={125} />
    </svg>
  );
};

export const ProjectsVisual = () => (
  <svg viewBox="0 0 320 250" className="pv pv-projects">
    {[
      { x: 30, y: 30, w: 170, h: 115 },
      { x: 120, y: 70, w: 170, h: 115 },
      { x: 70, y: 118, w: 120, h: 100, phone: true },
    ].map((win, i) => (
      <g key={i} className={`pv-window${i === 1 ? " is-warm" : ""}`} style={d(i)}>
        <rect x={win.x} y={win.y} width={win.w} height={win.h} rx={14} />
        <path className="pv-window-bar" d={`M${win.x} ${win.y + 22} H${win.x + win.w}`} />
        <circle className="pv-dot" cx={win.x + 14} cy={win.y + 11} r={3} />
        <circle className="pv-dot" cx={win.x + 25} cy={win.y + 11} r={3} />
        <rect className="pv-block" x={win.x + 14} y={win.y + 36} width={win.w * 0.45} height={10} rx={5} />
        <rect className="pv-block is-soft" x={win.x + 14} y={win.y + 54} width={win.w * 0.7} height={7} rx={3.5} />
        <rect className="pv-block is-soft" x={win.x + 14} y={win.y + 68} width={win.w * 0.55} height={7} rx={3.5} />
      </g>
    ))}
  </svg>
);

export const ClientsVisual = () => {
  const logos = [
    [40, 50],
    [40, 125],
    [40, 200],
    [280, 50],
    [280, 125],
    [280, 200],
  ];
  return (
    <svg viewBox="0 0 320 250" className="pv pv-clients">
      {logos.map(([x, y], i) => (
        <path
          key={i}
          className="pv-draw"
          pathLength={1}
          d={`M160 125 C${(160 + x) / 2} 125 ${(160 + x) / 2} ${y} ${x} ${y}`}
          style={d(i)}
        />
      ))}
      {logos.map(([x, y], i) => (
        <rect
          key={i}
          className={`pv-logo${i % 2 ? " is-warm" : ""}`}
          x={x - 22}
          y={y - 16}
          width={44}
          height={32}
          rx={9}
          style={d(i)}
        />
      ))}
      <Core x={160} y={125} />
    </svg>
  );
};

export const PlansVisual = () => (
  <svg viewBox="0 0 320 250" className="pv pv-plans">
    <path className="pv-baseline" d="M30 214 H290" />
    {[
      { x: 50, h: 70 },
      { x: 130, h: 135, featured: true },
      { x: 210, h: 100 },
    ].map((bar, i) => (
      <g key={i} className={`pv-bar${bar.featured ? " is-featured" : ""}`} style={d(i)}>
        <rect x={bar.x} y={214 - bar.h} width={60} height={bar.h} rx={12} />
        {bar.featured && (
          <g className="pv-check">
            <circle cx={bar.x + 30} cy={214 - bar.h - 24} r={15} />
            <path d={`M${bar.x + 23} ${214 - bar.h - 24} l5 5 9 -10`} />
          </g>
        )}
      </g>
    ))}
  </svg>
);

export const ContactVisual = () => (
  <svg viewBox="0 0 320 250" className="pv pv-contact">
    {[0, 1, 2].map((i) => (
      <circle key={i} className="pv-wave" cx={92} cy={125} r={30} style={d(i)} />
    ))}
    <path className="pv-link" d="M122 125 H214" />
    <circle className="pv-signal" cx={122} cy={125} r={5} />
    <Core x={92} y={125} />
    <g className="pv-mail">
      <rect x={214} y={95} width={80} height={60} rx={12} />
      <path d="M220 104 L254 130 L288 104" />
    </g>
  </svg>
);
