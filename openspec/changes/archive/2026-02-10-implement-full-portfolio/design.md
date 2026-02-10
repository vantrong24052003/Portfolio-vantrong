## Context

The portfolio project aims to provide a "Digital River" themed interactive experience across four scenes. Implementation requires migrating from isolated static HTML templates to a unified React + Vite architecture.

## Goals / Non-Goals

**Goals:**
- Create a single-page application (SPA) that acts as a multi-scene interactive portfolio.
- Standardize the design system: Colors (Ruby Red, Deep Graphite), Typography (Space Grotesk, JetBrains Mono), and UI patterns (Glassmorphism, Scanlines).
- Implement a modular architecture where each scene and its sub-sections are reusable components.
- Enable smooth transitions between scenes.
- Centralize assets and iconography using `react-icons`.

**Non-Goals:**
- Real-time backend integration (keep mock data for now).
- Extensive SEO optimization at this stage.

## Decisions

### 1.- **Unified CSS**: Define the "Digital River" theme (colors like Ruby Red `#ec1e13`, animations) using Tailwind v4's `@theme` block in `src/index.css`.
- **Global Styles**: Move shared animations (`scanline`, `pulse-slow`, `digital-river-bg`) and glassmorphism utilities into the CSS file.

### 2. Component Architecture
- **`SceneLayout`**: A wrapper component for all scenes to handle the background, mesh overlay, and scanlines.
- **`SceneNavigator`**: A top/bottom navigation bar to trigger scene changes.
- **Feature Components**:
  - `Overview`: `ProfileCard`, `CodeMockup`.
  - `Journey`: `Timeline`, `MilestoneDetail`.
  - `Showcase`: `ProjectGrid`, `ProjectCard`.
  - `Connection`: `SocialHub`, `ContactCTA`.

### 3. State Management
- Use a simple `useState` or a lightweight store (like Zustand) to track the current active scene and handle transition animations.

### 4. Iconography
- Standardize on `react-icons` for all icons (Material Design, FontAwesome, SiRuby, etc.).

## Risks / Trade-offs

- **Performance**: Heavy use of glassmorphism and animations across four scenes might require optimization (e.g., using `will-change` or limiting blur radius).
- **Bundle Size**: Including icons for all scenes could increase bundle size; only import specific icons needed.
