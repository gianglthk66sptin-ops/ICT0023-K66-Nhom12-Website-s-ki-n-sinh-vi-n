
# Kiểm thử

Bản v1.0 đã được chạy **74 phép kiểm thử tự động** bằng Chromium (Playwright) và đạt cả 74. 

## 1. Chức năng

| # | Trang / công cụ | Thao tác | Kết quả mong đợi | Tự động | Tay |
|---|---|---|---|---|---|
| 1 | Trang chủ | Mở trang | Đếm ngược hiển thị "Còn ... ngày ... giờ ..." và đổi mỗi giây | Đạt | x |
| 2 | Trang chủ | Đổi `data-thoi-diem` sang quá khứ hoặc giá trị sai (thử trong DevTools) | Quá khứ: "Lễ khai mạc đã diễn ra."; sai hoặc rỗng: "Chưa có thời điểm khai mạc hợp lệ." | Đạt | x |
| 3 | Chương trình | Mở trang | Bảng 8 dòng, cột Thời lượng đúng (dòng 3: 1 giờ 30 phút) | Đạt | x |
| 4 | Đội thi | Mở trang | 7 card, 7 dòng kết quả, thống kê 7 / 95 / 86,4 | Đạt | x |
| 5 | Tra cứu | Để trống | Hiện đủ 7 đội | Đạt | x |
| 6 | Tra cứu | Gõ `ma nguon` | Ra "Đội Mã Nguồn" (không cần dấu) | Đạt | x |
| 7 | Tra cứu | Gõ `xyz` | Thông báo không tìm thấy | Đạt | x |
| 8 | Tra cứu | Chỉ nhập khoảng trắng | Hiện đủ 7 đội, kèm nhắc nhẹ | Đạt | x |
| 9 | Tra cứu | Từ khóa dài hơn 50 ký tự | Cảnh báo từ khóa quá dài | Đạt | x |
| 10 | Tra cứu | Môn "Hội thao" + khoa "Kinh tế" | Chỉ còn "Đội Cánh Buồm" | Đạt | x |
| 11 | Tra cứu | Nhấn Enter trong ô tìm | Trang không tải lại | Đạt | x |
| 12 | Tra cứu | Dùng thử, Đặt lại | Dùng thử ra 1 đội; Đặt lại về 7 đội, ô nhập trống | Đạt | x |
| 13 | Lập chương trình | Bấm Thêm khi để trống | 3 lỗi: tên, giờ bắt đầu, giờ kết thúc | Đạt | x |
| 14 | Lập chương trình | Giờ kết thúc trước giờ bắt đầu | Lỗi "Giờ kết thúc phải sau giờ bắt đầu" | Đạt | x |
| 15 | Lập chương trình | Thêm A 09:00-10:30 | 1 dòng, 1 giờ 30 phút (90 phút), trạng thái Hợp lệ | Đạt | x |
| 16 | Lập chương trình | Thêm lại đúng hoạt động A | Lỗi đã có trong chương trình | Đạt | x |
| 17 | Lập chương trình | Thêm B 10:00-11:00 | Hai dòng báo trùng giờ; "Số cặp trùng giờ: 1" | Đạt | x |
| 18 | Lập chương trình | Thêm hoạt động 06:00-07:00 | Cảnh báo ngoài khung giờ; dòng mới tự lên đầu | Đạt | x |
| 19 | Lập chương trình | Bấm Xóa ở một dòng | Dòng đó bị xóa, bảng cập nhật | Đạt | x |
| 20 | Lập chương trình | Thêm quá 12 hoạt động | Lỗi "đã đủ 12 hoạt động" | Đạt | x |
| 21 | Lập chương trình | Dùng thử | 4 dòng; 4 giờ 30 phút (270 phút); khoảng trống 2 giờ 45 phút (165 phút); 1 cặp trùng | Đạt | x |
| 22 | Lập chương trình | Nhập tên chứa mã HTML | Hiện thành chữ, không bị thực thi | Đạt | x |
| 23 | Lập chương trình | In chương trình khi rỗng | Cảnh báo, không mở hộp thoại in | Đạt | x |
| 24 | Lập chương trình | In chương trình khi có dữ liệu | Mở hộp thoại in; bản in chỉ có bảng và tổng quan | Đạt (gọi `window.print`, CSS in) | x |
| 25 | Bảng kết quả | Lọc "Văn nghệ" | 2 dòng | Đạt | x |
| 26 | Bảng kết quả | Điểm tối thiểu 99 | Thông báo không có đội phù hợp | Đạt | x |
| 27 | Bảng kết quả | Điểm tối thiểu `abc`, `-5`, `101` | Báo lỗi "từ 0 đến 100", ô đỏ | Đạt | x |
| 28 | Bảng kết quả | Dùng thử, Đặt lại | Dùng thử: 2 dòng, điểm giảm dần; Đặt lại: 7 dòng | Đạt | x |
| 29 | Liên hệ | Gửi khi để trống | 5 ô lỗi, con trỏ về ô Họ tên | Đạt | x |
| 30 | Liên hệ | Tên toàn khoảng trắng, email `abc@`, nội dung ngắn | Cả ba ô báo lỗi | Đạt | x |
| 31 | Liên hệ | Gõ nội dung | Bộ đếm ký tự cập nhật ngay | Đạt | x |
| 32 | Liên hệ | Dùng thử rồi Gửi | Thông báo thành công và tóm tắt | Đạt | x |
| 33 | Liên hệ | Nhập `<b>` và `<img onerror>` vào nội dung | Chỉ hiện thành chữ trong tóm tắt | Đạt | x |
| 34 | Liên hệ | Đặt lại | Xóa ô nhập, lỗi, tóm tắt, bộ đếm về 0 | Đạt | x |

## 2. Yêu cầu chung

| Mục | Cách kiểm tra | Tự động | Tay |
|---|---|---|---|
| Không lỗi JavaScript trong Console | Mở từng trang và DevTools | Đạt | x |
| Mọi ảnh tải được và có `alt` | Mở 6 trang | Đạt | x |
| Không dùng localStorage, sessionStorage, cookie | Tab Application của DevTools | Đạt | x |
| Liên kết "Bỏ qua điều hướng" là phần tử Tab đầu tiên, Enter chuyển tới nội dung | Bàn phím | Đạt | x |
| Mọi `id` không trùng, liên kết giữa các trang đúng | Kiểm tra mã | Đạt | x |
| Không thanh cuộn ngang ở 360, 768, 1200 px | DevTools, chế độ thiết bị | Chưa kiểm tra tự động |  |
| Menu thu gọn (☰) hoạt động trên điện thoại | Điện thoại thật | Chưa kiểm tra tự động |  |
| Accordion mở và đóng được | Trình duyệt thật (cần Bootstrap) | Chưa kiểm tra tự động |  |
| Dùng được trên Chrome, Edge hoặc Firefox | Mở bằng từng trình duyệt | Chromium đạt | x |
| GitHub Pages mở được ở cửa sổ ẩn danh, đủ 6 trang, không 404 | Sau khi bật Pages | Chưa kiểm tra |  |
| Độ tương phản chữ từ 4,5:1 | Đã đo các cặp màu chính (4,8:1 đến 14:1) | Đạt | x |

## 3. Ghi chú kiểm thử

Kiểm thử tự động chạy trong môi trường không tải được Bootstrap, Bootstrap Icons và Google Fonts từ mạng, và dùng jQuery **3.6.1 cục bộ** thay cho bản 3.7.1 của CDN. Vì vậy **chưa xác nhận được giao diện nhìn thấy** (bố cục, màu, cuộn ngang) và chưa thử bản jQuery 3.7.1. Nhóm cần xem bằng mắt và chụp ảnh vào `docs/anh-chup/`.
