# Core Coding Principles & Defensive Programming

## 1. Core Principles
- **KISS (Keep It Simple, Stupid)**: Code đơn giản, dễ đọc. Tránh over-engineering.
- **YAGNI (You Ain't Gonna Need It)**: Chỉ implement những gì được yêu cầu. Không thêm "just in case".
- **DRY (Don't Repeat Yourself)**: Extract logic tái sử dụng thành hooks/components.
- **SOLID (S & O)**: Mỗi component một responsibility. Open for extension (props), closed for modification.

## 2. Defensive Programming
- **Safe Access**: Luôn dùng `?.` và `??` cho nested properties.
- **Empty States**: Mọi list component phải handle empty state.
- **Loading/Error States**: Skeleton cho loading, Alert cho error.
- **Error Boundaries**: Wrap major features (Auth, Dashboard).
- **Validation**: Zod validation TRƯỚC khi xử lý form input.
