---
version: alpha
name: Disney+ Dark Stream
description: A high-contrast, cinematic subscription experience with bright aqua action accents and minimal, premium framing.
colors:
  primary: "#33DDFF"
  primary-strong: "#1FB9D9"
  secondary: "#B7B8BD"
  tertiary: "#F9F9F9"
  neutral: "#040714"
  surface: "#000000"
  surface-strong: "#17171C"
  on-surface: "#FAFAFA"
  border: "#808080"
  error: "#FF5A5F"
typography:
  headline-display:
    fontFamily: Inspire
    fontSize: 44px
    fontWeight: 700
    lineHeight: 48.4px
    letterSpacing: -0.16px
  headline-lg:
    fontFamily: Inspire
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: 0px
  headline-md:
    fontFamily: Inspire
    fontSize: 28px
    fontWeight: 700
    lineHeight: 33.6px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Inspire
    fontSize: 18px
    fontWeight: 600
    lineHeight: 22px
    letterSpacing: 0px
  body-lg:
    fontFamily: Inspire
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25.2px
    letterSpacing: 0px
  body-md:
    fontFamily: Inspire
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25.2px
    letterSpacing: 0px
  body-sm:
    fontFamily: Inspire
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: Inspire
    fontSize: 16px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
  label-md:
    fontFamily: Inspire
    fontSize: 14px
    fontWeight: 400
    lineHeight: 14px
    letterSpacing: 0px
  label-sm:
    fontFamily: Inspire
    fontSize: 12px
    fontWeight: 400
    lineHeight: 12px
    letterSpacing: 0px
  overline:
    fontFamily: Inspire
    fontSize: 12px
    fontWeight: 600
    lineHeight: 12px
    letterSpacing: 0.08em
  legal:
    fontFamily: Inspire
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0px
rounded:
  none: 0px
  sm: 4px
  md: 10px
  lg: 18px
  xl: 32px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 108px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface-strong}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "56px"
    width: "320px"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.surface-strong}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "56px"
    width: "320px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
  button-link:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "32px 24px 24px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  chip:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.surface-strong}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  modal:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "24px"
---

# Disney+ Dark Stream

## Overview

This system feels cinematic, premium, and intentionally restrained. It uses a nearly black canvas, bright aqua accents, and a single sans-serif voice to keep the focus on content posters and subscription actions. The tone is confident and direct rather than playful, with dense promotional imagery contrasted by spacious, centered calls to action.

## Colors

- **Primary (#33DDFF):** A vivid aqua used for the main action button and key interactive emphasis. It reads as energetic and modern against the dark background.
- **Primary strong (#1FB9D9):** A slightly deeper aqua for hover or active states when the interface needs a stronger punch without changing hue family.
- **Secondary (#B7B8BD):** A muted silver-gray used for body copy, secondary actions, and supporting text. It keeps the interface quiet and readable.
- **Tertiary (#F9F9F9):** A crisp off-white for high-contrast links and top-line text when content needs maximum clarity.
- **Neutral (#040714):** The base page background, a near-black navy that creates the signature night-mode theater feel.
- **Surface (#000000):** Deep black panel and card surfaces used to separate modal content from the background while preserving the dark theme.
- **Surface strong (#17171C):** A warmer charcoal used for button text contrast and elevated dark surfaces.
- **On-surface (#FAFAFA):** Bright white text for primary copy inside dark cards and modals.
- **Border (#808080):** A restrained gray for hairline strokes and framed containers; it is present but never dominant.
- **Error (#FF5A5F):** A safety token for destructive or warning states; it should remain secondary to the brand’s cool spectrum.

## Typography

The system is built on Inspire, a clean custom sans-serif that feels modern and media-forward. Headlines are bold and compact, with `headline-display` and `headline-lg` carrying most hero messaging and modal titles. `headline-md` and `headline-sm` support card titles, section labels, and smaller promotional headings without changing the voice.

Body text uses the same family at 16px for a consistent reading rhythm, with generous line height for legibility on dark backgrounds. `body-sm` and `legal` are reserved for disclaimers, pricing notes, and dense terms copy. `overline` adds the only noticeable letter-spacing treatment, giving small utility labels a polished, editorial feel without becoming shouty.

## Layout & Spacing

The layout is centered and containment-driven rather than grid-heavy. Cards and modal panels sit within large negative space, with the page using strong vertical breathing room and a clear focal hierarchy. Spacing follows a simple rhythm of 8px, 16px, 24px, 40px, and 108px, which keeps small UI details tight while allowing hero and modal content to feel cinematic.

Primary buttons are wide and substantial, with a 320px minimum width and 56px height to create a clear conversion target. Card padding is asymmetrical in the best way for marketing content: 32px top padding, then 24px on the sides and bottom to balance the poster-heavy composition. Sections should remain centered and avoid overly dense columns; the interface works best when it feels open and poster-led.

## Elevation & Depth

Depth is created more by contrast and layering than by shadow. The interface relies on dark surfaces, thin gray borders, and dimmed background imagery to separate the foreground from the promotional backdrop. Shadows are effectively absent, which keeps the look crisp, flat, and screen-native rather than tactile.

Modal overlays should feel like a deliberate interruption: strong dark panel, clear border, and image-rich interior content. Cards use simple outlines instead of soft elevation, so hierarchy comes from brightness, framing, and content scale rather than shadow blur.

## Shapes

The shape language is rounded but controlled. Large pill radii on buttons create friendly, high-conversion actions, while cards and modal containers keep a modest rounded rectangle feel with `rounded.md` and `rounded.sm`. This balance makes the system feel approachable without losing its premium, studio-like seriousness.

## Components

Buttons are the most expressive elements in the system. `button-primary` is the main CTA style: aqua fill, dark text, pill radius, 8px vertical padding, 16px horizontal padding, and a 56px-tall minimum target. `button-secondary` uses a transparent or dark treatment with a gray stroke and gray text for lower-emphasis actions. `button-link` should be reserved for tertiary navigation such as “View Plan Options,” with no border, no fill, and underlined text.

Cards should use the `card` token set: black surface, 1px gray border, `rounded.md`, and generous top padding. Keep card content stacked and simple, with bold headings, muted supporting copy, and a single clear CTA. Avoid decorative shadows or competing borders.

Inputs should visually match cards and remain understated: dark fill, light text, modest rounding, and clean padding. Focus states should be obvious through contrast or border emphasis rather than glow effects. Placeholder content should remain subdued so it does not compete with the surrounding marketing copy.

Chips and badges, such as promotional tags, should be compact pills with `rounded.full`, small type, and a muted background. They work best as quiet status markers near plan or offer headlines. Modal windows should use the `modal` token style with a dark charcoal surface, square-to-soft rounding, and comfortable internal padding to frame imagery and callouts.

## Do's and Don'ts

- Do keep the interface dark-first and let content imagery provide most of the color.
- Do use the aqua primary only for the highest-priority CTA or active emphasis.
- Do keep text hierarchy simple: bold headlines, muted body copy, and minimal decorative treatment.
- Do prefer pill buttons and soft cards to reinforce the premium streaming feel.
- Don't introduce heavy shadows, gradients, or glossy effects; the system is intentionally flat.
- Don't use multiple bright accent colors that compete with the brand aqua.
- Don't shrink primary actions below the 320px by 56px pattern when building prominent CTAs.
- Don't overuse uppercase or wide letter spacing outside of small utility labels.