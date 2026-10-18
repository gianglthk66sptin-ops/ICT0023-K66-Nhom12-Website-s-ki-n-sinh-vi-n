
# Website Ngày hội Sinh viên Trường Đại học Tây Bắc

Bài tập lớn học phần **ICT0023** - Nhóm 12 - Chủ đề: **Website sự kiện sinh viên**.

- Repository: `ICT0023-K66-Nhom12-WebsiteSuKienSinhVien`
- Website (GitHub Pages): `https://github.com/gianglthk66sptin-ops/ICT0023-K66-Nhom12-Website-s-ki-n-sinh-vi-n` 

## 1. Mục tiêu và người dùng

Website giúp Ban tổ chức và sinh viên theo dõi Ngày hội: xem thể lệ và chương trình theo khung giờ, tra cứu đội thi, xem bảng kết quả, tự lập và kiểm tra một chương trình theo mốc thời gian, và gửi phản hồi.

Người dùng chính: sinh viên tham gia, Ban tổ chức, tình nguyện viên, khách tham quan. Website chạy hoàn toàn trên trình duyệt, không có backend và không lưu dữ liệu (không dùng localStorage, sessionStorage hay cookie); tải lại trang thì dữ liệu về như ban đầu.

## 2. Thành viên

| Họ và tên | Tài khoản GitHub | Vai trò | Nhiệm vụ chính |
|---|---|---|---|
| Lò Thị Hà Giang | gianglthk66sptin-ops | Nhóm trưởng, quản lý GitHub | Khung chung, giao diện, quản lý nhánh, Pull Request và tag |
| Phạm Hồng Trang | trangphk66sptin-ctrl | Thành viên | Trang chương trình, công cụ lập chương trình |
| Sùng A Đua | duasak66sptin-cmd | Thành viên | JavaScript: tra cứu đội thi, bảng kết quả |
| Nguyễn Đức Đạt | datjuan-ng | Thành viên | Kiểm thử, tài liệu, trang liên hệ và hỏi đáp |

Chi tiết đóng góp xem `CONTRIBUTIONS.md`.

## 3. Cấu trúc website

| Trang | Tệp | Nội dung |
|---|---|---|
| Trang chủ | `index.html` | Giới thiệu, thông tin nhanh, đếm ngược khai mạc, hoạt động nổi bật |
| Chương trình | `chuong-trinh.html` | Thể lệ, bảng chương trình theo khung giờ, hình ảnh hoạt động |
| Đội thi | `doi-thi.html` | 7 đội thi đại diện 7 khoa, bảng kết quả, thống kê |
| Công cụ | `cong-cu.html` | Tra cứu đội thi; lập và kiểm tra chương trình; bảng kết quả có sắp xếp và lọc |
| Hỏi đáp | `hoi-dap.html` | Hướng dẫn dùng công cụ, 8 câu hỏi thường gặp |
| Liên hệ | `lien-he.html` | Biểu mẫu phản hồi có kiểm tra dữ liệu, thông tin Ban tổ chức |

## 4. Chức năng tương tác

| Yêu cầu của đề | Thực hiện | Tệp |
|---|---|---|
| 1. Render dữ liệu từ mảng đối tượng | Card đội thi, bảng kết quả, bảng chương trình | `data.js`, `doi-thi.js`, `chuong-trinh.js` |
| 2. Tìm kiếm, lọc, sắp xếp | Tra cứu đội thi (không phân biệt dấu); lọc và sắp xếp bảng kết quả | `cong-cu-tra-cuu.js`, `cong-cu-ket-qua.js` |
| 3. Kiểm tra form, báo lỗi rõ ràng, kết quả tức thời | Form liên hệ (đếm ký tự, tóm tắt); công cụ lập chương trình (tổng quan, phát hiện trùng giờ) | `lien-he.js`, `cong-cu-chuong-trinh.js` |
| jQuery | Bảng kết quả, form liên hệ | `cong-cu-ket-qua.js`, `lien-he.js` |
| Chủ đề nhóm 12 | Đếm ngược khai mạc; lập và kiểm tra chương trình theo mốc thời gian | `chung.js`, `cong-cu-chuong-trinh.js` |
| Mở rộng tự chọn | In chương trình đã lập | `cong-cu-chuong-trinh.js`, `css/style.css` (`@media print`) |

Mỗi công cụ có nút **Dùng thử** và **Đặt lại** và xử lý từ 3 trường hợp biên trở lên. Vị trí sử dụng biến, kiểu dữ liệu, vòng lặp, DOM, sự kiện, jQuery xem `docs/vi-tri-su-dung-javascript.md`. Kết quả kiểm thử xem `docs/kiem-thu.md`.

## 5. Công nghệ

HTML5, CSS3 (`css/style.css`), Bootstrap 5.3.3 (grid, navbar, card, accordion, alert, form, table, badge), Bootstrap Icons 1.11.3, jQuery 3.6.1, JavaScript thuần. Font Be Vietnam Pro (Google Fonts). Chi tiết nguồn xem `SOURCES.md`.

## 6. Thiết kế

Bảng màu (khai báo bằng biến CSS ở đầu `style.css`): navy `#0B3A78`, xanh `#1565D8`, xanh nhạt `#EAF3FD`, xanh lá `#15803D`, cam `#F28C0F`, vàng nhạt `#FFF4D6`, chữ `#1B2B45`. Bố cục responsive bằng lưới Bootstrap; có liên kết "Bỏ qua điều hướng" và khung focus rõ ràng cho người dùng bàn phím.

## 7. Cấu trúc thư mục

```
index.html  chuong-trinh.html  doi-thi.html  cong-cu.html  hoi-dap.html  lien-he.html
css/style.css
js/            data.js, tien-ich.js, chung.js, doi-thi.js, chuong-trinh.js,
               cong-cu-tra-cuu.js, cong-cu-chuong-trinh.js, cong-cu-ket-qua.js, lien-he.js
images/        logo, logo 7 khoa, ảnh sự kiện, favicon
html/          v0.1-y-tuong.html, wireframe/, anh-chup/, kiem-thu.md, vi-tri-su-dung-javascript.md
README.md  SOURCES.md  CONTRIBUTIONS.md
```

## 8. Các mốc phiên bản

| Tag | Nội dung |
|---|---|
| `v0.1-y-tuong` | Trang ý tưởng (`html/v0.1-y-tuong.html`) |
| `v0.2-html` | 6 trang HTML ngữ nghĩa, nội dung và `id` để gắn JavaScript |
| `v0.3-giao-dien` | Bootstrap, `style.css`, giao diện responsive |
| `v0.4-tuong-tac` | JavaScript và jQuery, ba chức năng bắt buộc |
| `v1.0-final` | Hoàn thiện ảnh, `alt`, in chương trình, kiểm thử, hồ sơ |

## 9. Chạy trên máy

Mở trực tiếp `index.html` bằng trình duyệt (cần mạng để nạp Bootstrap, jQuery, font từ CDN), hoặc dùng Live Server của VS Code.

## 10. Liêm chính học thuật

Mọi tài liệu, mã, ảnh, dữ liệu và hỗ trợ của công cụ AI đã được khai báo trong `SOURCES.md`. Dữ liệu đội thi, điểm số và chương trình là **dữ liệu minh họa** phục vụ bài tập, không phải thông tin cá nhân thật.
