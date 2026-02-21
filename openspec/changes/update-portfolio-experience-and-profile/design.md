## Context

The portfolio currently presents the developer as a student/junior with limited experience and hides the profile image in the final scene. The developer now has 1 year of professional experience, DevOps mastery, and a Ruby Silver Certification, which needs to be prominently displayed on the landing page to maximize impact for recruiters.

## Goals / Non-Goals

**Goals:**
- Update all professional experience mentions to "1 Year".
- Integrate DevOps into the core tech stack visibility.
- Move the profile image to the `OverviewScene` for immediate personal branding.
- Specifically highlight the Ruby Silver Certification as a key achievement.
- Maintain the "cyberpunk/high-tech" visual aesthetic.

**Non-Goals:**
- Completely redesigning the codebase structure.
- Changing the navigation system (Keyboard arrows and Scene buttons).

## Decisions

### 1. OverviewScene Layout Restructuring
The `IdentityModule` will be updated to include a profile image. On desktop, this will be positioned to the left of the main heading or integrated into a new top-level layout within the module. On mobile, it will be centered above the name.

### 2. DevOps & Ruby Silver Visibility
- **DevOps**: A new `TechBadge` for DevOps will be added to the stack.
- **Ruby Silver**: A new achievement card will be added to the `IdentityModule`, using an amber/golden theme to signify the "Silver" status.

### 3. ConnectionScene Refinement
The `IdentityGlitch` component in the `ConnectionScene` will be simplified or modified to avoid redundancy once the image is moved to the landing page. It may transitioned to a "System Symbol" or a different visual representation.

### 4. CodeEditor Content Update
The mock Ruby code in the `CodeEditor` will be updated to a more "expert" level snippet, perhaps involving more complex logic or a mention of DevOps/System architecture to reflect the new experience level.

## Risks / Trade-offs

- **[Risk] Layout Overflow** → Adding more badges and an image to `IdentityModule` might cause overflow on small height screens. 
  - *Mitigation*: Use responsive grid columns and adjust padding/margins for medium screens.
- **[Risk] Visual Clutter** → Too many badges might detract from the main name.
  - *Mitigation*: Categorize badges or use a "Skills" vs "Achievements" split.
