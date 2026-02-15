# Spec: system-shell-layout

## ADDED Requirements

### Requirement: system-status-header
Tích hợp một thanh Header cố định phía trên (Fixed Top) mô phỏng thanh trạng thái của một hệ điều hành backend/terminal.

#### Scenario: status-indicators-display
- **WHEN** Header hiển thị.
- **THEN** Phía bên trái hiển thị Brand Name, phía bên phải hiển thị các thông số như `SYSTEM: ONLINE`, `v2.4.0-build`, và một đèn chỉ báo nháy xanh (Ping animation).

### Requirement: unified-glass-shell
Toàn bộ các Scene phải được bao bọc trong một bố cục Shell đồng nhất giúp quản lý hiệu ứng Layered UI.

#### Scenario: shell-layering
- **WHEN** Main Layout render.
- **THEN** Sắp xếp thứ tự Z-index: Background (Layer 0) -> Mesh/Scanline (Layer 1) -> Scene Content (Layer 2) -> Global Navigation/Status (Layer 3).
