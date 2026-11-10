---
name: Kortex
description: Dark software marketing with cyan connections and pink emphasis.
colors:
  bg: "#080b14"
  surface: "#101525"
  text: "#e9eaf2"
  muted: "#9ca5ba"
  cyan: "#30e5f1"
  pink: "#ff328d"
  line: "#242b40"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Outfit, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.13em"
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
    backgroundColor: "{colors.cyan}"
    textColor: "#07131b"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-pink:
    backgroundColor: "{colors.pink}"
    textColor: "#150614"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.field}"
    padding: "13px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "28px"
---

# Design System: Kortex

## Overview

**Creative North Star: "Connected intelligence"**

The supplied reference sets a dark, spacious world with assertive geometric headings. Cyan connects the system and directs action; pink supplies a second, deliberate emphasis. This name describes the implemented direction rather than a new brand claim.

**Key Characteristics:**

- Heavy Outfit headings and quiet supporting copy.
- Dark tonal surfaces with crisp borders.
- Rounded controls and cyan/pink contrast.

Extracted from `frontend/src/presentation/styles/global.css` and presentation components. This record describes code; it does not certify visual parity or accessibility compliance.

## Colors

### Primary

Cyan carries primary buttons, connection lines, labels, process structure and focus outlines.

### Secondary

Pink marks custom software, selective heading emphasis and the demonstration CTA.

### Neutral

Background and surface separate page and containers. Text is cool off-white; muted supports explanatory copy. Line provides understated edges. Component-specific hover and border colors remain in CSS and sidecar snippets.

## Typography

Outfit is locally hosted at weights 400–900 with a sans-serif fallback. Display and section headings use weight 800; supporting text stays lighter. Display sizing is `clamp(64px, 6.6vw, 96px)` on wide layouts, then 76px at 1150px, 72px at 800px and 49px at 480px. Section headings use `clamp(32px, 4.25vw, 60px)`, then 42px and 35px at the two smaller breakpoints. Body sizes vary by component; hero supporting copy steps from 20px to 18px to 16px. Labels are uppercase and tracked. Do not encode responsive clamps as fixed frontmatter dimensions.

## Layout

The main container caps at 1240px. Total horizontal inset steps from 200px to 96px, 48px and 40px at 1150px, 800px and 480px. Regular section padding steps from 72px to 50px to 43px. Grids commonly use 24px gaps.

The home hero and about sections are two columns on desktop; below 800px they stack, with the network before the hero text. Products move from four columns to two at 800px and compact rows at 480px. Projects and reviews become horizontal snap lists below 800px. Plans become a horizontal snap list at 480px, with the featured plan first. Contact stacks at 480px. Keep these changes intentional rather than shrinking desktop cards indefinitely.

## Elevation & Depth

No box shadows are implemented. Depth comes from darker ground, lighter panels and thin borders. The hero grid and SVG connections add structure. The demo panel alone uses a pink-to-cyan gradient border. Button hover lifts by 2px; product-card hover lifts by 5px. Reduced-motion preferences disable transitions and smooth scrolling.

## Shapes

Pill buttons and round icon links contrast with softly rounded cards. Fields use the field radius; main cards use the card radius, with local 20–32px container variations. The angled ticker is a home signature, not a global container treatment.

## Components

- **Buttons:** cyan primary, transparent outlined secondary, pink demo variant; minimum base height 54px. Hover colors lighten or fill the outline surface. All keyboard focus uses a cyan 3px outline offset by 5px.
- **Fields:** dark inset surfaces, visible labels, thin borders and cyan caret. Sending disables submission; failure is announced and success replaces the fields with confirmation and a reset action.
- **Navigation:** compact desktop links; below 800px a circular menu control reveals a vertical bordered panel. A skip link appears on focus.
- **Cards and tags:** product cards have large colored icons; custom software is a full pink surface. Project tags are small outlined pills. Featured plans have a cyan border.
- **Network:** scalable inline SVG with dashed cyan connections, mixed-color nodes and a central K. Small-screen labels disappear while the accessible description remains.
- **Ticker:** static, clipped repeated service text on an angled cyan strip. It is not an animated marquee.
- **Hero badge and eyebrows:** explicitly supplied by the user's reference; preserve them despite generic guidance against decorative badges.
- **Mobile plans:** “Ver todos los planes” expands all three plans inline and toggles back to the featured-card/scroll layout.

## Do's and Don'ts

- Do preserve the supplied dark/cyan/pink visual direction.
- Do keep focus visible and honor reduced-motion preferences.
- Do use local Outfit assets and the established responsive layout changes.
- Don't add shadows to the flat tonal system without a deliberate design change.
- Don't turn placeholder reviews, logos or projects into invented proof.
