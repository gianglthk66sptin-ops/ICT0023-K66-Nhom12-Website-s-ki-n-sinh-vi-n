# ICT0023-K66-Nhom12-SuKienSinhVien
Website sự kiện sinh viên cho Ban tổ chức ngày hội / hội thao / hội thi. Chạy hoàn toàn trên trình duyệt, không backend, không lưu trữ dữ liệu.
- **Website (GitHub Pages):** https://<tai-khoan>.github.io/ICT0023-K66-Nhom12-SuKienSinhVien/
- **Video demo (YouTube Unlisted):** https://youtu.be/IC8YiaN75f8https://youtu.be/IC8YiaN75f8
- **Phiên bản nộp:** tag `v1.0-final`
# 1. Giới thiệu
- **Tên sự kiện trong website:** <điền, ví dụ: Ngày hội ... 2026>
- **Người dùng chính:** Ban tổ chức (BTC) sự kiện sinh viên; người xem phụ: các đội thi và sinh viên.
- **Nhu cầu giải quyết:** BTC cần lập chương trình theo khung giờ mà không bị trùng, tra cứu đội thi và xem bảng kết quả nhanh.
# 2. Thành viên nhóm
| STT | Họ tên | Tài khoản GitHub | Vai trò |
|---|---|---|---|---|
| 1 | <LÒ THỊ HÀ GIANG> | <gianglthk66sptin-ops> | Nhóm trưởng
| 2 | <SÙNG A ĐUA> | <duasak66sptin-cmd> | Thành viên
| 3 | <PHẠM HỒNG TRANG> | <trangphk66sptin-ctrl> | Thành viên
| 4 | <NGUYỄN ĐỨC ĐẠT> | <datjuan-ng> | Thành viên

Chi tiết đóng góp xem [CONTRIBUTIONS.md](CONTRIBUTIONS.md). Nguồn tham khảo xem [SOURCES.md](SOURCES.md).

# 3. Cấu trúc website
| Trang | Tệp | Nội dung |
|---|---|---|
| Trang chủ | `index.html` | Giới thiệu sự kiện, banner |
| Chương trình | `chuong-trinh.html` | Chương trình theo khung giờ |
| Đội thi | `doi-thi.html` | Danh sách đội thi, thể lệ |
| Công cụ | `cong-cu.html` | Lập chương trình, tra cứu đội thi, bảng kết quả |
| Hỏi đáp | `hoi-dap.html` | Hướng dẫn, hỏi đáp |
| Liên hệ | `lien-he.html` | Form liên hệ có kiểm tra dữ liệu |

# 4. Chức năng tương tác
Ba chức năng bắt buộc:
1. **Render dữ liệu** từ mảng đối tượng: danh sách đội thi, chương trình, kết quả. (`js/data.js`, `js/chuong-trinh.js`, `js/doi-thi.js`)
2. **Tìm kiếm, lọc, sắp xếp:** tra cứu đội thi theo tên/đơn vị; bảng kết quả sắp xếp theo điểm/hạng và lọc theo nội dung thi. (`js/cong-cu-tra-cuu.js`, `js/cong-cu-ket-qua.js`)
3. **Kiểm tra form và kết quả tức thời:** form thêm mốc chương trình (tên, giờ bắt đầu, thời lượng) kiểm tra dữ liệu, tự tính giờ kết thúc, tổng thời lượng và báo trùng giờ. (`js/cong-cu-chuong-trinh.js`)

Mở rộng (nếu đã làm): đếm ngược khai mạc (jQuery), nhập CSV.

**Ca biên đã xử lý:** <ví dụ: chưa nhập gì; giờ bắt đầu sai định dạng; thời lượng âm hoặc bằng 0; hai mốc trùng giờ; không tìm thấy đội>.
**Dùng thử nhanh:** nút "Dùng dữ liệu mẫu" và nút "Đặt lại" ở trang Công cụ. Dữ liệu chỉ tồn tại trong phiên, tải lại trang sẽ đặt lại.

# 5. Công nghệ
HTML5, CSS (tệp ngoài), Bootstrap 5 (grid, navbar, card, ... ), JavaScript thuần (const/let, hàm, mảng/đối tượng, `addEventListener`), jQuery (dùng cho <chức năng>).

# 6. Chạy trên máy
```bash
git clone https://github.com/<tai-khoan>/ICT0023-K66-Nhom12-SuKienSinhVien.git
cd ICT0023-K66-Nhom12-SuKienSinhVien
# Mở index.html bằng trình duyệt (hoặc dùng Live Server)
```

# 7. Cấu trúc thư mục
```
ICT0023-K66-Nhom12-WebsiteSuKienSinhVien/
├── index.html, chuong-trinh.html, doi-thi.html
├── cong-cu.html, hoi-dap.html, lien-he.html
├── css/style.css
├── js/
│   ├── data.js                  # dữ liệu mẫu (mảng đối tượng)
│   ├── chung.js, tien-ich.js    # hàm dùng chung
│   ├── chuong-trinh.js, doi-thi.js, lien-he.js
│   └── cong-cu-chuong-trinh.js, cong-cu-tra-cuu.js, cong-cu-ket-qua.js
├── images/
├── README.md, SOURCES.md, CONTRIBUTIONS.md
```

# 8. Quy trình Git
- Branch theo chức năng: `feat/<ten>`, `fix/<ten>`; hợp nhất bằng Pull Request có người khác review.
- Commit dạng `feat:`, `fix:`, `docs:`, `style:`.
- Các mốc: `v0.1-y-tuong`, `v0.2-html`, `v0.3-giao-dien`, `v0.4-tuong-tac`, `v1.0-final`.

# 9. Lưu ý
- Dữ liệu đội thi, điểm số là **dữ liệu mẫu**, chỉ mang tính tham khảo; không dùng thông tin cá nhân thật.
- Không dùng localStorage, cookie hay dịch vụ lưu trữ.

# 10. Hạn chế và hướng phát triển
- Hạn chế: <điền thật>
- Hướng phát triển: <điền thật>
