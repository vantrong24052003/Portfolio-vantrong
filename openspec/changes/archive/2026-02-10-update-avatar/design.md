## Context

Trang Connection hiện đang sử dụng một hình ảnh placeholder ngẫu nhiên từ Unsplash. Cần thay đổi nó thành ảnh chân dung thực tế của tác giả để tạo sự tin cậy.

## Goals / Non-Goals

**Goals:**
- Thay URL placeholder bằng `/avatar.jpg`.
- Điều chỉnh một chút về style để ảnh trông chuyên nghiệp hơn (có thể bỏ grayscale).

**Non-Goals:**
- Không thay đổi bố cục (layout) của component `IdentityGlitch`.

## Decisions

- **Tệp tin:** Sử dụng `/avatar.jpg`.
- **Hiệu ứng:** Giữ hiệu ứng glitch đặc trưng của trang Connection nhưng làm ảnh chân thực hơn.

## Risks / Trade-offs

- **Risk:** Ảnh thật có thể không hợp màu sắc với theme glitch rực rỡ. -> Sẽ điều chỉnh độ mờ hoặc độ tương phản nếu cần.
