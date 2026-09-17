# Homepage hero replacement

## Goal
Replace the current homepage opening with a dieVektor-branded version of the supplied scatter-to-line-to-orbit animation, while preserving the premium dark visual system and keeping the page fast and usable on mobile.

## What will change
- Back up the current homepage hero before replacing it.
- Build the animated card sequence around dieVektor’s capabilities: AI Agents, Voice AI, Software, Automation, Multilingual Systems, and Digital Products.
- Replace generic gallery copy with dieVektor’s existing positioning: “Build intelligent systems. Not just software.” plus clear project and solutions actions.
- Use lightweight, locally rendered branded cards instead of 20 externally hosted stock images, avoiding extra image downloads and licensing/dependency risk.
- Keep desktop wheel/mouse interaction, but use a simpler touch-safe animation and swipe/drag behavior on mobile so the page does not trap scrolling.
- Respect reduced-motion settings and reduce card count/effects on smaller screens.
- Keep the existing navigation, following homepage sections, routes, and business content unchanged.

## Technical details
- Update `src/components/home2/Hero.tsx` only, with a backup under `.backup3/`.
- Reuse the existing Framer Motion dependency and semantic `dv` design tokens.
- Avoid render-per-frame React state where possible by using CSS transforms and Framer Motion values.
- Validate the homepage at desktop and mobile sizes for layout, scroll behavior, visible calls to action, loading errors, and console errors.
