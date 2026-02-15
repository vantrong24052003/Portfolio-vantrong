## ADDED Requirements

### Requirement: Theme Selection List
The system SHALL provide a list of 6 color palettes: Red, Blue, Green, Purple, Orange, and Pink.

#### Scenario: Displaying palette options
- **WHEN** the user opens the theme switcher
- **THEN** the system SHALL show all 6 color options

### Requirement: Dark and Light Mode Toggle
The system SHALL allow switching between Dark and Light versions of each color palette.

#### Scenario: Toggling mode
- **WHEN** the user clicks the "Sun" icon while in Dark mode
- **THEN** the system SHALL switch to the Light mode version of the current palette

### Requirement: Smooth Theme Transition
The system SHALL apply a smooth visual transition when the theme changes.

#### Scenario: Visual transition
- **WHEN** the theme is updated
- **THEN** the background and foreground colors SHALL transition smoothly over 600ms
