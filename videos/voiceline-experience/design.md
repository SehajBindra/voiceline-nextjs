# Voiceline Experience Video — Design Spec

## Concept angle

A voice artist's sketchbook page comes alive — blue ink doodles on warm cream paper, yellow highlighter marks where emotion breaks through. Not a studio tour; a diary of the moment before and inside the room.

## Palette (from app/globals.css)

| Role | Value | Use |
|------|-------|-----|
| Background | `#F9F6EE` | Warm cream paper |
| Foreground / ink | `#1E2A5E` | Blue-tinted dark ink |
| Primary blue | `#3B52E8` | Doodle strokes, headlines |
| Yellow accent | `#F5DC2E` | Highlighter washes, warmth spills |
| Blue wash | `#E8ECFF` | Soft atmospheric blobs |
| Muted | `#6B7280` | Margin notes |

## Typography

- **Story headlines:** Playfair Display 700, 72–96px, tracking -0.03em
- **Margin notes:** JetBrains Mono 400, 22–28px, uppercase tracking 0.08em
- **Body beats:** Playfair Display 400, 36–44px

## Doodle language

- 3px rounded stroke caps, slight wobble in paths (hand-drawn imperfection)
- Yellow `#F5DC2E` at 35–55% opacity as highlighter rectangles behind key words
- Small cross-hatch texture in corners (10% opacity blue lines)
- Paper grain overlay at 4% opacity
- Draw-on animation: stroke-dashoffset reveal, 1.2–2.4s per element

## Do

- Anchor content to edges and asymmetric layouts
- Let doodles breathe with generous negative space
- Use yellow as emotional punctuation, not decoration everywhere

## Don't

- Generic gradient text or cyan-on-dark tech aesthetic
- Gear lists, pricing, or service grids
- Centered identical card layouts
