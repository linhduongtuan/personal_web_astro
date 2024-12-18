# Blog cá nhân này được hỗ trợ bởi 🍥Fuwari's [**code**](https://github.com/saicaca/fuwari)

Một mẫu blog tĩnh được xây dựng với [Astro](https://astro.build).

[**🖥️ Demo Trực Tiếp (Vercel)**](https://personal-web-astro-zx8v.vercel.app/)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;

[**🌏 English**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;

[**🌏 中文**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.zh-CN.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;

[**🌏 日本語**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.ja-JP.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;

[**🌏 한국어**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.ko.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;

[**🌏 Español**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.es.md)


> Phiên bản README: `2024-12-15`

![Hình ảnh xem trước](https://github.com/linhduongtuan/personal_web_astro/blob/main/src/assets/images/demo_page.png)

## ✨ Tính năng

- [x] Được xây dựng với [Astro](https://astro.build) và [Tailwind CSS](https://tailwindcss.com)
- [x] Hoạt ảnh mượt mà và chuyển trang
- [x] Chế độ sáng / tối
- [x] Màu sắc & banner chủ đề có thể tùy chỉnh
- [x] Thiết kế đáp ứng
- [x] Tìm kiếm
- [ ] Mục lục
- [ ] Bảng điều khiển
- [ ] Bình luận

## 🚀 Cách sử dụng

1. [Tạo một kho lưu trữ mới](https://github.com/saicaca/fuwari/generate) từ mẫu này hoặc fork kho lưu trữ này.
2. Để chỉnh sửa blog của bạn cục bộ, clone kho lưu trữ của bạn, chạy `pnpm install` VÀ `pnpm add sharp` để cài đặt các phụ thuộc.
   - Cài đặt [pnpm](https://pnpm.io) `npm install -g pnpm` nếu bạn chưa có.
3. Chỉnh sửa tệp cấu hình `src/config.ts` để tùy chỉnh blog của bạn.
4. Chạy `pnpm new-post <tên_tệp>` để tạo một bài viết mới và chỉnh sửa nó trong `src/content/posts/`.
5. Triển khai blog của bạn lên Vercel, Netlify, GitHub Pages, v.v. theo [các hướng dẫn](https://docs.astro.build/en/guides/deploy/). Bạn cần chỉnh sửa cấu hình trang web trong `astro.config.mjs` trước khi triển khai.

## ⚙️ Thông tin đầu bài viết

```yaml
---
title: Bài viết blog đầu tiên của tôi
published: 2023-09-09
description: Đây là bài viết đầu tiên của blog Astro mới của tôi.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: vi      # Chỉ đặt nếu ngôn ngữ của bài viết khác với ngôn ngữ của trang web trong `config.ts`
---
```

## 🧞 Lệnh

Tất cả các lệnh được chạy từ thư mục gốc của dự án, từ một terminal:

| Lệnh                               | Hành động                                               |
|:---------------------------------- |:--------------------------------------------------------|
| `pnpm install` VÀ `pnpm add sharp` | Cài đặt các phụ thuộc                                   |
| `pnpm dev`                         | Bắt đầu máy chủ phát triển cục bộ tại `localhost:4321`  |
| `pnpm build`                       | Xây dựng trang web sản xuất của bạn vào `./dist/`       |
| `pnpm preview`                     | Xem trước bản dựng của bạn cục bộ, trước khi triển khai |
| `pnpm new-post <tên_tệp>`          | Tạo một bài viết mới                                    |
| `pnpm astro ...`                   | Chạy các lệnh CLI như `astro add`, `astro check`        |
| `pnpm astro --help`                | Nhận trợ giúp khi sử dụng Astro CLI                     |


## Cách triển khai mã của bạn trên Vercel:

- **Bước 1. Tạo tài khoản Vercel:** Truy cập trang web Vercel (https://vercel.com/) và đăng ký tài khoản miễn phí.

- **Bước 2. Clone kho lưu trữ (Tùy chọn):** Nếu bạn muốn tùy chỉnh mã trước khi triển khai, clone kho lưu trữ này về máy tính của bạn bằng Git. Bạn có thể tìm thấy hướng dẫn về cách clone kho lưu trữ trực tuyến hoặc trong tài liệu Git.

- **Bước 3. Triển khai dự án của bạn:**

  - **Bước 3.1.** Vercel cung cấp hai cách để triển khai mã của bạn:

    - Triển khai trực tiếp (Được khuyến nghị): Mở một terminal trong thư mục dự án của bạn (nếu bạn đã clone kho lưu trữ). Chạy lệnh `vercel --prof` để bắt đầu triển khai. Điều này sẽ hướng dẫn bạn liên kết tài khoản Vercel của bạn và tự động triển khai dự án của bạn.

    - Triển khai qua giao diện Vercel:

  - **Bước 3.2.** Nếu bạn thích giao diện web, điều hướng đến bảng điều khiển Vercel của bạn sau khi liên kết tài khoản: Nhấp vào "Nhập Dự Án" và chọn phương pháp ưa thích của bạn (ví dụ: GitHub, GitLab, v.v.) để kết nối kho lưu trữ chứa mã của bạn. Làm theo hướng dẫn trên màn hình để hoàn tất quá trình triển khai.

- **Bước 4. Truy cập dự án đã triển khai của bạn:** Khi việc triển khai thành công, Vercel sẽ cung cấp cho bạn một URL duy nhất nơi bạn có thể truy cập trang web trực tiếp của mình.

**Chúc bạn vui vẻ!**
