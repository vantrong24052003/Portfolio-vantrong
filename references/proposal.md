# MASTER DESIGN PROPOSAL: THE DIGITAL RIVER (V10.0)

**Dự án:** Portfolio Tương tác Đa phân cảnh (Scene-based Interactive Portfolio)
**Chủ sở hữu:** ĐOÀN VÕ VĂN TRỌNG
**Định vị thương hiệu:** Backend Developer (Ruby on Rails Focus)

---

## I. MỤC ĐÍCH CHIẾN LƯỢC (PROJECT PURPOSE)
Dự án này được xây dựng để giải quyết 3 bài toán cốt lõi:
1. **Thể hiện tư duy hệ thống (System Thinking):** Minh họa dòng chảy từ mã nguồn (Code) đến thực tế vận hành (Product).
2. **Khẳng định năng lực kỹ thuật:** Sử dụng hình ảnh trực quan từ code (Markdown, Ruby class) để tạo sự tin tưởng tuyệt đối với Tech Lead và Recruiter.
3. **Tối ưu trải nghiệm người dùng kỹ thuật:** Cung cấp thông tin theo lớp (Layered Information), giúp người xem nắm bắt nhanh thông tin định danh và năng lực thực tế.

---

## II. HỆ THỐNG GIAO DIỆN TỔNG QUAN (GLOBAL UI)
- **Brand Mark (Logo Tên):** Cố định tại góc trên bên trái: **ĐOÀN VÕ VĂN TRỌNG** (Space Grotesk, Bold, Uppercase).
- **Theme:** 
    - **Deep Graphite (#0B0F14)** chủ đạo.
    - Nhấn bằng màu **đỏ Ruby (#CC342D)** đại diện cho ngôn ngữ Ruby/Framework Rails.
- **Typography:**
    - **Space Grotesk:** Dành cho các tiêu đề và định danh.
    - **Inter:** Dành cho nội dung chi tiết.
    - **JetBrains Mono:** Dành cho các khối mã nguồn và dữ liệu hệ thống.

---

## III. CHI TIẾT CẤU TRÚC 4 SLIDE (SCENE-BY-SCENE)

### SLIDE 01: IDENTITY & THE CORE (Bản sắc)
**Bên trái (Nội dung tĩnh):**
- **Main Identity:** ĐOÀN VÕ VĂN TRỌNG
- **Primary Contacts:** 
    - Email: trongdn2405@gmail.com
    - Phone: 0357.407.264
- **Headline:** "Backend Developer | Specialized in Ruby on Rails".
- **CTA Button:** INITIALIZE CONTACT (Glow hiệu ứng đỏ Ruby).

**Bên phải (Visual Coding):**
- Cửa sổ terminal/editor mô phỏng gõ file `identity.rb`.
- **Nội dung:** Một Ruby Class định nghĩa thông tin cá nhân dưới dạng mã nguồn.

### SLIDE 02: THE JOURNEY (Hành trình tương tác)
- **Mô hình:** Timeline-driven Master–Detail Interface.
- **Thành phần chính:**
    - **Master Timeline:** Một đường line đỏ chạy dưới đáy màn hình với các Node cảm ứng.
    - **Detail Panel:** Thay đổi nội dung dựa trên Node được chọn.
- **Dữ liệu:**
    - **Node 2021-2025:** Hiển thị học vấn tại Đại học Duy Tân, GPA 3.4, các giải thưởng NCKH.
    - **Node 2026-Present:** Hiển thị kinh nghiệm tại Tomosia, vai trò Ruby on Rails Developer.

### SLIDE 03: THE BUILDER (Năng lực thực hiện)
- **Bố cục:** Grid hệ thống các "Project Cubes" (Khối lập phương dự án).
- **Nội dung Project Card:**
    - Tên sản phẩm (Neko Cinema, Shopee-like, Twitter API).
    - Terminal log mô tả quá trình khởi chạy dự án.
    - **Tech Stack:** Laravel, VueJS, React, Node.js, Docker.
- **Hiệu ứng:** Hover để làm sáng khối 3D với màu đỏ Ruby đặc trưng.

### SLIDE 04: THE HANDSHAKE (Kết nối)
- **Mục tiêu:** Chốt chặn cuối cùng cho hành động liên hệ.
- **Bố cục:** Trung tâm, trình bày theo phong cách Terminal Export.
- **Dữ liệu hiển thị:** 
    - Hệ thống Icon liên kết: GitHub, Facebook, Zalo.
    - Thông báo tương tác: "Click to copy email" hoặc "Open Mail Client".
- **Footer:** Nhắc lại định vị: "D.V.V. Trong - Build for Scalability".

---

## IV. ĐẶC TẢ KỸ THUẬT & TRẢI NGHIỆM (UX/UI)

| Thành phần | Đặc tả UI | Hiệu ứng (Motion) |
| :--- | :--- | :--- |
| **Cursor** | Vòng tròn đỏ Ruby nhỏ | Giãn nở (Warp) khi hover vào các biến hoặc link |
| **Transition** | Camera Warp (3D Space) | Di chuyển góc nhìn camera thay vì chuyển trang |
| **Scroll** | Damping Scroll | Cuộn mượt mà, lock scroll khi đang chạy animation chuyển scene |
| **Mobile** | Vertical Stack Layout | Thu gọn visual 3D, ưu tiên hiển thị nội dung Text |
