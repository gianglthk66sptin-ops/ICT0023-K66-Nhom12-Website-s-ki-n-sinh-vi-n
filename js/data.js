/* data.js - Dữ liệu của website (một nguồn duy nhất cho mọi trang).
   Dữ liệu chỉ nằm trong bộ nhớ, tải lại trang là về như ban đầu. */
/* Yêu cầu đề: mảng đối tượng là nguồn dữ liệu cho chức năng bắt buộc số 1 (render dữ liệu từ mảng). */

// Danh sách 7 đội thi. maKhoa và maMon phải trùng với value của các ô chọn trong HTML.
const DOI_THI = [
  { ten: "Đội Mã Nguồn",   khoa: "Khoa học tự nhiên - Công nghệ", maKhoa: "khtn-cong-nghe",    mon: "Đố vui học thuật", maMon: "hoc-thuat", thanhVien: 6, diem: 95, giai: "Giải Nhất",         logo: "images/doi-khtn-cong-nghe.png" },
  { ten: "Đội Cánh Buồm",  khoa: "Kinh tế",                       maKhoa: "kinh-te",           mon: "Hội thao",         maMon: "the-thao",  thanhVien: 8, diem: 92, giai: "Giải Nhì",          logo: "images/doi-kinh-te.png" },
  { ten: "Đội Mầm Xanh",   khoa: "Tiểu học - Mầm non",            maKhoa: "tieu-hoc-mam-non",  mon: "Văn nghệ",         maMon: "van-nghe",  thanhVien: 8, diem: 90, giai: "Giải Ba",           logo: "images/doi-tieu-hoc-mam-non.png" },
  { ten: "Đội Núi Rừng",   khoa: "Nông - Lâm",                    maKhoa: "nong-lam",          mon: "Hội thao",         maMon: "the-thao",  thanhVien: 8, diem: 86, giai: "Giải Khuyến khích", logo: "images/doi-nong-lam.png" },
  { ten: "Đội Nhịp Tim",   khoa: "Khoa học sức khỏe",             maKhoa: "khoa-hoc-suc-khoe", mon: "Đố vui học thuật", maMon: "hoc-thuat", thanhVien: 5, diem: 84, giai: "Giải Khuyến khích", logo: "images/doi-khoa-hoc-suc-khoe.png" },
  { ten: "Đội Sắc Màu",    khoa: "Khoa học xã hội",               maKhoa: "khoa-hoc-xa-hoi",   mon: "Văn nghệ",         maMon: "van-nghe",  thanhVien: 7, diem: 80, giai: "Tham gia",          logo: "images/doi-khoa-hoc-xa-hoi.png" },
  { ten: "Đội Khởi Đầu",   khoa: "Cơ sở",                         maKhoa: "co-so",             mon: "Hội thao",         maMon: "the-thao",  thanhVien: 7, diem: 78, giai: "Tham gia",          logo: "images/doi-co-so.png" }
];

// Chương trình trong ngày. Giờ ghi theo định dạng 24 giờ "HH:MM".
const CHUONG_TRINH = [
  { stt: 1, batDau: "07:30", ketThuc: "08:00", hoatDong: "Đón tiếp và điểm danh các đội",    diaDiem: "Cổng chính",    phuTrach: "Ban Tiếp đón" },
  { stt: 2, batDau: "08:00", ketThuc: "08:45", hoatDong: "Lễ khai mạc",                       diaDiem: "Sân trung tâm", phuTrach: "Ban Tổ chức" },
  { stt: 3, batDau: "09:00", ketThuc: "10:30", hoatDong: "Hội thi Văn nghệ - vòng 1",         diaDiem: "Hội trường A",  phuTrach: "Ban Văn nghệ" },
  { stt: 4, batDau: "09:00", ketThuc: "11:00", hoatDong: "Hội thao: kéo co và bóng chuyền",   diaDiem: "Sân thể thao",  phuTrach: "Ban Thể thao" },
  { stt: 5, batDau: "11:00", ketThuc: "13:30", hoatDong: "Nghỉ trưa và ăn nhẹ",               diaDiem: "Khu căng tin",  phuTrach: "Ban Hậu cần" },
  { stt: 6, batDau: "13:30", ketThuc: "15:00", hoatDong: "Đố vui học thuật",                  diaDiem: "Hội trường B",  phuTrach: "Ban Học thuật" },
  { stt: 7, batDau: "15:15", ketThuc: "16:15", hoatDong: "Hội thi Văn nghệ - chung kết",      diaDiem: "Hội trường A",  phuTrach: "Ban Văn nghệ" },
  { stt: 8, batDau: "16:15", ketThuc: "17:00", hoatDong: "Tổng kết, trao giải và bế mạc",     diaDiem: "Sân trung tâm", phuTrach: "Ban Tổ chức" }
];