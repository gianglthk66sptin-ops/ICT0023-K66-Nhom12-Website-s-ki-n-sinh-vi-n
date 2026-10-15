# Vị trí sử dụng các nội dung JavaScript và jQuery (dùng cho báo cáo)

| Nội dung | Vị trí (tệp: hàm hoặc đoạn mã) | Ví dụ |
|---|---|---|
| Biến `const` / `let` | `cong-cu-chuong-trinh.js` (đầu tệp, `let danhSach`, `let cuoi` trong `veLai`); `chung.js` (`let boDem`) | `const MO_CUA = gioRaPhut("07:30");` |
| Kiểu dữ liệu | Chuỗi: `ten` trong `data.js`. Số: `diem`, `thanhVien`. Boolean: kết quả `kt <= bd`, tham số `coGhiChu` của `taoDongKetQua`. `null`: `gioRaPhut` trả về khi giờ sai. Mảng, đối tượng: `DOI_THI`, `CHUONG_TRINH` | `{ ten: "Đội Mã Nguồn", diem: 95 }` |
| Toán tử | Số học: `kt - bd` (`themHoatDong`). So sánh: `<`, `>`, `===` (`giaoNhau`). Logic: `&&`, `\|\|` (`traCuu`, bộ lọc). Ba ngôi `? :` (`xepHangDoi`, `lopGiai`) | `bd > cuoi` |
| Cấu trúc điều khiển | `if / else if` (`themHoatDong`, `kiemTra` trong `lien-he.js`). `switch` (`traCuu` trong `cong-cu-tra-cuu.js`, `veBang` trong `cong-cu-ket-qua.js`) | `switch (sapXep.value)` |
| Vòng lặp | `for` lồng nhau tìm hoạt động trùng giờ (`veLai`). `for...of` (`veLai`, `traCuu`). `forEach` (`doi-thi.js`, `taoCardDoi`). `setInterval` (`chung.js`) | `for (const muc of danhSach)` |
| Hàm | `boDau`, `gioRaPhut`, `dinhDangThoiLuong`, `taoPhanTu`, `hienThongBao`, `xepHangDoi`, `taoCardDoi`, `taoDongKetQua` (`tien-ich.js`); `giaoNhau`, `veLai`, `themHoatDong` (`cong-cu-chuong-trinh.js`) | `function gioRaPhut(gio) { ... }` |
| Xâu | `toLowerCase`, `normalize`, `replace` (`boDau`); `trim`, `includes` (`traCuu`); `padStart` (`doiRaGio`); `split`, `slice` (`hienTomTat` trong `lien-he.js`); nối chuỗi ở `veLai` | `chuoi.toLowerCase().normalize("NFD")` |
| Mảng / đối tượng | `DOI_THI`, `CHUONG_TRINH` (`data.js`); `filter`, `sort`, `map` (`traCuu`, `xepHangDoi`); `push`, `splice`, `some` (`cong-cu-chuong-trinh.js`); `reduce` (`doi-thi.js`) | `danhSach.splice(chiSo, 1)` |
| DOM | `getElementById`, `createElement` (qua `taoPhanTu`), `appendChild`, `replaceChildren`, `textContent`, `className`, `dataset` | `el.textContent = noiDung` |
| Sự kiện | `addEventListener` với `submit`, `input`, `change`, `click` (`cong-cu-tra-cuu.js`, `cong-cu-chuong-trinh.js`); ủy quyền sự kiện cho nút Xóa trên `tbody`; nút In chương trình gọi `window.print()` (`cong-cu-chuong-trinh.js`) | `form.addEventListener("submit", ...)` |
| jQuery | `cong-cu-ket-qua.js`: `$("#...")`, `.on`, `.empty`, `.append`, `.addClass`, `.text`, `$.each`, `$.trim`. `lien-he.js`: `.siblings`, `.toggleClass`, `.trigger("focus")`, tạo phần tử `$("<ul>")` | `$sapXep.add($locMon).on("change", veBang)` |

## Ba chức năng bắt buộc của đề

| Chức năng | Tệp |
|---|---|
| 1. Render dữ liệu từ mảng đối tượng | `data.js`, `doi-thi.js`, `chuong-trinh.js` |
| 2. Tìm kiếm, lọc, sắp xếp | `cong-cu-tra-cuu.js`, `cong-cu-ket-qua.js` |
| 3. Kiểm tra form, báo lỗi rõ ràng, kết quả sinh tức thời | `lien-he.js` (đếm ký tự, tóm tắt), `cong-cu-chuong-trinh.js` (tổng quan chương trình) |

Chức năng mở rộng tự chọn: in chương trình đã lập (`cong-cu-chuong-trinh.js` + CSS `@media print` trong `css/style.css`).

Chức năng của chủ đề: đếm ngược (`chung.js`), lập và kiểm tra chương trình theo mốc thời gian (`cong-cu-chuong-trinh.js`), tra cứu đội thi, bảng kết quả có sắp xếp và lọc.
