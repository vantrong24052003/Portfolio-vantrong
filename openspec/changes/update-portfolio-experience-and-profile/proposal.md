## Why

The portfolio needs to be updated to accurately reflect the developer's current professional level, including 1 year of experience, proficiency in DevOps, and the Ruby Silver Certification. Additionally, moving the profile image to the landing page (Overview) improves personal branding and immediately introduces the developer to potential employers.

## What Changes

- **Experience Update**: Update the professional bio and metadata to state 1 year of experience.
- **Skillset Expansion**: Add DevOps proficiency and Ruby Silver Certification to the skills and achievements sections.
- **Profile Image Relocation**: Move the profile avatar/image from the final Connection scene to the landing Overview scene.
- **Layout Adjustments**: Recalibrate the Identity Module in the Overview scene to integrate the profile image while maintaining the "high-tech" aesthetic.
- **UI Refinement**: Customize UI components across scenes to ensure consistent visual hierarchy with the new additions.

## Capabilities

### New Capabilities
- `achievements-module`: A specialized UI component to showcase certifications and awards, specifically the Ruby Silver Certificate.

### Modified Capabilities
- `overview`: Update the identity presentation to include the profile image, 1 year experience, and DevOps skills.
- `connection`: Adjust the scene layout and visual focus following the relocation of the profile image.

## Impact

- `src/features/overview/`: Significant updates to `OverviewScene.tsx` and its sub-components (`IdentityModule`, `CodeEditor` to reflect Ruby expertise).
- `src/features/connection/`: Minor updates to `ConnectionScene.tsx` to handle the removed or modified avatar.
- `src/i18n/`: Updates to translation keys for experience, skills, and certifications.
- `src/shared/`: Potential updates to shared motion components or assets.
