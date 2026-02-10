## Why

The current UI lacks visual flexibility. Adding a theme switcher allows users to customize their experience with different color palettes (Red, Blue, Green, Purple, Orange, Pink) in both Light and Dark modes, making the portfolio more interactive and personalized.

## What Changes

- **Add Theme Variables**: Define CSS variables for 6 color themes in both Light and Dark modes within the global CSS.
- **Implement Theme Switcher**: Create a UI component (button/dropdown) to allow users to toggle between available themes.
- **State Management**: Persist the selected theme in the URL query parameter (e.g., `?theme=blue-dark`) to allow sharing and maintain consistency.
- **Tailwind v4 Integration**: Ensure the new theme tokens work seamlessly with Tailwind CSS v4's utility classes.
- **Animations**: Add smooth fade-in transitions when switching themes.

## Capabilities

### New Capabilities
- `theme-management`: Handles the logic for detecting, applying, and persisting theme state.
- `ui-theme-switcher`: Provides the interactive interface for users to select their preferred theme.

### Modified Capabilities
- (None - this is a new feature layer)

## Impact

- `src/index.css`: Will be updated to include the comprehensive set of CSS variables and layer-based utility refinements.
- `src/App.tsx`: Or the main layout component to host the theme switcher.
- Global styling: Ensuring existing components use the `--primary`, `--accent`, etc., tokens instead of hardcoded colors.
