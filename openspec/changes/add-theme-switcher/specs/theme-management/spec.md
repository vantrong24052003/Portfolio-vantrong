## ADDED Requirements

### Requirement: Theme State Persistence
The system SHALL persist the selected theme (color palette and mode) in the browser's `localStorage`.

#### Scenario: Persistent theme on reload
- **WHEN** the user selects "Red Dark" theme and reloads the page
- **THEN** the system SHALL apply the "Red Dark" theme immediately upon loading

### Requirement: Theme Application Via Data Attribute
The system SHALL apply the selected theme by setting the `data-theme` attribute on the `<html>` element.

#### Scenario: Theme attribute update
- **WHEN** the user switches from "Blue Dark" to "Green Light"
- **THEN** the `<html>` element SHALL have `data-theme="green-light"`

### Requirement: System Theme Detection (Default)
The system SHALL default to the user's preferred theme (indicated in `localStorage`) or fall back to "blue-dark" if no preference exists.

#### Scenario: Initial visit default
- **WHEN** a user visits the site for the first time
- **THEN** the system SHALL apply the "blue-dark" theme
