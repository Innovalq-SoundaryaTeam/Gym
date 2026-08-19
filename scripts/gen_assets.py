#!/usr/bin/env python3
"""Generate self-contained SVG art for the PULSE Fitness template: avatars,
class/blog thumbnails, facility banners, logo & favicon.

No external network calls or stock photography — everything is drawn
procedurally (duotone gradient scenes, medallion icon compositions, portrait
bust avatars) so the template works fully offline with zero broken image
links and zero licensing concerns. Filenames match exactly what the HTML
references, so dropping in real photography later is a same-name file swap —
no HTML edits needed.
"""
import os, math, random

OUT = "/home/claude/project/pulse-fitness/assets/images"
os.makedirs(f"{OUT}/avatars", exist_ok=True)
os.makedirs(f"{OUT}/thumbs", exist_ok=True)
os.makedirs(f"{OUT}/banners", exist_ok=True)

random.seed(7)

PALETTES = [
    ("#0a0d10", "#c4ff1e"), ("#101418", "#ff6b4a"), ("#0a0d10", "#2fb0ff"),
    ("#12161c", "#c4ff1e"), ("#181414", "#ff8f6b"), ("#0a0d10", "#5bc6ff"),
    ("#0d1210", "#8bffb0"), ("#141014", "#e0a3ff"),
]

def grain(w, h, n, color, seed_offset=0):
    r = random.Random(seed_offset)
    dots = []
    for _ in range(n):
        x, y = r.randint(0, w), r.randint(0, h)
        rad = r.choice([1, 1, 1.5, 2])
        op = round(r.uniform(0.06, 0.20), 2)
        dots.append(f'<circle cx="{x}" cy="{y}" r="{rad}" fill="{color}" opacity="{op}"/>')
    return "".join(dots)

def vignette_defs(rid, color):
    return (f'<radialGradient id="{rid}v" cx="50%" cy="38%" r="75%">'
            f'<stop offset="0%" stop-color="{color}" stop-opacity="0"/>'
            f'<stop offset="100%" stop-color="#000" stop-opacity="0.55"/></radialGradient>')

# ------------------------------------------------------------------
# Icon set — 120x120 viewbox, filled duotone marks used as the subject
# of every banner/thumbnail composition.
# ------------------------------------------------------------------
ICON_PATHS = {
    "strength": '<path d="M24 52h6v16h-6zm8-6h6v28h-6zm44 6h6v16h-6zm-8-6h6v28h-6zM40 58h40v4H40z"/>',
    "cardio": '<path d="M20 60h14l6-16 10 32 8-24 6 8h16" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    "yoga": '<path d="M60 20a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 18c-14 0-22 10-24 22l8 2c2-9 7-15 16-16v14l-16 20 6 6 16-18 16 18 6-6-16-20V64c9 1 14 7 16 16l8-2c-2-12-10-22-24-22Z"/>',
    "zumba": '<path d="M60 18a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-10 20 10 6 10-6 14 8-4 8-10-5v14l12 22-8 4-11-20-11 20-8-4 12-22V46l-10 5-4-8Z"/>',
    "hiit": '<path d="M60 20 34 62h18l-6 38 32-46H60l6-34Z"/>',
    "pilates": '<circle cx="60" cy="30" r="8"/><path d="M60 40v22M60 40 40 56m20-16 20 16M46 62h28l8 20-6 4-8-16H52l-8 16-6-4Z"/>',
    "boxing": '<path d="M30 48c0-8 6-14 14-14h4a10 10 0 0 1 10 10v4l14 4a8 8 0 0 1 6 8v6c0 12-10 22-22 22H46c-9 0-16-7-16-16Z" fill="none" stroke="currentColor" stroke-width="4"/>',
    "spin": '<circle cx="60" cy="60" r="24" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="60" cy="60" r="4"/><path d="M60 36v-14M36 60H22M60 84v14M84 60h14" stroke="currentColor" stroke-width="4"/>',
}

def icon_group(key, cx, cy, scale, color):
    return f'<g transform="translate({cx-60*scale},{cy-60*scale}) scale({scale})" fill="{color}" color="{color}">{ICON_PATHS[key]}</g>'

# ------------------------------------------------------------------
# 1. Banners — large medallion compositions for hero / facility sections
# ------------------------------------------------------------------
BANNER_SPECS = [
    ("hero-1", 0, ["strength", "cardio"]),
    ("hero-2", 2, ["boxing", "hiit"]),
    ("facility-weights", 1, ["strength"]),
    ("facility-cardio", 3, ["cardio"]),
    ("facility-studio", 4, ["yoga"]),
    ("facility-boxing", 5, ["boxing"]),
    ("about-story", 1, ["strength", "spin"]),
    ("cta-band", 2, ["zumba", "spin"]),
]

def gen_banner(name, pidx, icons, w=1200, h=800):
    bg, accent = PALETTES[pidx % len(PALETTES)]
    accent2 = PALETTES[(pidx + 3) % len(PALETTES)][1]
    rid = f"bn_{name}"
    n = len(icons)
    medallions = []
    for i, key in enumerate(icons):
        cx = w * (0.5 if n == 1 else (0.30 + i * 0.40))
        cy = h * 0.46
        col = accent if i % 2 == 0 else accent2
        r = h * 0.24
        medallions.append(
            f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{r:.0f}" fill="{col}" opacity="0.10"/>'
            f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{r*0.74:.0f}" fill="none" stroke="{col}" stroke-width="1.5" opacity="0.35"/>'
            f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{r*0.52:.0f}" fill="{col}" opacity="0.16"/>'
            + icon_group(key, cx, cy, r * 0.014, col)
        )
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="{rid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{bg}"/><stop offset="100%" stop-color="#000"/>
    </linearGradient>
    {vignette_defs(rid, accent)}
  </defs>
  <rect width="{w}" height="{h}" fill="url(#{rid})"/>
  <g opacity="0.08" stroke="{accent}">
    {"".join(f'<line x1="{x}" y1="0" x2="{x}" y2="{h}"/>' for x in range(0, w, 48))}
  </g>
  {grain(w, h, 130, accent, hash(name) % 999)}
  {"".join(medallions)}
  <rect width="{w}" height="{h}" fill="url(#{rid}v)"/>
</svg>'''
    with open(f"{OUT}/banners/{name}.svg", "w") as f:
        f.write(svg)

for name, pidx, icons in BANNER_SPECS:
    gen_banner(name, pidx, icons, w=(900 if name == "hero-2" else 1200), h=(1100 if name == "hero-2" else 800))

# ------------------------------------------------------------------
# 2. Class / blog thumbnails — single-icon medallion cards
# ------------------------------------------------------------------
def gen_thumb(name, pidx, key, w=480, h=360):
    bg, accent = PALETTES[pidx % len(PALETTES)]
    rid = f"th_{name}"
    cx, cy = w / 2, h * 0.46
    r = min(w, h) * 0.30
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="{rid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{bg}"/><stop offset="100%" stop-color="#000"/>
    </linearGradient>
    <radialGradient id="{rid}g" cx="50%" cy="30%" r="80%">
      <stop offset="0%" stop-color="{accent}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="{accent}" stop-opacity="0"/>
    </radialGradient>
    {vignette_defs(rid, accent)}
  </defs>
  <rect width="{w}" height="{h}" fill="url(#{rid})"/>
  <rect width="{w}" height="{h}" fill="url(#{rid}g)"/>
  {grain(w, h, 55, accent, hash(name) % 999)}
  <circle cx="{cx:.0f}" cy="{cy:.0f}" r="{r:.0f}" fill="{accent}" opacity="0.12"/>
  <circle cx="{cx:.0f}" cy="{cy:.0f}" r="{r*0.72:.0f}" fill="none" stroke="{accent}" stroke-width="1.5" opacity="0.4"/>
  <circle cx="{cx:.0f}" cy="{cy:.0f}" r="{r*0.5:.0f}" fill="{accent}" opacity="0.18"/>
  {icon_group(key, cx, cy, r*0.016, accent)}
  <rect width="{w}" height="{h}" fill="url(#{rid}v)"/>
  <rect x="0.5" y="0.5" width="{w-1}" height="{h-1}" fill="none" stroke="{accent}" stroke-opacity="0.15"/>
</svg>'''
    with open(f"{OUT}/thumbs/{name}.svg", "w") as f:
        f.write(svg)

CLASS_THUMBS = ["yoga", "zumba", "strength", "cardio", "hiit", "pilates", "boxing", "spin"]
for i, key in enumerate(CLASS_THUMBS):
    gen_thumb(key, i, key)

BLOG_POSE_MAP = ["cardio", "strength", "yoga", "hiit", "boxing", "spin", "pilates", "zumba"]
for i, key in enumerate(BLOG_POSE_MAP):
    gen_thumb(f"blog-{i+1}", (i + 3) % len(PALETTES), key, w=640, h=420)

# ------------------------------------------------------------------
# 3. Avatars — head & shoulders bust, portrait-style duotone
# ------------------------------------------------------------------
HAIR_STYLES = ["short", "buzz", "long", "bun", "curly", "bald", "short", "long",
               "buzz", "bun", "curly", "short"]

def gen_avatar(idx, size=240):
    bg, accent = PALETTES[idx % len(PALETTES)]
    rid = f"av{idx}"
    cx, cy = size / 2, size / 2
    head_r = size * 0.155
    head_cy = size * 0.40
    hair = HAIR_STYLES[idx % len(HAIR_STYLES)]
    hair_svg = ""
    if hair == "short":
        hair_svg = f'<path d="M {cx-head_r*1.05} {head_cy-2} a {head_r*1.05} {head_r*0.95} 0 0 1 {head_r*2.1} 0 v6 a {head_r*1.3} {head_r*1.3} 0 0 0 -{head_r*2.1} 0 Z" fill="{accent}" opacity="0.85"/>'
    elif hair == "buzz":
        hair_svg = f'<path d="M {cx-head_r*0.95} {head_cy-4} a {head_r*0.95} {head_r*0.8} 0 0 1 {head_r*1.9} 0 Z" fill="{accent}" opacity="0.6"/>'
    elif hair == "long":
        hair_svg = (f'<path d="M {cx-head_r*1.1} {head_cy-2} a {head_r*1.1} {head_r} 0 0 1 {head_r*2.2} 0 '
                    f'l 4 {head_r*1.6} l -14 -6 l -{head_r*1.9} 0 l -14 6 Z" fill="{accent}" opacity="0.85"/>')
    elif hair == "bun":
        hair_svg = (f'<path d="M {cx-head_r*1.02} {head_cy-2} a {head_r*1.02} {head_r*0.9} 0 0 1 {head_r*2.04} 0 v4 '
                    f'a {head_r*1.25} {head_r*1.25} 0 0 0 -{head_r*2.04} 0 Z" fill="{accent}" opacity="0.85"/>'
                    f'<circle cx="{cx}" cy="{head_cy-head_r*1.35}" r="{head_r*0.32}" fill="{accent}" opacity="0.85"/>')
    elif hair == "curly":
        dots = "".join(
            f'<circle cx="{cx + math.cos(a)*head_r*1.0:.1f}" cy="{head_cy + math.sin(a)*head_r*0.85 - head_r*0.3:.1f}" r="{head_r*0.34}" fill="{accent}" opacity="0.85"/>'
            for a in [math.pi + i * (math.pi / 7) for i in range(8)]
        )
        hair_svg = dots
    # bald -> no hair_svg

    shoulder_w = size * 0.62
    shoulder_y = size * 0.98
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 {size} {size}">
  <defs>
    <linearGradient id="{rid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{bg}"/><stop offset="100%" stop-color="#000"/>
    </linearGradient>
    <radialGradient id="{rid}g" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="{accent}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="{accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="{size}" height="{size}" rx="{size}" fill="url(#{rid})"/>
  <rect width="{size}" height="{size}" rx="{size}" fill="url(#{rid}g)"/>
  <circle cx="{cx}" cy="{cy}" r="{size*0.47}" fill="none" stroke="{accent}" stroke-opacity="0.12" stroke-width="1.5"/>
  <path d="M {cx-shoulder_w/2} {shoulder_y} a {shoulder_w/2} {size*0.5} 0 0 1 {shoulder_w} 0 Z" fill="{accent}" opacity="0.92"/>
  <circle cx="{cx}" cy="{head_cy}" r="{head_r}" fill="{accent}" opacity="0.92"/>
  {hair_svg}
  <rect width="{size}" height="{size}" rx="{size}" fill="none" stroke="{accent}" stroke-opacity="0.18" stroke-width="2"/>
</svg>'''
    with open(f"{OUT}/avatars/avatar-{idx+1}.svg", "w") as f:
        f.write(svg)

for i in range(12):
    gen_avatar(i)

print("Assets generated: banners, thumbs, avatars.")
