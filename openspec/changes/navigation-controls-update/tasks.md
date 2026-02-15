## 1. i18n Setup

- [x] 1.1 Add `next` and `prev` keys to `common.yml` for both `en` and `vi` locales.

## 2. Event Listener Update (App.tsx)

- [x] 2.1 Remove the `handleWheel` logic and the associated `useEffect` that attaches the `wheel` event listener.
- [x] 2.2 Add a new `keydown` event listener in `App.tsx` to handle `ArrowRight` (next) and `ArrowLeft` (prev).
- [x] 2.3 Refactor the state management to ensure `handleSceneChange` is accessible to the new UI buttons and keyboard listeners.

## 3. Navigation UI Components

- [x] 3.1 Create a new `SceneNavigation` component in `src/layouts` or a shared components directory.
- [x] 3.2 Implement "Prev" and "Next" buttons with the project's glass-panel styling and icons (e.g., `FaChevronLeft`, `FaChevronRight`).
- [x] 3.3 Ensure the buttons are positioned correctly (e.g., fixed at the bottom or sides) and are responsive.

## 4. Layout Integration

- [x] 4.1 Update `App.tsx` to include the `SceneNavigation` component globally or within the `CameraWarpContainer`.
- [x] 4.2 Verify that the buttons correctly trigger scene transitions.

## 5. Verification

- [x] 5.1 Test manual clicks on "Next" and "Prev" buttons across all scenes.
- [x] 5.2 Test keyboard navigation using arrow keys.
- [x] 5.3 Confirm that mouse scrolling no longer triggers scene transitions.
