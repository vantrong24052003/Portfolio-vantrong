# Design: upgrade-premium-ui

## Context

Dự án hiện tại đang sử dụng React 19, Tailwind v4 và tích hợp i18next cho đa ngôn ngữ. Giao diện được thiết kế theo phong cách "The Digital River" với các scene tách biệt nhưng chuyển đổi còn đơn giản (fade transition). Hệ thống layout hiện tại đã có một số hiệu ứng glassmorphism cơ bản nhưng chưa đạt được độ "premium" và cinematic như mong đợi.

## Goals / Non-Goals

**Goals:**
- Triển khai hệ thống chuyển cảnh 3D Camera Warp mượt mà.
- Xây dựng background tương tác phản ứng với con trỏ chuột.
- Thêm các micro-interactions mang tính định danh (Glitch, Typewriter).
- Đảm bảo hiệu suất tốt (60fps) thông qua tối ưu hóa GPU.

**Non-Goals:**
- Thay đổi cấu trúc dữ liệu hoặc nội dung của các Scene.
- Thay đổi logic điều hướng gốc (vẫn sử dụng wheel scroll và navigator).
- Phụ thuộc vào các thư viện 3D nặng nề như Three.js (ưu tiên CSS Transform và Framer Motion).

## Decisions

### 1. Motion Engine (Framer Motion)
Sử dụng `framer-motion` làm thư viện chính để quản lý animations. 
- **Rationale**: Thư viện này tích hợp tốt với React, hỗ trợ `AnimatePresence` cho exit animations và các phép biến đổi 3D (perspective, rotateY, scaleZ) một cách khai báo và tối ưu.

### 2. Camera Warp Architecture
Thay vì chỉ thay đổi opacity, chúng ta sẽ áp dụng:
- `perspective: 1000px` trên container cha.
- Scene hiện tại: `animate={{ scale: 0.8, opacity: 0, z: -500 }}`.
- Scene mới: `initial={{ scale: 1.5, opacity: 0, z: 500 }} animate={{ scale: 1, opacity: 1, z: 0 }}`.
- **Rationale**: Tạo chiều sâu giả lập không gian 3D mà không cần WebGL.

### 3. Interactive Mesh Background
Sử dụng một Canvas mỏng hoặc một Grid các SVG dots để vẽ mesh.
- Sử dụng Hook `useMousePosition` để tính toán khoảng cách từ chuột đến các điểm mesh.
- Áp dụng `framer-motion` cho từng điểm hoặc sử dụng CSS Variables `--mouse-x`, `--mouse-y` để cập nhật vị trí distortion.

### 4. Typewriter System
Xây dựng một custom component `Typewriter` nhận vào một chuỗi hoặc mảng nội dung.
- Sử dụng `useEffect` kết hợp với `setTimeout` hoặc `framer-motion` variants để hiển thị từng ký tự.
- Tích hợp thêm âm thanh click nhẹ (audio sprite) nếu cần để tăng tính immersive.

### 5. Color Palette Extension (Ruby Accent)
Bổ sung biến HSL cho màu đỏ Ruby vào `index.css`:
- `--accent-ruby: 0 72% 54%`
- Phối hợp màu này vào các Border Glow và Hover Highlight của CodeEditor.

## Risks / Trade-offs

- **Performance Risk**: Hệ thống Camera Warp với nhiều lớp blur có thể gây giật lag trên các trình duyệt cũ hoặc thiết bị yếu.
  - *Mitigation*: Sử dụng `prefers-reduced-motion` để tắt hiệu ứng nặng và tối ưu `will-change`.
- **Z-Index Complexity**: Việc quản lý nhiều lớp (Background, Mesh, Scene, Header) có thể dẫn đến lỗi hiển thị.
  - *Mitigation*: Định nghĩa hằng số Z-index rõ ràng trong `index.css` hoặc `constants.ts`.
- **Dependency Inflation**: Thêm `framer-motion` sẽ tăng bundle size.
  - *Mitigation*: Sử dụng `m` component (Lazy motion) từ framer-motion để giảm kích thước tải ban đầu.
