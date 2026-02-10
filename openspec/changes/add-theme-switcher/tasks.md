## 1. Style Foundations

- [ ] 1.1 Update `src/styles/index.css` with comprehensive CSS variables for all 6 themes.
- [ ] 1.2 Configure Tailwind v4 `@theme` block to map variables to color tokens.
- [ ] 1.3 Add smooth transition utility and layer refinements to `index.css`.

## 2. Infrastructure

- [ ] 2.1 Create `src/features/theme/types.ts` for theme-related type definitions.
- [ ] 2.2 Implement `src/features/theme/context/ThemeContext.tsx` for state and persistence.
- [ ] 2.3 Wrap the application in the `ThemeProvider`.

## 3. UI Implementation

- [ ] 3.1 Create `ThemeSwitcher` component in `src/features/theme/components/ThemeSwitcher/`.
- [ ] 3.2 Add the `ThemeSwitcher` to `src/App.tsx` navigation area.
- [ ] 3.3 Audit and replace hardcoded colors in existing components (Journey, Showcase, Connection).

## 4. Optimization

- [ ] 4.1 Add the theme-init blocking script to `index.html` to prevent FOUC.
- [ ] 4.2 Verify color contrast and accessibility across all themes.
