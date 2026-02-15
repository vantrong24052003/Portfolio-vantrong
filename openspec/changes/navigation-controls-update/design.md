## Context

The current portfolio uses a scroll-based navigation system (in `App.tsx`) to switch between the Overview, Journey, Showcase, and Connection scenes. While immersive, it can be frustrating for users who prefer precise control or find scroll-jacking intrusive.

## Goals / Non-Goals

**Goals:**
- Provide clear, accessible "Next" and "Prev" buttons on every page.
- Replace scroll-based transitions with intentional user actions (click/keyboard).
- Maintain the "Camera Warp" transition effect between scenes.
- Support responsive design (mobile-friendly buttons).

**Non-Goals:**
- Redesigning the scene transition animations.
- Adding a complex site map or global search.

## Decisions

- **Navigation Placement**: The "Next" and "Prev" buttons will be placed at the bottom or sides of the screen, styled with the "glass-panel" theme to stay consistent with the premium UI.
- **Keyboard Listener**: Implement a global `keydown` listener in `App.tsx` specifically for the `ArrowRight` and `ArrowLeft` keys.
- **Scroll Removal**: The `handleWheel` function in `App.tsx` and its associated event listener will be entirely removed.
- **i18n Integration**: Buttons will use `common.navigation.next` and `common.navigation.prev` keys.

## Risks / Trade-offs

- **Interaction Density**: Adding more buttons might slightly clutter the clean, minimal aesthetic. Using transparency and subtle hover effects (glow-ruby) will mitigate this.
- **Keyboard Conflicts**: Need to ensure the arrow keys don't interfere with other interactive elements (like the scrollable code block, though that uses vertical scroll).
