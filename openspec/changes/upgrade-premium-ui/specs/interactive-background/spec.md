# Spec: interactive-background

## ADDED Requirements

### Requirement: pointer-reactive-mesh
Background phải hiển thị một mạng lưới (mesh) các điểm hoặc đường kẻ phản ứng với vị trí con trỏ chuột.

#### Scenario: mesh-distortion-on-mouse-move
- **WHEN** Người dùng di chuyển con trỏ chuột trên màn hình.
- **THEN** Các điểm lưới trong bán kính 100px quanh con trỏ sẽ bị đẩy ra xa hoặc hút lại gần (tùy thuộc vào thiết kế cụ thể), tạo hiệu ứng lồi lõm 3D.

### Requirement: global-scanline-effect
Bổ sung hiệu ứng scanline (dòng quét) mờ chạy từ trên xuống dưới trên toàn bộ giao diện.

#### Scenario: scanline-animation
- **WHEN** Ứng dụng đang chạy.
- **THEN** Một đường line ngang với độ đục (opacity) thấp (0.05 - 0.1) sẽ di chuyển liên tục từ top 0% đến bottom 100% trong vòng 4-6 giây.

### Requirement: digital-river-flow
Background phải có hiệu ứng luồng sáng (digital flow) chảy chậm phía sau các panel.

#### Scenario: background-glow-drift
- **WHEN** Ứng dụng ở trạng thái tĩnh.
- **THEN** Các mảng sáng (blobs) màu Primary và Ruby sẽ di chuyển chậm (drift) theo quỹ đạo ngẫu nhiên để tránh cảm giác màn hình bị "chết".
