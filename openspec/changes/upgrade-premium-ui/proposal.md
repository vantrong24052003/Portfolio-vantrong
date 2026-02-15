# Proposal: upgrade-premium-ui

## Why

Project này hiện tại đã có bộ khung tốt, nhưng để thực sự gây ấn tượng mạnh với các nhà tuyển dụng (Tech Lead/Recruiter), Portfolio cần thể hiện một đẳng cấp cao hơn về tư duy hệ thống và thẩm mỹ. 

Việc nâng cấp lên "Premium Version" giúp:
- Khẳng định kỹ năng Frontend chuyên sâu (dù là Backend focus).
- Tạo trải nghiệm "Cinematic" (điện ảnh) khiến người xem không thể rời mắt.
- Thể hiện sự chỉn chu trong từng chi tiết micro-interaction.

## What Changes

Chúng ta sẽ nâng cấp toàn diện trải nghiệm người dùng thông qua:
- Thay thế hiệu ứng chuyển cảnh đơn giản bằng **Camera Warp / 3D Space Transition**.
- Nâng cấp Background tĩnh thành **Interactive Mesh Background** phản ứng theo thời gian thực với chuột.
- Thêm hiệu ứng **Typewriter** và **Glitch** cho trang Overview để tăng chất "hacker/cyber" đặc trưng của Backend.
- Chuyển đổi Grid dự án ở trang Showcase thành các **Digital Cubes** có tương tác 3D.
- Cập nhật hệ thống định danh với **System Status Bar** (Header).

## Capabilities

### New Capabilities
- `premium-motion-system`: Triển khai hệ thống chuyển động cinematic và camera warp bằng Framer Motion cho toàn bộ ứng dụng.
- `interactive-background`: Xây dựng môi trường background kỹ thuật số với lưới điểm (mesh) phản ứng linh hoạt theo vị trí chuột và hiệu ứng scanline.
- `system-shell-layout`: Nâng cấp bố cục toàn cục với thanh trạng thái hệ thống (Header) và định hướng phong cách Shell/Terminal cao cấp.

### Modified Capabilities
- `overview-scene`: Tích hợp hiệu ứng Typewriter cho CodeEditor và hiệu ứng Glitch/Glow cho IdentityModule.
- `showcase-scene`: Nâng cấp ProjectCard thành Digital Cubes với hiệu ứng hover và thanh Project Log mô phỏng quá trình deploy.

## Impact

- **UI/UX**: Toàn diện các Scene (Overview, Journey, Showcase, Connection).
- **Dependencies**: Cần cài đặt thêm `framer-motion` để xử lý các animation phức tạp.
- **Performance**: Cần tối ưu GPU-accelerated transforms để đảm bảo mượt mà trên nhiều thiết bị.
- **Styles**: Cập nhật `index.css` với các variables và utility mới (Ruby accent, flow animation).
