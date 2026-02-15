# Multi-Theme Switcher Implementation

The portfolio now supports 6 distinct color palettes (Red, Blue, Green, Purple, Orange, Pink) in both Light and Dark modes. The theme state is synchronized with the URL query parameters (`?theme=palette-mode`), allowing for shareable UI states and consistent navigation.

## Changes Made

### Styling & Foundations
- **Global CSS**: Updated `src/styles/index.css` with comprehensive CSS variables for all theme combinations.
- **Tailwind Integration**: Configured Tailwind v4 `@theme` to map CSS variables to color tokens (`primary`, `accent`, `background`, etc.).
- **Transitions**: Added a smooth 600ms transition for all theme-affected properties.

### Infrastructure
- **Types**: Added `ThemePalette`, `ThemeMode`, and `Theme` types in `src/features/theme/types.ts`.
- **URL-based State**: Implemented `ThemeContext` in `src/features/theme/context/ThemeContext.tsx` that reads and updates the `theme` query parameter.
- **App Integration**: Wrapped the application in `ThemeProvider` within `src/main.tsx`.

### UI & Layout Refinements
- **Light Mode Contrast**: Darkened the text colors (`--foreground` and `--muted-foreground`) to absolute/near black for perfect readability in light mode.
- **Language Switcher Position**: Moved the EN/VI toggle from the top navigation to the bottom-right row, alongside the theme switcher, creating a unified control center.
- **Unified Theming**: Audited and updated `IdentityModule`, `ProjectCard`, `MilestoneCard`, and `ExperienceStats` to ensure they are 100% theme-aware and high-contrast in all modes.

## Verification Results

### Theme Toggling
- Selecting a palette (e.g., Green) immediately updates the UI and the URL to `?theme=green-dark`.
- Toggling Light/Dark mode updates the UI and URL (e.g., `?theme=green-light`).
- Smooth transitions are applied to background, text, and primary elements.

### URL Persistence
- Refreshing the page with a `theme` parameter correctly hydrates the UI with that theme.
- Sharing a link with `?theme=pink-dark` allows others to see the portfolio in that specific style.

### Performance
- Removed `localStorage` blocking script to simplify index.html.
- GPU-accelerated transforms and transitions used for smooth performance.
