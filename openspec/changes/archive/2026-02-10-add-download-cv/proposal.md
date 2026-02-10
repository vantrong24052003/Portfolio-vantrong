## Why

Người dùng cần một cách nhanh chóng và rõ ràng để tải xuống CV của tác giả trực tiếp từ trang Portfolio để hỗ trợ quá trình tuyển dụng và kết nối. Hiện tại, trang web có các liên kết mạng xã hội nhưng thiếu nút hành động trực tiếp cho việc này.

## What Changes

Thêm một nút "Tải xuống CV" (Download CV) vào thành phần `IdentityModule`. Nút này sẽ được đặt cạnh nút hành động chính hiện tại để đảm bảo tính dễ thấy và tiện dụng.

## Capabilities

### New Capabilities
- `download-cv`: Cung cấp khả năng tải xuống tệp CV (định dạng PDF) từ thư mục public của dự án.

### Modified Capabilities
- `overview`: Thay đổi giao diện module giới thiệu để tích hợp thêm nút mới mà không làm phá vỡ bố cục hiện tại.

## Impact

- `src/features/overview/components/IdentityModule/IdentityModule.tsx`: Cập nhật mã nguồn để thêm nút.
- `src/i18n/locales/`: Thêm nhãn dịch mới cho nút "Download CV" trong cả tiếng Anh và tiếng Việt.
- `public/`: Sử dụng tệp CV thực tế tại `/cv-doanvovantrong.pdf`.
