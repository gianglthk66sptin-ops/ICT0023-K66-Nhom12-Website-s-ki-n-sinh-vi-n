/* doi-thi.js - Vẽ card đội thi, bảng kết quả và thống kê từ mảng DOI_THI. */
/* Yêu cầu đề: chức năng bắt buộc số 1 - render dữ liệu từ mảng đối tượng. */
(function () {
  const luoi = document.getElementById("luoi-doi-thi");
  const tbody = document.getElementById("tbody-bang-ket-qua");
  const danhSach = xepHangDoi();

  // 1. Card đội thi
  danhSach.forEach(function (doi) {
    luoi.appendChild(taoCardDoi(doi));
  });

  // 2. Bảng kết quả (đã sắp theo hạng)
  danhSach.forEach(function (doi) {
    tbody.appendChild(taoDongKetQua(doi, true));
  });

  // 3. Thống kê tính từ dữ liệu
  const tongDiem = danhSach.reduce(function (tong, doi) { return tong + doi.diem; }, 0);
  const diemCao = Math.max.apply(null, danhSach.map(function (doi) { return doi.diem; }));
  document.getElementById("tk-so-doi").textContent = danhSach.length;
  document.getElementById("tk-diem-cao").textContent = diemCao;
  document.getElementById("tk-diem-tb").textContent = (tongDiem / danhSach.length).toFixed(1).replace(".", ",");
})();