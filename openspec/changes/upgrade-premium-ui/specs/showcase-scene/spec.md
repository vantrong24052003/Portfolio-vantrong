# Spec: showcase-scene

## ADDED Requirements

### Requirement: card-to-digital-cubes
Các `ProjectCard` phải được chuyển đổi sang dạng khối hộp kỹ thuật số (Digital Cubes) với hiệu ứng 3D.

#### Scenario: cube-hover-elevation
- **WHEN** Di chuột vào Project Card.
- **THEN** Khối hộp sẽ hơi nhấc lên (translateZ) và chuyển từ chế độ Grayscale sang màu sắc rực rỡ (Saturate 100%).

### Requirement: mini-deploy-log
Dưới mỗi Project Card sẽ có một khu vực log nhỏ mô tả trạng thái giả lập của project.

#### Scenario: log-boot-on-hover
- **WHEN** Card được hover.
- **THEN** Hiển thị dòng text chạy: `BOOTING SYSTEM... SUCCESS. STACK: RUBY/RAILS`.
