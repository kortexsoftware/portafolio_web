import { useId } from "react";

/**
 * Símbolo de Kortex: una K formada por nodos y conexiones, con el núcleo
 * terracota en la unión. Variantes de fondo:
 * - gradient: degradado menta → durazno (header y favicon)
 * - mint: menta suave
 * - outline: blanco con borde verde (sobre fondos tintados)
 * - plain: sin fondo
 */
export type LogoVariant = "gradient" | "mint" | "outline" | "plain";

const tiles: Record<Exclude<LogoVariant, "plain">, { from: string; to: string; border?: string }> = {
  gradient: { from: "#dcefe4", to: "#fbe3d6" },
  mint: { from: "#e6f1ea", to: "#d3e7db" },
  outline: { from: "#ffffff", to: "#f6f8f4", border: "#cfe0d4" },
};

const INK = "#246b5e";
const CORE = "#e07a52";

type LogoMarkProps = {
  variant?: LogoVariant;
  size?: number;
  /** Activa el latido del núcleo (respeta prefers-reduced-motion vía CSS). */
  animated?: boolean;
  className?: string;
};

export const LogoMark = ({
  variant = "gradient",
  size = 40,
  animated = false,
  className = "",
}: LogoMarkProps) => {
  // useId puede traer caracteres que no sirven dentro de url(#...)
  const id = `kx${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const tile = variant === "plain" ? null : tiles[variant];
  return (
    <svg
      className={`logo-svg${animated ? " is-animated" : ""} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      {tile && (
        <>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={tile.from} />
              <stop offset="1" stopColor={tile.to} />
            </linearGradient>
          </defs>
          <rect
            x="0.75"
            y="0.75"
            width="62.5"
            height="62.5"
            rx="16"
            fill={`url(#${id})`}
            stroke={tile.border}
            strokeWidth={tile.border ? 1.5 : undefined}
          />
        </>
      )}
      <g stroke={INK} strokeLinecap="round" fill="none">
        <path d="M22 14 V50" strokeWidth="6.5" />
        <path className="logo-arm" d="M22 32 L44 14" strokeWidth="5.5" />
        <path d="M22 32 L44 50" strokeWidth="5.5" />
      </g>
      <g fill={INK}>
        <circle cx="44" cy="14" r="5.4" />
        <circle cx="44" cy="50" r="5.4" />
        <circle cx="22" cy="14" r="5.4" />
        <circle cx="22" cy="50" r="5.4" />
      </g>
      {animated && <circle className="logo-pulse" cx="22" cy="32" r="8.2" fill="none" stroke={CORE} />}
      <circle
        className="logo-core"
        cx="22"
        cy="32"
        r="8.2"
        fill={CORE}
        stroke={tile ? tile.from : "#faf9f6"}
        strokeWidth="2.4"
      />
      <circle cx="22" cy="32" r="3" fill="#fff" />
    </svg>
  );
};

type LogoProps = LogoMarkProps & {
  /** Agrega "SOFTWARE" bajo la palabra. */
  stacked?: boolean;
};

export const Logo = ({ stacked = false, ...mark }: LogoProps) => (
  <span className={`logo-lockup${stacked ? " is-stacked" : ""}`}>
    <LogoMark {...mark} />
    <span className="logo-word">
      KORTEX
      {stacked && <small>Software</small>}
    </span>
  </span>
);
