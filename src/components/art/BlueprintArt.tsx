import type { ArtVariant } from "@/data/projects";

/**
 * Placeholder engineering artwork (SVG line drawings) used until real project
 * photos are supplied. Drawn with currentColor so it inherits text colour.
 */

const LABELS: Record<ArtVariant, string> = {
  sld: "Electrical single-line diagram drawing",
  floorplan: "Building services floor plan drawing",
  solar: "Solar PV array drawing",
  panel: "Electrical control panel drawing",
  hvac: "HVAC duct layout drawing",
  bim: "Isometric BIM building model drawing",
};

export function artLabel(variant: ArtVariant): string {
  return LABELS[variant];
}

function Sld() {
  const feeders = [80, 140, 200, 260, 320];
  return (
    <>
      <line x1="200" y1="14" x2="200" y2="42" />
      <circle cx="200" cy="54" r="12" />
      <circle cx="200" cy="70" r="12" />
      <line x1="200" y1="82" x2="200" y2="108" />
      <rect x="192" y="108" width="16" height="16" />
      <line x1="200" y1="124" x2="200" y2="146" />
      <line x1="56" y1="146" x2="344" y2="146" strokeWidth="4" className="stroke-volt-light" />
      {feeders.map((x, i) => (
        <g key={x}>
          <line x1={x} y1="146" x2={x} y2="236" />
          <rect x={x - 7} y="170" width="14" height="14" />
          <circle cx={x} cy="258" r="14" />
          <text x={x} y="262" textAnchor="middle" fontSize="11" fill="currentColor" stroke="none" fontFamily="monospace">
            {["M", "L", "M", "L", "M"][i]}
          </text>
          <line x1={x} y1="236" x2={x} y2="244" />
        </g>
      ))}
      <text x="214" y="64" fontSize="9" fill="currentColor" stroke="none" fontFamily="monospace">TX1</text>
      <text x="214" y="120" fontSize="9" fill="currentColor" stroke="none" fontFamily="monospace">MCCB</text>
      <text x="62" y="138" fontSize="9" fill="currentColor" stroke="none" fontFamily="monospace">MDB</text>
    </>
  );
}

function Floorplan() {
  return (
    <>
      <rect x="30" y="30" width="340" height="240" strokeWidth="3" />
      <line x1="150" y1="30" x2="150" y2="150" />
      <line x1="150" y1="190" x2="150" y2="270" />
      <line x1="30" y1="150" x2="150" y2="150" />
      <line x1="150" y1="150" x2="370" y2="150" />
      <path d="M150 150 A40 40 0 0 1 190 190" strokeWidth="1" opacity="0.6" />
      {/* cable tray */}
      <line x1="45" y1="48" x2="355" y2="48" strokeDasharray="8 5" className="stroke-volt-light" />
      {/* duct */}
      <rect x="160" y="100" width="190" height="14" className="stroke-volt-light" />
      {[190, 240, 290, 330].map((x) => (
        <rect key={x} x={x - 7} y="120" width="14" height="14" />
      ))}
      {/* pipe */}
      <polyline points="50,230 50,190 130,190 130,240 340,240" strokeDasharray="2 4" />
      {/* sockets & lights */}
      {[60, 100, 190, 250, 320].map((x) => (
        <circle key={x} cx={x} cy="75" r="5" />
      ))}
      <text x="40" y="22" fontSize="9" fill="currentColor" stroke="none" fontFamily="monospace">LEVEL 01 — SERVICES</text>
    </>
  );
}

function Solar() {
  const cols = 5;
  const rows = 3;
  return (
    <>
      <circle cx="330" cy="60" r="20" className="stroke-amber-signal" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={330 + Math.cos(a) * 28}
            y1={60 + Math.sin(a) * 28}
            x2={330 + Math.cos(a) * 38}
            y2={60 + Math.sin(a) * 38}
            className="stroke-amber-signal"
          />
        );
      })}
      <g transform="translate(40 120) skewX(-24)">
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((__, c) => (
            <g key={`${r}-${c}`}>
              <rect x={c * 56} y={r * 44} width="50" height="38" />
              <line x1={c * 56 + 25} y1={r * 44} x2={c * 56 + 25} y2={r * 44 + 38} opacity="0.5" />
              <line x1={c * 56} y1={r * 44 + 19} x2={c * 56 + 50} y2={r * 44 + 19} opacity="0.5" />
            </g>
          ))
        )}
      </g>
      <rect x="320" y="220" width="40" height="34" className="stroke-volt-light" />
      <text x="340" y="241" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="monospace">INV</text>
      <polyline points="250,250 250,262 320,262 320,240" strokeDasharray="4 3" />
    </>
  );
}

function Panel() {
  return (
    <>
      <rect x="90" y="20" width="220" height="260" strokeWidth="3" />
      <rect x="102" y="32" width="196" height="236" opacity="0.5" />
      {[130, 200, 270].map((x) => (
        <g key={x}>
          <circle cx={x - 30} cy="62" r="14" />
          <line x1={x - 30} y1="62" x2={x - 24} y2="54" />
        </g>
      ))}
      {[100, 150, 200].map((y) => (
        <g key={y}>
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={112 + i * 23} y={y} width="16" height="30" className={i === 0 ? "stroke-volt-light" : undefined} />
          ))}
          <line x1="108" y1={y + 40} x2="292" y2={y + 40} opacity="0.4" />
        </g>
      ))}
      <rect x="112" y="248" width="176" height="12" />
    </>
  );
}

function Hvac() {
  return (
    <>
      <rect x="24" y="110" width="70" height="80" strokeWidth="3" />
      <text x="59" y="154" textAnchor="middle" fontSize="11" fill="currentColor" stroke="none" fontFamily="monospace">AHU</text>
      <rect x="94" y="136" width="190" height="28" className="stroke-volt-light" />
      <rect x="284" y="60" width="26" height="176" className="stroke-volt-light" />
      <rect x="150" y="164" width="22" height="70" className="stroke-volt-light" />
      <rect x="210" y="86" width="22" height="50" className="stroke-volt-light" />
      {[161, 221].map((x, i) => (
        <rect key={x} x={x - 14} y={i === 0 ? 234 : 66} width="28" height="20" />
      ))}
      {[70, 130, 190].map((y) => (
        <rect key={y} x="330" y={y} width="30" height="20" />
      ))}
      {[80, 140, 200].map((y) => (
        <line key={y} x1="310" y1={y + 10} x2="330" y2={y + 10} className="stroke-volt-light" />
      ))}
      {[120, 150].map((x) => (
        <polyline key={x} points={`${x},143 ${x + 8},150 ${x},157`} />
      ))}
    </>
  );
}

function Bim() {
  const s = 36;
  const ax = 0.866 * s;
  const ay = 0.5 * s;
  const box = (ox: number, oy: number, w: number, d: number, h: number, key: string, accent = false) => {
    const p = (i: number, j: number, k: number) =>
      `${ox + (i - j) * ax},${oy + (i + j) * ay - k * s * 0.9}`;
    const top = [p(0, 0, h), p(w, 0, h), p(w, d, h), p(0, d, h)].join(" ");
    const left = [p(0, d, h), p(w, d, h), p(w, d, 0), p(0, d, 0)].join(" ");
    const right = [p(w, 0, h), p(w, d, h), p(w, d, 0), p(w, 0, 0)].join(" ");
    return (
      <g key={key} className={accent ? "stroke-volt-light" : undefined}>
        <polygon points={top} />
        <polygon points={left} />
        <polygon points={right} />
      </g>
    );
  };
  return (
    <>
      {box(200, 120, 2.6, 2.6, 1, "b1")}
      {box(200, 120 - 0.9 * s, 2.6, 2.6, 1, "b2")}
      {box(200, 120 - 1.8 * s, 2.6, 2.6, 1, "b3", true)}
      {box(120, 190, 1, 1, 1.4, "b4")}
      <polyline points="200,262 200,276 260,276" strokeDasharray="4 3" />
    </>
  );
}

const ART: Record<ArtVariant, () => JSX.Element> = {
  sld: Sld,
  floorplan: Floorplan,
  solar: Solar,
  panel: Panel,
  hvac: Hvac,
  bim: Bim,
};

interface Props {
  variant: ArtVariant;
  className?: string;
  /** Pass `decorative` when a nearby element already describes the image. */
  decorative?: boolean;
}

export function BlueprintArt({ variant, className, decorative }: Props) {
  const Art = ART[variant];
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : LABELS[variant]}
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <Art />
    </svg>
  );
}
