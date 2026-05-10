---
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: "800"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: "700"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: "700"
    lineHeight: "1.0"
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-page: 40px
  bubble-gap: 32px
---

## Brand & Style

The design system is defined by an exuberant, approachable, and high-energy personality. It targets a modern, tech-savvy audience that values creativity and friendliness over corporate rigidity. The emotional goal is to evoke a sense of "lightness" and "joy" through movement and soft forms.

The visual style is a hybrid of **Soft-Minimalism** and **Tactile Glassmorphism**. It prioritizes extreme clarity and breathing room (high whitespace) but rejects flatness in favor of depth. Elements should feel like physical bubbles—buoyant, rounded, and layered. We use organic "blob" motifs and soft, multi-colored ambient shadows to create a sense of three-dimensional space that feels alive and welcoming.

## Colors

The palette is anchored by **Cobalt Blue** for primary actions and **Cyan** for highlights, creating a high-vibrancy blue-on-blue foundation. Backgrounds are never pure white; they use a very pale "Ice Blue" to maintain the underwater/atmospheric feel.

**Sunny Yellow** serves as the high-contrast accent for conversion points or celebratory moments, while **Soft Mint** is used for secondary accents or positive status indicators. Gradients should be used sparingly but effectively, typically transitioning from Cobalt to Cyan at a 135-degree angle to simulate light hitting a curved surface.

## Typography

This design system utilizes **Plus Jakarta Sans** for its distinctive, friendly curves in headings, providing a "bubbly" geometric feel. For body text, **Be Vietnam Pro** offers high legibility while maintaining a warm, contemporary tone that complements the rounded aesthetic.

Headlines should use tight letter spacing and heavy weights to appear impactful and "plump." Body text requires generous line heights to ensure the interface feels airy and easy to navigate. Labels and interactive elements use Plus Jakarta Sans in bold to provide clear affordance.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with extremely generous inner padding. We avoid cramped groupings, opting for a wide "8px-based" rhythmic scale.

Content is organized into floating "Island" modules rather than edge-to-edge sections. Margins are intentionally large to create the "floating in space" effect. Decorative organic blobs should be positioned absolutely behind the main content containers, breaking the grid slightly to add a sense of playfulness and organic movement.

## Elevation & Depth

Hierarchy is established through **Ambient Blue Shadows**. Instead of neutral grey shadows, use low-opacity shadows tinted with the primary blue (e.g., `rgba(46, 91, 255, 0.15)`).

Layering is key:

- **Level 0 (Background):** Soft ice-blue tint with blurred organic shapes.
- **Level 1 (Cards):** Pure white surfaces with a soft, wide-spread shadow (20px-40px blur).
- **Level 2 (Floating Header/Popovers):** Higher elevation with a secondary, tighter shadow and a subtle 1px white inner-border to simulate a "glass" edge.
- **Interactive:** Hover states should involve a "lift" (negative Y-offset) and an increase in shadow spread to make elements feel light and air-filled.

## Shapes

The shape language is strictly **Pill-shaped and Organic**. There are no sharp corners in this design system.

All primary buttons and tags must use a full corner radius (`9999px`) to create a pill shape. Cards and containers use an "Extreme Rounded" setting (minimum `32px` on desktop) to maintain the bubbly silhouette. Decorative elements should utilize `border-radius` values that are asymmetrical (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`) to create liquid, blob-like forms that feel less mathematical and more natural.

## Components

### Buttons

Buttons are strictly pill-shaped. The **Primary Button** uses a Cobalt-to-Cyan gradient with a subtle blue glow shadow. **Secondary Buttons** use a thick 2px Cyan border with a light cyan ghost-fill on hover.

### Floating Header

The navigation bar is a "Floating Bubble." It should not touch the edges of the screen. It is a pill-shaped container with a frosted glass effect (`backdrop-filter: blur(10px)`), a soft shadow, and centered links.

### Cards

Cards are white bubbles with a minimum `rounded-xl` radius. They should feature high internal padding (`40px`) and use "Icon Bubbles"—small circular backgrounds behind icons using the accent Sunny Yellow or Mint colors.

### Inputs & Selection

Input fields are rounded pills with a light blue background and a Cobalt border that appears only on focus. Checkboxes and radio buttons are oversized and use a "bounce" animation when toggled.

### Bubbly Decorative Blobs

Use large, semi-transparent SVG blobs in the background of sections. These should have a slow "float" animation (slight Y-axis translation) to reinforce the bubbly, underwater/ethereal startup theme.
