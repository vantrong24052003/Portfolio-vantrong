## 1. Chuẩn bị (Preparation)

- [x] 1.1 Cập nhật tệp ngôn ngữ `src/i18n/locales/en/overview.yml` thêm key `overview.downloadCV`.
- [x] 1.2 Cập nhật tệp ngôn ngữ `src/i18n/locales/vi/overview.yml` thêm key `overview.downloadCV`.

## 2. Phát triển (Implementation)

- [x] 2.1 Import icon `FaDownload` từ `react-icons/fa` vào `IdentityModule.tsx`.
- [x] 2.2 Chỉnh sửa cấu trúc JSX trong `IdentityModule.tsx` để thêm nút "Download CV" cạnh nút hành động hiện tại.
- [x] 2.3 Áp dụng CSS/Tailwind để nút có hiệu ứng glassmorphism nhẹ và đồng bộ với theme.
- [x] 2.4 Gắn link download trỏ đến `/cv-doanvovantrong.pdf`.

## 3. Tài nguyên (Assets)

- [x] 3.1 Xác nhận tệp thực tế đã tồn tại tại `/cv-doanvovantrong.pdf`.

## 4. Kiểm tra (Verification)

- [x] 4.1 Kiểm tra hiển thị của nút trên các kích thước màn hình khác nhau (Responsive).
- [x] 4.2 Kiểm tra chức năng chuyển đổi ngôn ngữ cho nút mới.
- [x] 4.3 Kiểm tra hành động tải xuống khi click vào nút.
