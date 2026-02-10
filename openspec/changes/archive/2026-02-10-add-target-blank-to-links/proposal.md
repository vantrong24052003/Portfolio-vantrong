## Why

Để cải thiện trải nghiệm người dùng, các liên kết đến trang web bên ngoài hoặc tệp tin nên được mở trong tab mới (`target="_blank"`) giúp người dùng không bị rời khỏi trang Portfolio hiện tại.

## What Changes

Thêm thuộc tính `target="_blank"` và `rel="noopener noreferrer"` vào tất cả các thẻ `<a>` hướng tới liên kết bên ngoài (GitHub, Facebook, Instagram, LinkedIn, v.v.) và nút Download CV.

## Capabilities

### New Capabilities
- `external-links-target-blank`: Đảm bảo tất cả liên kết ngoài mở trong tab mới.

### Modified Capabilities
- `overview`: Cập nhật các liên kết mạng xã hội và nút CV trong IdentityModule.
- `connection`: Cập nhật các liên kết liên hệ trong ContactLinks.

## Impact

- `src/features/overview/components/IdentityModule/IdentityModule.tsx`
- `src/features/connection/components/ContactLinks/ContactLinks.tsx`
