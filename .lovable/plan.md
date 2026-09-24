# dieVekter Interactive Systems Section

## Goal
Add a premium, self-contained showcase directly below the homepage hero, inspired by the uploaded 3D carousel composition but rewritten entirely for dieVekter’s AI, software, and automation offering. Improve homepage SEO without changing the existing hero or broader page structure.

## What will change
- Back up every file before changing it.
- Create a new post-hero section with:
  - a concise product statement around multilingual AI agents and intelligent business systems;
  - a rotating 3D ring of lightweight, CSS-rendered capability cards;
  - a foreground “business operations” interface showing an AI agent turning a customer conversation into qualified actions;
  - clear links to AI solutions and project enquiry pages;
  - responsive desktop, tablet, and mobile layouts with no horizontal overflow;
  - reduced-motion behavior that freezes decorative movement.
- Insert the new section immediately after the existing hero and before the current capabilities section.
- Strengthen homepage search metadata and structured data around multilingual AI agents, software engineering, workflow automation, and India-focused technology.

## Visual direction
- Preserve the uploaded reference’s layered depth: rotating cards behind a foreground product interface.
- Use dieVekter’s existing dark, cyan, and electric-violet design tokens rather than the fictional e-commerce brand or imagery.
- Use icons, interface states, and real service language instead of stock product photography.
- Keep the component semantic and readable when animation or scripts are unavailable.

## Technical details
- Build a focused React component and scoped CSS; no new runtime dependency.
- Render only the visible 3D-card range while keeping motion continuous and efficient.
- Pause animation in background tabs and for reduced-motion users.
- Update the homepage title, description, Open Graph/Twitter copy, and JSON-LD; retain canonical URLs and existing analytics.
- Verify desktop, tablet, and mobile layouts, links, animation fallback, console output, and the preview build.
