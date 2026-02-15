# Spec: overview-scene

## ADDED Requirements

### Requirement: code-editor-typewriter
Phần hiển thị code trong `CodeEditor` phải có hiệu ứng gõ chữ (Typewriter animation) khi Scene bắt đầu xuất hiện.

#### Scenario: boot-sequence
- **WHEN** Trang Overview được render.
- **THEN** Nội dung code Ruby sẽ được "gõ" từng ký tự với tốc độ 50ms/ký tự, kết thúc bằng một cursor nhấp nháy tại dòng cuối.

### Requirement: branding-glitch-hover
Tên "ĐOÀN VÕ VĂN TRỌNG" phải có hiệu ứng glitch màu sắc khi người dùng hover vào.

#### Scenario: identity-distortion
- **WHEN** Mouse hover vào phần Branding.
- **THEN** Text sẽ thực hiện hiệu ứng tách màu (RGB split) và rung nhẹ trong thời gian ngắn (0.2s).
