---
name: Kortex
description: Warm, light software marketing with quiet materials and responsive controls.
colors:
  bg: "#faf9f6"
  surface: "#ffffff"
  text: "#282d2a"
  muted: "#656d67"
  accent: "#246b5e"
  accent-warm: "#a6533d"
  line: "#dedfd8"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  field: "12px"
  card: "24px"
  pill: "999px"
spacing:
  control-gap: "16px"
  grid-gap: "24px"
  section: "72px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 25px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "14px 25px"
  button-warm:
    backgroundColor: "{colors.accent-warm}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 25px"
---

# Design System: Kortex

## Overview

Warm clarity replaces the previous dark/neon direction at the user's request. Apple Design informs hierarchy, restraint, immediate press feedback, legible materials and accessibility; Kortex retains its own identity and locally hosted Outfit family. Guidance: https://github.com/emilkowalski/skills/tree/main/skills/apple-design.

## Colors

The warm white ground carries white content surfaces and graphite text. Forest green identifies primary actions; terracotta supplies occasional secondary emphasis. Pale sage supports the demo invitation and network illustration; warm sand distinguishes custom software. The CSS uses semantic `--accent` and `--accent-warm` tokens. Product showcases retain their independent brand palettes.

## Typography

Display type is weight 600, with negative tracking and comfortable leading. Desktop hero size is `clamp(56px, 5.7vw, 82px)`; mobile uses `clamp(40px, 11.5vw, 48px)`. Body text keeps normal tracking and a 1.55 line height. Labels use sentence case. Retain Outfit for brand continuity, rather than imitating Apple's proprietary font.

## Layout

The existing responsive containers and routes remain. Home contains the hero, service strip, implementation steps and demo invitation. The other sections live on dedicated routes. Desktop places the network beside the headline; mobile gives the network first position, followed by the message and actions. Product grids collapse to rows. Mobile plans can expand inline. Navigation floats in a sticky rounded surface, with an opaque mobile menu.

## Elevation & Depth

Use shallow, vertically offset shadows on white panels. Translucency belongs only to sticky navigation, where content passes beneath it. Content cards remain opaque. The service strip is level and stationary. The network uses restrained node movement, six traveling pulses and static halos; it pauses offscreen and respects reduced motion on load.

## Shapes

Rounded cards and pill controls remain familiar. The network sits directly on the warm page ground, with a solid forest-green Kortex core, large service nodes, white icons and visible labels. Solid primary connections are distinguished from dashed secondary connections. The demo invitation has a single subtle border instead of a neon gradient. The footer uses a faint oversized wordmark on a light sage surface.

## Components

- Primary actions: white text on forest green, darker hover, immediate scale feedback on press.
- Secondary actions: outlined neutral surface. Demo actions: white on terracotta.
- Forms: explicit labels, warm white inputs, visible focus, unchanged application use cases and validation.
- Cards: white or restrained tinted backgrounds; darker body copy; subtle shadows.
- Navigation: 44px link hit areas, active-route color, keyboard-operable menu.
- Accessibility: reduced motion, reduced transparency and increased contrast preferences; visible focus and status announcements.

## Do's and Don'ts

- Preserve existing content, routes, API boundaries and independently branded project showcases.
- Keep color subordinate to hierarchy and readable copy.
- Avoid neon, page-wide dark backgrounds, looping strip motion and decorative glow.
- Do not invent prices, endorsements or customer data.
