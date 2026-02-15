## Why

Cập nhật danh sách dự án trong phần Showcase để phản ánh đúng các dự án thực tế mà tác giả đã thực hiện, giúp Portfolio trở nên chân thực và ấn tượng hơn với nhà tuyển dụng.

## What Changes

1. **Cập nhật dữ liệu i18n**: Thay thế 3 dự án cũ bằng 7 dự án mới (Facebook Clone, Movie Website, Shopee Clone, Twitter Clone, Dice Game Website, Website Game Nro, Coffee Shop Management) trong cả tiếng Anh và tiếng Việt.
2. **Mở rộng Project Interface**: Thêm thuộc tính `githubUrl` vào kiểu dữ liệu `Project`.
3. **Cập nhật UI ProjectCard**: Gắn liên kết GitHub thực tế vào nút "Code" trong thẻ dự án.
4. **Cập nhật Showcase Data**: Thêm ảnh minh họa phù hợp cho từng dự án mới.

## Capabilities

### Modified Capabilities
- `showcase`: Cập nhật toàn bộ danh sách dự án và tích hợp liên kết mã nguồn.

## Impact

- `src/shared/types/index.ts`: Thay đổi interface `Project`.
- `src/i18n/locales/en/showcase.yml` & `src/i18n/locales/vi/showcase.yml`: Cập nhật nội dung dự án.
- `src/features/showcase/data.ts`: Cập nhật danh sách key dự án và mảng ảnh tương ứng.
- `src/features/showcase/components/ProjectCard/ProjectCard.tsx`: Tích hợp link GitHub.
