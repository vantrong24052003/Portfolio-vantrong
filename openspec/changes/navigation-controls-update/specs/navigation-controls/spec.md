## ADDED Requirements

### Requirement: INTERACTIVE BUTTONS
The system MUST provide "Next" and "Previous" navigation buttons on every scene.

#### Scenario: Navigate Forward
- **WHEN** user clicks the "Next" button
- **THEN** the system increments the `currentScene` index and triggers the warp transition

#### Scenario: First Scene Constraint
- **WHEN** the user is on the first scene (Overview)
- **THEN** only the "Next" button is visible, OR the "Previous" button navigates to the last scene (Looping behavior)

### Requirement: KEYBOARD LISTENER
The system MUST respond to arrow keys for scene navigation.

#### Scenario: Arrow Right Key
- **WHEN** the `ArrowRight` key is pressed
- **THEN** the system navigates to the next scene

#### Scenario: Arrow Left Key
- **WHEN** the `ArrowLeft` key is pressed
- **THEN** the system navigates to the previous scene

### Requirement: SCROLL DISABLE
The system MUST NOT change scenes based on mouse scroll events.

#### Scenario: Mouse Wheel Usage
- **WHEN** the user scrolls the mouse wheel
- **THEN** the scene remains unchanged, allowing for internal scrolling within sections (like Journey or Code Editor)
