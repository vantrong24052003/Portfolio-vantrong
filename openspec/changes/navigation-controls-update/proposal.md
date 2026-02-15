## Why

Improve the user experience for navigating between portfolio scenes. Many users prefer explicit click-based navigation or keyboard shortcuts over scroll-based interaction, which can sometimes be sensitive or accidental.

## What Changes

1.  **Introduce Manual Navigation Buttons**: Add "Next" and "Previous" action buttons to each scene to allow users to progress sequentially.
2.  **Disable Scroll Navigation**: Remove the `wheel` event listener in `App.tsx` that triggers scene changes.
3.  **Implement Keyboard Navigation**: Add listeners for the Left and Right arrow keys to switch between scenes.

## Capabilities

### New Capabilities
- `navigation-controls`: UI controls and keyboard listeners for scene transitions.

### Modified Capabilities
- `system-shell-layout`: Modification to allow page-specific navigation buttons within the layout.

## Impact

- `App.tsx`: Central hub for scene management and event listeners.
- `SceneLayout.tsx` (and related layouts): To accommodate the new navigation buttons.
- `i18n`: New labels for navigation buttons (Next/Previous).
