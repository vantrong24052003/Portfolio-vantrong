## Why

The current portfolio is composed of four distinct static HTML/Tailwind scenes. To create a cohesive, modern, and maintainable interactive experience, these scenes need to be unified into a single React application. This transition will enable smooth scene transitions, global state management, and reusable UI components, while significantly improving code quality and maintainability.

## What Changes

- Initialize a full-featured React portfolio application using Vite and Tailwind CSS.
- Port all four scenes (Identity Boot, Career Journey, Product Showcase, Final Connection) from static HTML to React components.
- Implement a unified layout and navigation system to transition between scenes.
- Centralize global styles (themes, animations, glassmorphism) in `src/index.css` and Tailwind config.
- Use `react-icons` for a unified and lightweight iconography system across all scenes.

## Capabilities

### New Capabilities
- `overview-scene`: Digital identity introduction with simulated code editor.
- `journey-scene`: Interactive timeline showcasing career milestones and education.
- `showcase-scene`: Project grid with hover effects and technical details.
- `connection-scene`: Final contact page with social links and glitch-style branding.
- `scene-navigator`: Navigation logic to switch between the four scenes.

### Modified Capabilities
- None

## Impact

- Provides a complete, high-fidelity interactive portfolio.
- Establishes a modular React architecture suitable for further expansion.
- Improves performance through optimized assets and component-based rendering.
- Enhances developer experience with a clean, organized codebase.
