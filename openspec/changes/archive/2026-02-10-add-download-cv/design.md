## Context

Hiện tại, `IdentityModule` trong trang Overview của Portfolio chỉ có một nút hành động chính và các icon mạng xã hội. Để chuyên nghiệp hóa Portfolio, việc bổ sung một nút download CV trực tiếp là cực kỳ quan trọng.

## Goals / Non-Goals

**Goals:**
- Thêm nút "Download CV" nổi bật và thẩm mỹ trong `IdentityModule`.
- Tích hợp đa ngôn ngữ (i18next) cho nhãn của nút.
- Sử dụng icon `FaDownload` để người dùng dễ nhận biết.
- Đảm bảo thiết kế phản hồi (responsive) tốt trên cả mobile và desktop.

**Non-Goals:**
- Không tạo trang xem trước CV (chỉ tập trung vào việc tải xuống trực tiếp).
- Không thực hiện các hệ thống theo dõi lượt tải xuống phức tạp trong giai đoạn này.

## Decisions

- **Vị trí:** Nằm bên trái nút hành động chính (hoặc bên dưới tùy theo kích thước màn hình) để tạo sự cân bằng. 
- **Style:** Sử dụng kiểu `outline` hoặc `glassmorphism` nhẹ để không chiếm spotlight của nút Primary chính, nhưng vẫn có hiệu ứng hover đồng bộ.
- **Icon:** Sử dụng `FaDownload` từ `react-icons/fa`.
- **Tệp tin:** Tệp CV được lưu tại `/cv-doanvovantrong.pdf`.
- **i18n Key:** `overview.downloadCV`.

## Risks / Trade-offs

- **Risk:** Tệp PDF có thể chưa sẵn sàng hoặc đường dẫn bị sai.
- **Trade-off:** Việc thêm một nút nữa vào layout mobile có thể làm cụm hành động trông chật chội; giải quyết bằng cách sử dụng `flex-wrap` hoặc chuyển sang `flex-col` trên màn hình cực nhỏ.
