/* chuong-trinh.js - Vẽ bảng chương trình từ mảng CHUONG_TRINH và tự tính thời lượng. */
/* Yêu cầu đề: chức năng bắt buộc số 1 - render dữ liệu từ mảng đối tượng. */
(function () {
  const tbody = document.getElementById("tbody-chuong-trinh");

  CHUONG_TRINH.forEach(function (muc) {
    const bd = gioRaPhut(muc.batDau);
    const kt = gioRaPhut(muc.ketThuc);
    // Dữ liệu sai (giờ không hợp lệ hoặc kết thúc trước bắt đầu) thì báo thay vì in số sai
    const thoiLuong = (bd !== null && kt !== null && kt > bd) ? dinhDangThoiLuong(kt - bd) : "Giờ không hợp lệ";

    const tr = taoPhanTu("tr");
    [muc.stt, muc.batDau, muc.ketThuc, muc.hoatDong, muc.diaDiem, muc.phuTrach, thoiLuong].forEach(function (giaTri) {
      tr.appendChild(taoPhanTu("td", "", giaTri));
    });
    tbody.appendChild(tr);
  });
})();