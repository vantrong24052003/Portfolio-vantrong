# Tasks: upgrade-premium-ui

## 1. Environment & Foundation

- [x] 1.1 Cài đặt thư viện `framer-motion`
- [x] 1.2 Cập nhật `src/styles/index.css` với biến HSL cho Ruby Accent (`--accent-ruby`) và các keyframes cho flow/ping animations.
- [x] 1.3 Tạo/Cập nhật Utility classes trong Tailwind cho hiệu ứng glitch và neon glow.

## 2. Global Layout & Shell

- [x] 2.1 Tạo component `SystemHeader` mới với Brand Mark và System Status Bar (Ping animation).
- [x] 2.2 Nâng cấp `SceneLayout` để hỗ trợ cấu trúc phân lớp (Z-index layering) và hiệu ứng perspective 3D.
- [x] 2.3 Tích hợp `SystemHeader` vào giao diện chính của App.

## 3. Interactive Background Modules

- [x] 3.1 Triển khai component `InteractiveMesh` (Canvas hoặc SVG dots) phản ứng theo con trỏ chuột.
- [x] 3.2 Thêm component `ScanlineOverlay` bao phủ toàn bộ màn hình với hiệu ứng di chuyển liên tục.
- [x] 3.3 Tối ưu hóa các background blobs hiện tại với hiệu ứng "drift" ngẫu nhiên.

## 4. Cinematic Motion System

- [x] 4.1 Triển khai hệ thống `CameraWarpContainer` sử dụng `AnimatePresence` để quản lý chuyển cảnh 3D.
- [x] 4.2 Cập nhật logic chuyển cảnh trong `App.tsx` để kích hoạt hiệu ứng Warp (Scale/TranslateZ).
- [x] 4.3 Thêm hiệu ứng parallax lệch tâm cho các `glass-panel` khi đang di chuyển giữa các scene.

## 5. Scene-Specific Refinements

- [x] 5.1 Overview: Triển khai hiệu ứng `Typewriter` cho nội dung trong `CodeEditor`.
- [x] 5.2 Overview: Thêm hiệu ứng `Glitch` và tách màu RGB cho text Branding khi hover.
- [x] 5.3 Showcase: Chuyển đổi `ProjectCard` sang cấu trúc khối hộp (Digital Cube) với Transform 3D.
- [x] 5.4 Showcase: Tích hợp `MiniDeployLog` hiển thị text chạy khi hover vào Project Card.

## 6. Optimization & Final Polish

- [x] 6.1 Tối ưu hóa hiệu suất bằng cách sử dụng `will-change` và Lazy motion (m) từ framer-motion.
- [x] 6.2 Kiểm tra và hỗ trợ `prefers-reduced-motion` để hạ cấp animation trên thiết bị yếu.
- [x] 6.3 Kiểm tra hiển thị responsive trên Mobile (thu gọn hiệu ứng nặng).
