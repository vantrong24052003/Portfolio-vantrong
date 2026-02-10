## Why

Cần cập nhật hình ảnh đại diện (avatar) của tác giả để cá nhân hóa Portfolio và tăng tính nhận diện thương hiệu cá nhân tại trang Liên hệ (Connection).

## What Changes

Thay thế hình ảnh placeholder trong `IdentityGlitch` (tại trang Connection) bằng tệp tin `/avatar.jpg` thực tế của tác giả.

## Capabilities

### New Capabilities
- `profile-avatar-connection`: Cập nhật hình ảnh đại diện chính thức tại trang Connection.

### Modified Capabilities
- `connection`: Thay thế URL hình ảnh từ Unsplash bằng tệp tin cục bộ `/avatar.jpg`.

## Impact

- `src/features/connection/components/IdentityGlitch/IdentityGlitch.tsx`: Cập nhật hằng số `AVATAR_URL` và loại bỏ filter grayscale nếu cần để ảnh hiển thị rõ nét hơn.
- `public/avatar.jpg`: Sử dụng tệp hình ảnh mới.
