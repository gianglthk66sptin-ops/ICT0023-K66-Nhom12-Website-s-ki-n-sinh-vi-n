
(function () {
  const form = document.getElementById("form-tra-cuu");
  const oTim = document.getElementById("o-tim-kiem");
  const locMon = document.getElementById("loc-mon");
  const locKhoa = document.getElementById("loc-khoa");
  const sapXep = document.getElementById("sap-xep");
  const ketQua = document.getElementById("ket-qua-tra-cuu");
  const DANH_SACH = xepHangDoi();
  const TOI_DA = 50;   

  function traCuu() {
    const goc = oTim.value;
    const tuKhoa = boDau(goc.trim());
    ketQua.replaceChildren();


    if (goc.length > TOI_DA) {
      const tb = taoPhanTu("div");
      hienThongBao(tb, "warning", "Từ khóa quá dài (tối đa " + TOI_DA + " ký tự). Vui lòng rút gọn.");
      ketQua.appendChild(tb);
      return;
    }

    const ds = DANH_SACH.filter(function (doi) {
      const khopTuKhoa = tuKhoa === "" || boDau(doi.ten).includes(tuKhoa) || boDau(doi.khoa).includes(tuKhoa);
      const khopMon = locMon.value === "tat-ca" || doi.maMon === locMon.value;
      const khopKhoa = locKhoa.value === "tat-ca" || doi.maKhoa === locKhoa.value;
      return khopTuKhoa && khopMon && khopKhoa;
    });
    switch (sapXep.value) {
      case "ten-za":
        ds.sort(function (a, b) { return b.ten.localeCompare(a.ten, "vi"); });
        break;
      case "thanh-vien-giam":
        ds.sort(function (a, b) { return b.thanhVien - a.thanhVien; });
        break;
      case "thanh-vien-tang":
        ds.sort(function (a, b) { return a.thanhVien - b.thanhVien; });
        break;
      default:
        ds.sort(function (a, b) { return a.ten.localeCompare(b.ten, "vi"); });
    }
    if (goc.length > 0 && tuKhoa === "") {
      ketQua.appendChild(taoPhanTu("p", "text-muted small", "Từ khóa chỉ có khoảng trắng nên đang hiển thị tất cả đội."));
    }
    if (ds.length === 0) {
      const tb = taoPhanTu("div");
      hienThongBao(tb, "warning", "Không tìm thấy đội nào phù hợp. Hãy thử từ khóa khác hoặc bỏ bớt bộ lọc.");
      ketQua.appendChild(tb);
      return;
    }

    ketQua.appendChild(taoPhanTu("p", "fw-semibold", "Tìm thấy " + ds.length + " đội"));
    const hang = taoPhanTu("div", "row g-3 row-cols-1 row-cols-md-2 row-cols-xl-3");
    for (const doi of ds) {
      hang.appendChild(taoCardDoi(doi));
    }
    ketQua.appendChild(hang);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    traCuu();
  });
  oTim.addEventListener("input", traCuu);          
  [locMon, locKhoa, sapXep].forEach(function (o) {
    o.addEventListener("change", traCuu);
  });

  document.getElementById("nut-dat-lai-tra-cuu").addEventListener("click", function () {
    form.reset();
    traCuu();
  });
  document.getElementById("nut-dung-thu-tra-cuu").addEventListener("click", function () {
    oTim.value = "ma nguon";    
    locMon.value = "tat-ca";
    locKhoa.value = "tat-ca";
    traCuu();
  });

  traCuu();   // hiển thị đủ danh sách ngay khi mở trang
})();
