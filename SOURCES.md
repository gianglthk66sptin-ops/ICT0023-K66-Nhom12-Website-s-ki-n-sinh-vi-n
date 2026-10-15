# Nguồn tham khảo và khai báo

> Tệp này được điền theo **lịch sử trao đổi thực tế của nhóm với công cụ AI** (Claude) và theo các tệp mà nhóm đã cung cấp. Ngày ghi theo giờ hệ thống lúc tạo tệp, quy đổi sang giờ Việt Nam (UTC+7); nhóm nên đối chiếu với thời gian hiển thị trong lịch sử trò chuyện trên claude.ai.

## 1. Tài liệu

| Tài liệu | URL | Do ai cung cấp / ngày | Dùng cho |
|---|---|---|---|
| Đề bài và yêu cầu bài tập lớn học phần ICT0023 (nhiệm vụ chung, yêu cầu kỹ thuật, liêm chính, chủ đề 15 nhóm, sản phẩm nộp) | Hệ thống LMS của nhà trường (lms.utb.edu.vn) | Nhóm dán nội dung vào cuộc trò chuyện ngày 08/10/2026 và 11/10/2026 | Căn cứ để làm mọi phiên bản; đối chiếu yêu cầu của nhóm 12 |
| Tài liệu Bootstrap theo liên kết trong đề bài | https://lms.utb.edu.vn/mod/url/view.php?id=20962 | Liên kết có trong đề bài | Lưới responsive, navbar, card, accordion, alert, form |
| Tài liệu jQuery theo liên kết trong đề bài | https://lms.utb.edu.vn/mod/url/view.php?id=20963 | Liên kết có trong đề bài | `cong-cu-ket-qua.js`, `lien-he.js` |
| Bootstrap 5.3 Documentation | https://getbootstrap.com/docs/5.3/ | AI dùng kiến thức sẵn có để viết mã, **không truy cập web**; ngày nhóm tự đọc: [điền] | Tên lớp CSS và thuộc tính `data-bs-*` |
| MDN Web Docs | https://developer.mozilla.org/ | Như trên; ngày nhóm tự đọc: 7/10/2026 | API JavaScript và DOM (`normalize`, `closest`, `replaceChildren`, `window.print`) |


## 2. Mã tham khảo

### 2.1. Thư viện bên thứ ba

Nạp qua CDN, **không chỉnh sửa mã nguồn thư viện**; kiểu riêng nằm trong `css/style.css`. Phiên bản và URL CDN do AI đề xuất; AI không truy cập mạng nên **chưa tự mở thử các URL này**, nhóm cần xác nhận khi chạy trên GitHub Pages.

| Thư viện | Phiên bản | URL | Giấy phép | Ngày đưa vào dự án | Phần đã dùng | Cách kiểm thử |
|---|---|---|---|---|---|---|
| Bootstrap | 5.3.3 | https://getbootstrap.com/ | MIT | 10/10/2026 (v0.3) | CSS và JS: navbar thu gọn, card, accordion, alert, form, table, badge | Nhóm mở các trang, bấm menu và accordion, xem Console |
| Bootstrap Icons | 1.11.3 | https://icons.getbootstrap.com/ | MIT | 10/10/2026 (v0.3) | Biểu tượng ở hero, thẻ, footer | Biểu tượng hiển thị đúng |
| jQuery | 3.7.1 | https://jquery.com/ | MIT | 11/10/2026 (v0.4) | `cong-cu-ket-qua.js`, `lien-he.js` | AI kiểm thử logic bằng jQuery **3.6.1 cục bộ** (không tải được CDN); nhóm cần thử lại bản 3.7.1 trên trình duyệt có mạng |
| Be Vietnam Pro (Google Fonts) | - | https://fonts.google.com/specimen/Be+Vietnam+Pro | SIL OFL 1.1 | 10/10/2026 (v0.3) | Font toàn site | Chữ tiếng Việt có dấu hiển thị đúng |

### 2.2. Mã và ảnh mẫu do nhóm cung cấp

| Mục | Tác giả | Ngày | Phần đã dùng | Cách chỉnh sửa | Cách kiểm thử |
|---|---|---|---|---|---|
| Đoạn CSS mẫu do nhóm dán vào cuộc trò chuyện (có `.logo`, `.modal-*`, `#backToTop`...) | đoạn mã v0.1-y-tuong.html do nhóm tham khảo chatgpt tạo ra và chỉnh sửa lại | 11/10/2026 | **Chỉ cách trình bày** (mỗi thuộc tính một dòng, sắp xếp tuần tự). Không lấy quy tắc hay màu của đoạn mẫu | AI định dạng lại `style.css` của dự án theo kiểu đó | So sánh nội dung CSS trước và sau khi bỏ khoảng trắng và chú thích: trùng nhau hoàn toàn |
| `index.html` mẫu do nhóm dán | Nhóm (bản v0.2 của nhóm) | 11/10/2026 | Cách trình bày HTML tuần tự (thụt lề 4 dấu cách, dòng trống giữa các khối) và kích thước ảnh `width="300" height="200"` | AI định dạng lại 6 trang theo kiểu đó | AI so sánh cấu trúc DOM trước và sau, trùng nhau hoàn toàn |
| Ảnh mẫu giao diện `Giao_diện_website_Sự_kiện_Sinh_viên (1).png` | ảnh mẫu do chatgpt tạo ra là khung mẫu cho nhóm làm bài và chinht sửa | 08/10/2026 | Tham khảo **bố cục và tông màu**; **không đưa ảnh vào website** | AI ước lượng màu bằng mắt, không dùng nội dung trong ảnh (số điện thoại, "K66", tên khoa không có thật của nhóm) | Nhóm so sánh giao diện với ảnh mẫu |

Mã sao chép từ repository hoặc website khác: [điền "Không sử dụng" nếu đúng, hoặc liệt kê URL, tác giả, phần dùng].

## 3. Ảnh và dữ liệu

### 3.1. Ảnh

Nguồn gốc và quyền sử dụng ảnh chỉ nhóm biết. Cột "Nội dung ảnh" do AI mô tả sau khi xem ảnh để nhóm có cơ sở ghi nguồn.

| Tệp | Dùng ở | Nội dung ảnh | Nhóm cung cấp lúc nào | Nguồn gốc ban đầu và quyền sử dụng | Chỉnh sửa đã thực hiện |
|---|---|---|---|---|---|
| `logo.png` | Navbar, footer, favicon | Logo Trường Đại học Tây Bắc (hình tròn xanh lá, đỏ, xanh dương) | 08/10/2026, qua cuộc trò chuyện | https://haitrieu.com/blogs/vector-logo-truong-dai-hoc-tay-bac-utb/?srsltid=AU7gw4UmFoucAWhJwJvskYuzCYiIeQQhir6WcLLr38nbVWidHtXYM6JZ | Cắt viền, đưa về 600×600, khử nhiễu, làm nét (08/10/2026). `favicon.png` là bản 64×64 (14/10/2026) |
| `doi-co-so.png`, `doi-khoa-hoc-xa-hoi.png`, `doi-khtn-cong-nghe.png`, `doi-kinh-te.png`, `doi-tieu-hoc-mam-non.png` | Card đội thi | Logo các khoa tương ứng, có chữ "Trường Đại học Tây Bắc" nên nhiều khả năng là logo chính thức của nhà trường hoặc khoa | 08/10/2026, qua cuộc trò chuyện | https://www.google.com/search?q=logo+c%C3%A1c+khoa+tr%C6%B0%E1%BB%9Dng+%C4%91%E1%BA%A1i+h%E1%BB%8Dc+t%C3%A2y+b%E1%BA%AFc&sca_esv=0b6b5098e114a672&udm=2&biw=1235&bih=559&sxsrf=APpeQntCbhSnezVhoTTeN2QpAGHlttk4Nw%3A1792049740403&ei=TILQapKFGOfwrfcPoL2qgAs&ved=2ahUKEwiS28jBwbuXAxVneOsIHaCeCrAQ4dUDegQIBhAN&uact=5&oq=logo+c%C3%A1c+khoa+tr%C6%B0%E1%BB%9Dng+%C4%91%E1%BA%A1i+h%E1%BB%8Dc+t%C3%A2y+b%E1%BA%AFc&gs_lp=Egtnd3Mtd2l6LWltZyIwbG9nbyBjw6FjIGtob2EgdHLGsOG7nW5nIMSR4bqhaSBo4buNYyB0w6J5IGLhuq9jSKICUABYAHABeACQAQCYAQCgAQCqAQC4AQPIAQCYAgCgAgCYAwCIBgGSBwCgBwCyBwC4BwDCBwDIBwCACAE&sclient=gws-wiz-img | Cắt viền thừa (Khoa Kinh tế bỏ thêm đường viền xanh trên và dưới), đưa về 600×600 nền trắng, khử nhiễu, làm nét. Logo KHTN - Công nghệ bị dẹt (282×251) nên được kéo lại hình tròn. Thực hiện 08/10/2026 bằng đoạn mã Python (Pillow, OpenCV) do AI viết |
| `doi-nong-lam.png`, `doi-khoa-hoc-suc-khoe.png` | Card đội thi | Logo Khoa Nông - Lâm và Khoa Khoa học sức khỏe | Có trong tệp RAR nhóm gửi ngày 12/10/2026 | https://www.google.com/search?q=logo+c%C3%A1c+khoa+tr%C6%B0%E1%BB%9Dng+%C4%91%E1%BA%A1i+h%E1%BB%8Dc+t%C3%A2y+b%E1%BA%AFc&sca_esv=0b6b5098e114a672&udm=2&biw=1235&bih=559&sxsrf=APpeQntCbhSnezVhoTTeN2QpAGHlttk4Nw%3A1792049740403&ei=TILQapKFGOfwrfcPoL2qgAs&ved=2ahUKEwiS28jBwbuXAxVneOsIHaCeCrAQ4dUDegQIBhAN&uact=5&oq=logo+c%C3%A1c+khoa+tr%C6%B0%E1%BB%9Dng+%C4%91%E1%BA%A1i+h%E1%BB%8Dc+t%C3%A2y+b%E1%BA%AFc&gs_lp=Egtnd3Mtd2l6LWltZyIwbG9nbyBjw6FjIGtob2EgdHLGsOG7nW5nIMSR4bqhaSBo4buNYyB0w6J5IGLhuq9jSKICUABYAHABeACQAQCYAQCgAQCqAQC4AQPIAQCYAgCgAgCYAwCIBgGSBwCgBwCyBwC4BwDCBwDIBwCACAE&sclient=gws-wiz-img | Gốc 500×500 và 1913×1913; cắt viền, đưa về 600×600, khử nhiễu, làm nét (14/10/2026) |
| `banner-ngay-hoi.jpg` | Nền hero | Sinh viên tập trung trước tòa nhà trường | Có trong RAR ngày 12/10/2026 | https://www.facebook.com/photo/?fbid=1612641687324172&set=pcb.1612641807324160 | Thu nhỏ từ 2048×1152 còn 1600×900, nén JPEG chất lượng 80 |
| `van-nghe.jpg` | Hoạt động nổi bật (trang chủ) | Tiết mục văn nghệ trên sân khấu có quốc kỳ | Như trên | https://laodong.vn/giao-duc/truong-dai-hoc-tay-bac-tron-65-tuoi-1606245.ldo | Nén lại JPEG chất lượng 80 (giữ 1000×666) |
| `the-thao.jpg` | Hoạt động nổi bật (trang chủ) | Sinh viên thi đấu bóng chuyền | Như trên | https://baosonla.vn/the-thao/trao-23-bo-huy-chuong-tai-giai-the-thao-sinh-vien-truong-dai-hoc-tay-bac-AszUo6MHg.html | Thu nhỏ từ 3809×2525 còn 1600×1061, nén JPEG; sửa `alt` cho đúng nội dung |
| `hoc-thuat.jpg` | Hoạt động nổi bật (trang chủ) | Sân khấu cuộc thi "Học sinh, sinh viên với ý tưởng khởi nghiệp"  | Như trên | https://www.facebook.com/utb.edu.vn/posts/cu%E1%BB%99c-thi-h%E1%BB%8Dc-sinh-sinh-vi%C3%AAn-v%E1%BB%9Bi-%C3%BD-t%C6%B0%E1%BB%9Fng-kh%E1%BB%9Fi-nghi%E1%BB%87p-n%C4%83m-h%E1%BB%8Dc-2025-2026%EF%B8%8Fng%C3%A0y-11420/1549822750482409/ | Giữ nguyên ảnh; sửa `alt`. Nên cân nhắc thay hoặc cắt bớt vì có tên người thật |
| `chuong-trinh.jpg` | Trang chương trình | Các đội thi kéo co | Như trên | https://www.facebook.com/psk.utb/photos/%C4%91%E1%BB%99i-thi-k%C3%A9o-co-c%E1%BB%A7a-khoa-ti%E1%BB%83u-h%E1%BB%8Dc-m%E1%BA%A7m-non-%C4%91%E1%BA%A1t-gi%E1%BA%A3i-ba/1543084227623518/ | Giữ nguyên |
| `nhay-bao-bo.jpg` | Trang chương trình | Sinh viên thi nhảy bao bố | Như trên | https://phunghia.hanoi.gov.vn/tin-anh/mot-so-hinh-anh-thi-dau-mon-keo-co-nhay-bao-bo-tai-dai-hoi-the-duc-the-thao-xa-phu-nghia-lan-thu-i-nam-2025-2713251026151952056.htm | Thu nhỏ từ 2560×1707 còn 1600×1067, nén JPEG |
| `doi-thi.jpg` | Trang đội thi | Các đội cầm cờ lưu niệm, băng rôn giải thể thao sinh viên | Như trên | https://diendantuyensinh24h.com/truong-dai-hoc-tay-bac-tuyen-sinh/ | Giữ nguyên |
| `banner.jpg` | Trang liên hệ | Tòa nhà Trường Đại học Tây Bắc lúc hoàng hôn | Như trên | https://www.facebook.com/utb.edu.vn/posts/-k67-%C6%A1i-ng%C3%A0y-mai-nh%E1%BA%ADp-h%E1%BB%8Dc-nh%E1%BB%9B-check-in-nha-k67-%C6%A1i-ng%C3%A0y-mai-ch%C3%ADnh-th%E1%BB%A9c-tr%E1%BB%9F-th%C3%A0nh-/1671594874971862/| Giữ nguyên |

Các ảnh sự kiện có người thật. Nhóm xác nhận đã [điền: xin phép / dùng ảnh công khai của nhà trường / tự chụp / làm mờ khuôn mặt].

### 3.2. Dữ liệu

| Dữ liệu | Ai cung cấp | Ghi chú |
|---|---|---|
| Danh sách 7 khoa: Tiểu học - Mầm non; Kinh tế; Khoa học tự nhiên - Công nghệ; Khoa học xã hội; Cơ sở; Nông - Lâm; Khoa học sức khỏe | **Nhóm** cung cấp ngày 08/10/2026 (lúc đó có ghi "Kinh tế" hai lần, AI hiểu là một khoa) | Dùng cho `data.js` và các trang |
| Email liên hệ `nhom12@gmail.com` và địa chỉ "Trường Đại học Tây Bắc, tỉnh Sơn La" | **Nhóm** yêu cầu (11-12/10/2026); địa chỉ cụ thể nhóm chưa cung cấp nên AI chỉ ghi cấp tỉnh | Footer và trang liên hệ |
| Phân công 4 thành viên (Giang, Trang, Đua, Đạt) | **Nhóm** (có trong `v0.1-y-tuong.html`) | `README.md`, `CONTRIBUTIONS.md` |
| Tên 7 đội, điểm số, thứ hạng, giải, số thành viên | **AI soạn làm dữ liệu minh họa** (08/10/2026) | Không phải kết quả thật |
| Ngày 20/11/2026, địa điểm, khung giờ chương trình, thể lệ, hoạt động, câu hỏi thường gặp | **AI soạn làm dữ liệu minh họa** (08/10/2026) | Nhóm [điền: xác nhận hoặc thay bằng kế hoạch thật] |

Không có thông tin cá nhân thật của sinh viên được công bố trên website.

## 4. Công cụ AI

- **Công cụ:** Claude (Anthropic), giao diện claude.ai.
- **Thời gian sử dụng:** từ 08/10/2026 đến 14/10/2026.
- **Phạm vi:** AI lên ý tưởng từng phiên bản; **viết phần lớn mã HTML, CSS và JavaScript** của website theo yêu cầu của nhóm (nhóm nói rõ trong các prompt rằng nhóm chưa có người làm phần này); xử lý ảnh logo và ảnh sự kiện bằng đoạn mã Python; chạy kiểm thử tự động bằng Chromium; soạn bản nháp `README.md`, `CONTRIBUTIONS.md`, `SOURCES.md`, `docs/kiem-thu.md`. Vì vậy phần "tự viết mã" của nhóm phải được ghi trung thực ở `CONTRIBUTIONS.md`.

### 4.1. Nhật ký trao đổi (theo thứ tự thời gian)

| Ngày | Yêu cầu của nhóm (rút gọn) | Kết quả AI đưa ra | Nhóm đã chỉnh hoặc yêu cầu sửa |
|---|---|---|---|
| 08/10 | Gửi đề bài và `v0.1-y-tuong.html`: "hãy lên ý tưởng cho v0.2-html" | Ý tưởng 6 trang HTML, quy ước `id` và `class`, phân công, checklist | Nhóm đồng ý làm tiếp |
| 08/10 | "tạo thành đoạn mã hoàn chỉnh cho trang index.html", rồi lần lượt `chuong-trinh`, đội thi, `cong-cu`, `hoi-dap`, `lien-he` | 6 trang HTML của v0.2 (dữ liệu minh họa) | |
| 08/10 | Gửi danh sách khoa thực tế: "hãy làm lại theo đúng các khoa này" | `doi-thi.html` làm lại với 7 đội theo 7 khoa | Thay danh sách khoa ban đầu của AI |
| 08/10 | "sửa lại là ngày hội sinh viên trường đại học Tây Bắc" | Đổi tên sự kiện ở 3 trang và dùng cho các trang sau | Bỏ "K66 2026" |
| 08/10 | Gửi 6 logo: "làm nét ... bỏ các phần viền không cần thiết ở khoa kinh tế ... cùng kích cỡ", rồi "bỏ phần nhiễu" | Logo 600×600 đã làm nét và khử nhiễu | Yêu cầu làm lại lần hai để bớt nhiễu |
| 08/10 | "tổng hợp lại toàn bộ 6 trang" | Gói `website-v0.2-html.zip` và kiểm tra liên kết, `alt`, `label` | |
| 08/10 đến 10/10 | "lên ý tưởng cho v0.3-giao-dien" kèm yêu cầu nghiệm thu bổ sung; gửi ảnh mẫu giao diện: "chỉ làm giống màu và bố cục" | Ý tưởng v0.3 theo ảnh mẫu, giữ nguyên nội dung dự án | |
| 10/10 | "bắt đầu viết style.css ... và các trang" | `style.css` và 6 trang gắn Bootstrap | |
| 11/10 | Gửi CSS mẫu: "sửa lại file CSS theo kiểu trình bày này ... giữ nguyên nội dung" | `style.css` trình bày lại, nội dung không đổi | Nhóm chọn kiểu trình bày |
| 11/10 | Gửi `index.html` mẫu: "sửa lại các trang html theo cách trình bày tuần tự" | 6 trang HTML thụt lề tuần tự | Nhóm chọn kiểu trình bày |
| 11/10 | "lên ý tưởng cho v0.4", rồi "bắt đầu làm v0.4-tuong-tac vì nhóm mình không có ai làm cả" | 9 tệp JavaScript và jQuery, HTML cập nhật | |
| 12/10 | "viết lại v0.4-tuong-tac ... theo đúng yêu cầu của bài tập" | Viết lại Công cụ 2 thành "lập và kiểm tra chương trình" cho đúng chủ đề nhóm 12; bảng vị trí sử dụng JavaScript; kiểm thử bằng Chromium (59 phép) | |
| 12/10 | "viết riêng phần javascript", "tạo thành tệp riêng" | Mã JavaScript từng tệp và `js.zip` | |
| 12/10 | Gửi tệp RAR: "xem giúp mình bài của nhóm đã đúng với yêu cầu của nhóm 12 chưa ... lên ý tưởng cho v1.0-final" | Đánh giá, danh sách việc cần sửa, ý tưởng v1.0 | Nhóm tự thêm ảnh sự kiện và hai logo còn thiếu vào bản RAR |
| 14/10 | "bắt đầu thực hiện v1.0-final cho tôi" | Sửa `alt`, nén ảnh, logo hai khoa, nút In chương trình, liên kết bỏ qua điều hướng, README, SOURCES, CONTRIBUTIONS, kiểm thử (74 phép) | |
| 14/10 | "sửa phần sources lấy thông tin thực tế phần điền" | Bản `SOURCES.md` này | |

### 4.2. Phần tiếp nhận, chỉnh sửa và cách kiểm chứng

| Phần việc | Phần nhóm tiếp nhận | Phần nhóm chỉnh sửa hoặc loại bỏ | Cách kiểm chứng |
|---|---|---|---|
| HTML v0.2 | 6 trang HTML | Đổi danh sách khoa, tên sự kiện, bỏ ghi chú; chi tiết nhóm tự sửa thêm: phần thông tin mẫu, các lỗi nhỏ trong đoạn mã chưa vừa ý | Mở trang; AI kiểm tra liên kết, `alt`, `label`, `id` trùng |
| Giao diện v0.3 | `style.css`, bố cục Bootstrap | Định dạng lại CSS theo kiểu trình bày của nhóm; chi tiết nhóm tự sửa thêm: các phần thừa không cần thiết | Nhóm xem 3 độ rộng; AI đo độ tương phản các cặp màu chính (4,8:1 đến 14:1) |
| JavaScript v0.4 | 9 tệp JavaScript | Viết lại Công cụ 2 theo đúng đề tài;  | AI kiểm thử tự động bằng Chromium (59 phép ở v0.4, 74 phép ở v1.0), dùng jQuery 3.6.1 cục bộ; nhóm kiểm thử tay theo `docs/kiem-thu.md` |
| Xử lý ảnh | Logo 600×600; ảnh sự kiện đã nén | Nhóm tự thêm ảnh sự kiện và hai logo khoa | Xem bằng mắt, so với ảnh gốc |
| Hồ sơ v1.0 | Bản nháp README, SOURCES, CONTRIBUTIONS, kiểm thử | Nhóm ghi đúng đóng góp từng người | Nhóm đọc lại và xác nhận |

Nhóm xác nhận: mỗi thành viên đã đọc, chạy thử và giải thích được phần mã mình phụ trách:
Giang - Lò Thị Hà Giang 

Đua - Sùng A Đua
