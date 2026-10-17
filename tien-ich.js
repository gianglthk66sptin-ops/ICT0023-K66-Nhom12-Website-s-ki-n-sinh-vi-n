/* tien-ich.js - Các hàm dùng chung cho nhiều trang. Nạp sau data.js. */
/* Yêu cầu đề: dùng hàm, xâu, mảng/đối tượng; tạo phần tử bằng DOM (textContent) để hiển thị an toàn. */

// Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu: "Mã Nguồn" -> "ma nguon"
function boDau(chuoi) {
  return chuoi
    .toLowerCase()
    .normalize("NFD")                  // tách chữ và dấu
    .replace(/[\u0300-\u036f]/g, "")   // xóa các dấu
    .replace(/đ/g, "d");
}

// Đổi "HH:MM" thành số phút tính từ 00:00. Trả về null nếu sai định dạng.
function gioRaPhut(gio) {
  const kq = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(gio);
  if (kq === null) {
    return null;
  }
  return Number(kq[1]) * 60 + Number(kq[2]);
}

// Đổi số phút thành chữ, ví dụ 90 -> "1 giờ 30 phút (90 phút)"
function dinhDangThoiLuong(tongPhut) {
  const gio = Math.floor(tongPhut / 60);
  const phut = tongPhut % 60;
  if (gio === 0) {
    return phut + " phút";
  }
  if (phut === 0) {
    return gio + " giờ (" + tongPhut + " phút)";
  }
  return gio + " giờ " + phut + " phút (" + tongPhut + " phút)";
}

// Tạo phần tử HTML an toàn: nội dung đưa vào bằng textContent, không dùng innerHTML.
function taoPhanTu(ten, lop, noiDung) {
  const el = document.createElement(ten);
  if (lop) {
    el.className = lop;
  }
  if (noiDung !== undefined) {
    el.textContent = noiDung;
  }
  return el;
}

// Hiện thông báo kiểu Bootstrap (loai: danger, warning, success, info). noiDung là chuỗi hoặc mảng chuỗi.
function hienThongBao(el, loai, noiDung) {
  el.replaceChildren();
  el.className = "alert alert-" + loai;
  if (Array.isArray(noiDung)) {
    const ds = taoPhanTu("ul", "mb-0 ps-3");
    noiDung.forEach(function (muc) {
      ds.appendChild(taoPhanTu("li", "", muc));
    });
    el.appendChild(ds);
  } else {
    el.textContent = noiDung;
  }
}

// Xóa thông báo (phần tử rỗng sẽ tự ẩn nhờ CSS :empty)
function xoaThongBao(el) {
  el.replaceChildren();
  el.className = "";
}

// Trả về bản sao danh sách đội, sắp theo điểm giảm dần và có thêm thuộc tính hang (điểm bằng nhau thì cùng hạng)
function xepHangDoi() {
  const ds = DOI_THI.map(function (doi) { return Object.assign({}, doi); });
  ds.sort(function (a, b) { return b.diem - a.diem; });
  ds.forEach(function (doi, i) {
    doi.hang = (i > 0 && doi.diem === ds[i - 1].diem) ? ds[i - 1].hang : i + 1;
  });
  return ds;
}

// Chọn màu huy hiệu theo giải
function lopGiai(giai) {
  if (giai === "Giải Nhất" || giai === "Giải Nhì" || giai === "Giải Ba") {
    return "badge-vang";
  }
  return giai.includes("Khuyến") ? "badge-xanh" : "badge-xam";
}

// Tạo một card đội thi (doi phải có thuộc tính hang, lấy từ xepHangDoi)
function taoCardDoi(doi) {
  const col = taoPhanTu("div", "col");
  const card = taoPhanTu("article", "doi-thi card h-100");
  card.dataset.khoa = doi.maKhoa;
  card.dataset.mon = doi.maMon;

  const anh = taoPhanTu("img", "card-img-top logo-doi");
  anh.src = doi.logo;
  anh.alt = "Logo đội Khoa " + doi.khoa;
  anh.width = 600;
  anh.height = 600;

  const than = taoPhanTu("div", "card-body");
  than.appendChild(taoPhanTu("h3", "card-title", doi.ten));
  than.appendChild(taoPhanTu("p", "", "Khoa: " + doi.khoa));
  than.appendChild(taoPhanTu("p", "", "Môn thi: " + doi.mon));
  than.appendChild(taoPhanTu("p", "", "Số thành viên: " + doi.thanhVien));

  const chan = taoPhanTu("div", "card-footer");
  chan.appendChild(taoPhanTu("span", "badge " + (doi.hang <= 3 ? "badge-vang" : "badge-xanh"), "Hạng " + doi.hang));
  const diem = taoPhanTu("span");
  diem.append(taoPhanTu("strong", "", doi.diem), " điểm");
  chan.appendChild(diem);

  card.append(anh, than, chan);
  col.appendChild(card);
  return col;
}

// Tạo một dòng <tr> của bảng kết quả. coGhiChu = true thì thêm cột "Ghi chú" (giải).
function taoDongKetQua(doi, coGhiChu) {
  const tr = taoPhanTu("tr");
  if (doi.hang <= 3) {
    tr.className = "hang-top";
  }
  [doi.hang, doi.ten, doi.khoa, doi.mon, doi.diem].forEach(function (giaTri) {
    tr.appendChild(taoPhanTu("td", "", giaTri));
  });
  if (coGhiChu) {
    const o = taoPhanTu("td");
    o.appendChild(taoPhanTu("span", "badge " + lopGiai(doi.giai), doi.giai));
    tr.appendChild(o);
  }
  return tr;
}