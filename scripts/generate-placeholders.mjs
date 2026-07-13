import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const FRAME = "#EDE4D3";
const INK = "#151515";
const GOLD = "#B59A63";
const GOLD_SOFT = "#D9CBAE";
const GREY = "#777777";

const OUT = path.join(process.cwd(), "public", "images");

function wrap(w, h, inner) {
  const inset = Math.max(2, Math.round(Math.min(w, h) * 0.012));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${FRAME}"/>
    ${inner}
    <rect x="${inset / 2}" y="${inset / 2}" width="${w - inset}" height="${h - inset}" fill="none" stroke="${INK}" stroke-opacity="0.12" stroke-width="${inset}"/>
  </svg>`;
}

function lines(n, fn) {
  return Array.from({ length: n }, (_, i) => fn(i)).join("\n");
}

const scenes = {
  // rolling ridgelines of the Gennargentu / Ogliastra mountains
  mountains: (w, h) => {
    const base = h * 0.68;
    const ridge = (offset, amp, color, opacity) => {
      let d = `M0 ${h}`;
      const pts = 7;
      for (let i = 0; i <= pts; i++) {
        const x = (w / pts) * i;
        const y = base - offset - Math.sin(i * 1.3 + offset) * amp;
        d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
      }
      d += ` L${w} ${h} Z`;
      return `<path d="${d}" fill="${color}" opacity="${opacity}"/>`;
    };
    return wrap(
      w,
      h,
      `${ridge(80, 40, INK, 0.16)}${ridge(40, 55, GOLD, 0.32)}${ridge(0, 70, INK, 0.22)}`
    );
  },
  // flat sea horizon with a single gull mark
  horizon: (w, h) => {
    const horizon = h * 0.52;
    return wrap(
      w,
      h,
      `<rect x="0" y="${horizon}" width="${w}" height="${h - horizon}" fill="${GOLD}" opacity="0.16"/>
      <line x1="0" y1="${horizon}" x2="${w}" y2="${horizon}" stroke="${INK}" stroke-width="1.4" opacity="0.45"/>
      ${lines(5, (i) => {
        const x = w * (0.2 + i * 0.15);
        const y = horizon - 40 - (i % 2) * 18;
        return `<path d="M${x} ${y} q10 -8 20 0 q10 -8 20 0" stroke="${GREY}" stroke-width="1.6" fill="none" opacity="0.6"/>`;
      })}`
    );
  },
  // arched loggia silhouette, Sardinian stone architecture
  arches: (w, h) => {
    const n = 5;
    const archW = w / n;
    const baseY = h * 0.82;
    const topY = h * 0.32;
    return wrap(
      w,
      h,
      `<rect x="0" y="${baseY}" width="${w}" height="${h - baseY}" fill="${INK}" opacity="0.14"/>
      ${lines(n, (i) => {
        const x = i * archW + archW / 2;
        return `<path d="M${x - archW * 0.32} ${baseY} L${x - archW * 0.32} ${topY + 40} A ${archW * 0.32} ${archW * 0.32} 0 0 1 ${x + archW * 0.32} ${topY + 40} L${x + archW * 0.32} ${baseY}" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.65"/>`;
      })}`
    );
  },
  // minimal room interior: bed + window line drawing
  room: (w, h) => {
    const bx = w * 0.12,
      by = h * 0.58,
      bw = w * 0.5,
      bh = h * 0.22;
    return wrap(
      w,
      h,
      `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="6" fill="none" stroke="${INK}" stroke-width="1.8" opacity="0.65"/>
      <rect x="${bx}" y="${by - 22}" width="${bw * 0.32}" height="26" rx="6" fill="${GOLD_SOFT}" opacity="0.75"/>
      <rect x="${w * 0.7}" y="${h * 0.18}" width="${w * 0.22}" height="${h * 0.34}" fill="none" stroke="${GREY}" stroke-width="1.6" opacity="0.6"/>
      <line x1="${w * 0.81}" y1="${h * 0.18}" x2="${w * 0.81}" y2="${h * 0.52}" stroke="${GREY}" stroke-width="1.4" opacity="0.6"/>
      <line x1="${bx}" y1="${by + bh}" x2="${bx + bw + 40}" y2="${by + bh}" stroke="${INK}" stroke-width="1.4" opacity="0.4"/>`
    );
  },
  // breakfast table: cup, plate, bread
  breakfast: (w, h) => {
    const cx = w * 0.3,
      cy = h * 0.62;
    return wrap(
      w,
      h,
      `<ellipse cx="${cx}" cy="${cy}" rx="70" ry="18" fill="none" stroke="${INK}" stroke-width="1.8" opacity="0.6"/>
      <ellipse cx="${cx}" cy="${cy - 6}" rx="60" ry="14" fill="${GOLD_SOFT}" opacity="0.5"/>
      <path d="M${cx + 130} ${cy - 30} a26 26 0 1 1 0 52 a26 26 0 1 1 0 -52" fill="none" stroke="${INK}" stroke-width="1.8" opacity="0.6"/>
      <path d="M${cx + 156} ${cy - 14} q18 0 18 14 q0 14 -18 10" fill="none" stroke="${INK}" stroke-width="1.6" opacity="0.5"/>
      <path d="M${cx - 90} ${cy + 8} q30 -34 60 0 q30 -34 60 0" stroke="${GOLD}" stroke-width="1.8" fill="none" opacity="0.6"/>`
    );
  },
  // olive branch motif
  olive: (w, h) => {
    const midY = h * 0.5;
    let leaves = "";
    for (let i = 0; i < 10; i++) {
      const x = w * 0.15 + i * (w * 0.07);
      const y = midY + Math.sin(i * 0.9) * 40;
      leaves += `<ellipse cx="${x}" cy="${y}" rx="16" ry="7" fill="${GOLD}" opacity="0.5" transform="rotate(${i * 12} ${x} ${y})"/>`;
    }
    return wrap(
      w,
      h,
      `<path d="M${w * 0.1} ${midY} Q ${w * 0.5} ${midY - 60} ${w * 0.9} ${midY + 30}" stroke="${INK}" stroke-width="1.6" fill="none" opacity="0.5"/>${leaves}`
    );
  },
  // nuraghe / Domus de Janas stone silhouette
  stone: (w, h) => {
    const cx = w * 0.5,
      base = h * 0.85,
      topR = w * 0.09,
      baseR = w * 0.22,
      towerH = h * 0.5;
    return wrap(
      w,
      h,
      `<path d="M${cx - baseR} ${base} Q${cx - topR} ${base - towerH} ${cx} ${base - towerH - 30} Q${cx + topR} ${base - towerH} ${cx + baseR} ${base} Z" fill="${INK}" opacity="0.16" stroke="${INK}" stroke-width="1.8" stroke-opacity="0.5"/>
      <ellipse cx="${cx}" cy="${base}" rx="${baseR * 1.3}" ry="10" fill="${GOLD}" opacity="0.28"/>`
    );
  },
  // winding hiking trail through hills
  trail: (w, h) => {
    return wrap(
      w,
      h,
      `${lines(3, (i) => {
        const y = h * (0.35 + i * 0.18);
        return `<path d="M0 ${y} Q ${w * 0.25} ${y - 30} ${w * 0.5} ${y} T ${w} ${y - 10}" stroke="${INK}" stroke-width="1.4" fill="none" opacity="${0.22 + i * 0.06}"/>`;
      })}
      <path d="M${w * 0.05} ${h * 0.9} Q ${w * 0.3} ${h * 0.5} ${w * 0.5} ${h * 0.55} T ${w * 0.95} ${h * 0.15}" stroke="${GOLD}" stroke-width="2.2" fill="none" stroke-dasharray="2 10" opacity="0.7"/>`
    );
  },
  // Maria Lai inspired woven thread pattern
  thread: (w, h) => {
    let threads = "";
    for (let i = 0; i < 14; i++) {
      const x1 = (w / 14) * i;
      const y2 = h;
      threads += `<line x1="${x1}" y1="0" x2="${w - x1}" y2="${y2}" stroke="${GOLD}" stroke-width="1.3" opacity="0.4"/>`;
    }
    return wrap(w, h, threads);
  },
  // simple aerial map pin abstraction
  map: (w, h) => {
    const cx = w / 2,
      cy = h * 0.45;
    return wrap(
      w,
      h,
      `${lines(6, (i) => {
        const y = (h / 6) * i + 20;
        return `<line x1="0" y1="${y}" x2="${w}" y2="${y + 8}" stroke="${INK}" stroke-width="0.8" opacity="0.14"/>`;
      })}
      <circle cx="${cx}" cy="${cy}" r="9" fill="${GOLD}"/>
      <path d="M${cx} ${cy + 9} L${cx} ${cy + 46}" stroke="${GOLD}" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="26" fill="none" stroke="${GOLD}" stroke-width="1.4" opacity="0.5"/>`
    );
  },
  // restaurant / table setting
  table: (w, h) => {
    const cy = h * 0.6;
    return wrap(
      w,
      h,
      `<line x1="0" y1="${cy + 60}" x2="${w}" y2="${cy + 60}" stroke="${INK}" stroke-width="1.4" opacity="0.35"/>
      <circle cx="${w * 0.35}" cy="${cy}" r="46" fill="none" stroke="${INK}" stroke-width="1.6" opacity="0.55"/>
      <rect x="${w * 0.6}" y="${cy - 40}" width="10" height="80" rx="5" fill="${GREY}" opacity="0.5"/>
      <rect x="${w * 0.65}" y="${cy - 40}" width="10" height="80" rx="5" fill="${GREY}" opacity="0.5"/>
      <circle cx="${w * 0.35}" cy="${cy}" r="4" fill="${GOLD}"/>`
    );
  },
};

const jobs = [
  ["hero/hero-facade.jpg", "arches", 1920, 1080],
  ["hero/hero-terrace.jpg", "olive", 1920, 1080],
  ["hero/hero-mountains.jpg", "mountains", 1920, 1080],

  ["about/lanusei.jpg", "mountains", 1200, 1500],
  ["about/courtyard.jpg", "arches", 1200, 900],
  ["about/detail.jpg", "thread", 900, 1100],

  ["rooms/room-nuraghe.jpg", "room", 1200, 900],
  ["rooms/room-ortu.jpg", "room", 1200, 900],
  ["rooms/room-lanterna.jpg", "room", 1200, 900],
  ["rooms/room-suite.jpg", "room", 1200, 900],

  ["breakfast/table.jpg", "breakfast", 1600, 1000],
  ["breakfast/detail.jpg", "olive", 1100, 1400],

  ["experiences/sea.jpg", "horizon", 1200, 1500],
  ["experiences/mountains.jpg", "mountains", 1200, 1500],
  ["experiences/hiking.jpg", "trail", 1200, 900],
  ["experiences/domus-de-janas.jpg", "stone", 1200, 900],
  ["experiences/maria-lai.jpg", "thread", 1200, 1500],
  ["experiences/restaurants.jpg", "table", 1200, 900],

  ["gallery/gallery-01.jpg", "arches", 1200, 1500],
  ["gallery/gallery-02.jpg", "horizon", 1400, 1000],
  ["gallery/gallery-03.jpg", "room", 1200, 900],
  ["gallery/gallery-04.jpg", "olive", 1200, 1600],
  ["gallery/gallery-05.jpg", "breakfast", 1400, 1000],
  ["gallery/gallery-06.jpg", "mountains", 1200, 900],
  ["gallery/gallery-07.jpg", "stone", 1200, 1500],
  ["gallery/gallery-08.jpg", "thread", 1400, 1000],
  ["gallery/gallery-09.jpg", "trail", 1200, 1600],
  ["gallery/gallery-10.jpg", "table", 1200, 900],
  ["gallery/gallery-11.jpg", "room", 1400, 1000],
  ["gallery/gallery-12.jpg", "arches", 1200, 1500],

  ["og/og-image.jpg", "arches", 1200, 630],
];

async function run() {
  for (const [file, scene, w, h] of jobs) {
    const svg = scenes[scene](w, h);
    const outPath = path.join(OUT, file);
    await mkdir(path.dirname(outPath), { recursive: true });
    await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(outPath);
    console.log("generated", file);
  }
}

run();
