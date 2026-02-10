## Context

The portfolio currently uses a single dark theme with fixed colors (primarily red) defined in `src/styles/index.css`. The goal is to migrate to a multi-theme system supporting several color palettes (Red, Blue, Green, Purple, Orange, Pink) and both light/dark modes.

## Goals / Non-Goals

**Goals:**
- Implement a theme switching system using CSS variables and Tailwind v4.
- Support 6 distinct color themes.
- Support both Light and Dark modes for each theme.
- Persist theme selection in the URL query parameter.
- Provide a smooth transition animation when switching themes.

**Non-Goals:**
- Custom theme creation by users.
- Automated system-level theme detection (focus is on manual selection for now).

## Decisions

- **Theme Variable Structure**: Use CSS variables with HSL values to allow for opacity modifiers. Themes will be applied via `data-theme` attribute on the `<html>` element.
- **Tailwind Integration**: Map CSS variables to Tailwind tokens within the `@theme` block in `src/styles/index.css`.
- **State Management**: A `ThemeContext` provider in `src/features/theme/context/ThemeContext.tsx` will manage the current theme state, synchronizing it with the `theme` URL query parameter.
- **UI Component**: A `ThemeSwitcher` component will be added to the main layout (likely in `src/App.tsx` or a navigation bar) using `lucide-react` icons for a premium feel.
- **Default Theme**: The default theme will be `blue-dark` (matching the user's preference for a Figma-style dark theme).

## Risks / Trade-offs

- **Risk: Style Inconsistency** → Some existing components might have hardcoded colors (e.g., `#ec1e13`).
  - *Mitigation*: Audit and replace hardcoded colors with `var(--primary)`, `var(--background)`, etc.
- **Risk: Performance** → Heavy CSS variables can sometimes cause layout shifts.
  - *Mitigation*: Ensure variables are scoped appropriately and transitions are transform/opacity based.
- **Risk: Initial Load Flash** → React takes time to hydrate, leading to a flash of the default theme.
  - *Mitigation*: Ensure the default theme is aesthetically pleasing and matches the most common preference (dark).
