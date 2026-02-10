## Why

Cập nhật thông tin lộ trình phát triển (Journey) và bộ kỹ năng (Tech Stack) của tác giả để phản ánh chính xác kinh nghiệm thực tế, đồng thời bổ sung kỹ năng Laravel mới.

## What Changes

1. **Cập nhật mốc 2021-2025**: Tập trung vào việc học tại Đại học Duy Tân và giai đoạn khởi đầu, loại bỏ các thông tin về nghiên cứu hay giải thưởng không cần thiết.
2. **Cập nhật mốc 2023**: Thay thế thông tin thực tập/freelance bằng kinh nghiệm làm trợ giảng (Support) tại một trung tâm trong 6 tháng về Laravel.
3. **Cập nhật Tech Stack**: Thêm Laravel vào danh sách các badge kỹ năng hiển thị tại trang chính.

## Capabilities

### Modified Capabilities
- `journey`: Cập nhật nội dung các mốc thời gian 2021-2025 và 2023 trong tệp đa ngôn ngữ.
- `overview`: Bổ sung badge Laravel vào `IdentityModule`.

## Impact

- `src/i18n/locales/en/journey.yml` & `src/i18n/locales/vi/journey.yml`: Thay đổi nội dung mô tả.
- `src/i18n/locales/en/overview.yml` & `src/i18n/locales/vi/overview.yml`: Thêm key `laravel` vào `techBadges`.
- `src/features/overview/components/IdentityModule/IdentityModule.tsx`: Thêm icon và badge cho Laravel.
