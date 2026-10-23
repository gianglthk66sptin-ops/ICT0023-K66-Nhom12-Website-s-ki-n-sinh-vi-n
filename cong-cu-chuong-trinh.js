
(function () {
  const form = document.getElementById("form-hoat-dong");
  const oTen = document.getElementById("ten-hoat-dong");
  const oBatDau = document.getElementById("gio-bat-dau");
  const oKetThuc = document.getElementById("gio-ket-thuc");
  const thongBao = document.getElementById("thong-bao-loi");
  const tongQuan = document.getElementById("thoi-luong");
  const tbody = document.getElementById("tbody-lap-chuong-trinh");
  const MO_CUA = gioRaPhut("07:30");
  const DONG_CUA = gioRaPhut("17:00");
  const TOI_DA_MUC = 12;
  const CHUA_CO = "Tổng quan: chưa có hoạt động nào.";
  let danhSach = [];
  function giaoNhau(a, b) {
    return gioRaPhut(a.batDau) < gioRaPhut(b.ketThuc) && gioRaPhut(b.batDau) < gioRaPhut(a.ketThuc);
  }

  function veLai() {
    tbody.replaceChildren();

    if (danhSach.length === 0) {
      const tr = taoPhanTu("tr");
      const o = taoPhanTu("td", "text-center", "Chưa có hoạt động nào. Hãy thêm hoạt động hoặc bấm \"Dùng thử\".");
      o.colSpan = 7;
      tr.appendChild(o);
      tbody.appendChild(tr);
      tongQuan.textContent = CHUA_CO;
      return;
    }

    danhSach.sort(function (a, b) { return gioRaPhut(a.batDau) - gioRaPhut(b.batDau); });

    const trung = danhSach.map(function () { return []; });
    let soCapTrung = 0;
    for (let i = 0; i < danhSach.length; i++) {
      for (let j = i + 1; j < danhSach.length; j++) {
        if (giaoNhau(danhSach[i], danhSach[j])) {
          trung[i].push(danhSach[j].ten);
          trung[j].push(danhSach[i].ten);
          soCapTrung++;
        }
      }
    }

    danhSach.forEach(function (muc, i) {
      const tr = taoPhanTu("tr");
      const phut = gioRaPhut(muc.ketThuc) - gioRaPhut(muc.batDau);
      [i + 1, muc.ten, muc.batDau, muc.ketThuc, dinhDangThoiLuong(phut)].forEach(function (giaTri) {
        tr.appendChild(taoPhanTu("td", "", giaTri));
      });

      const oTrangThai = taoPhanTu("td");
      if (trung[i].length > 0) {
        oTrangThai.appendChild(taoPhanTu("span", "badge badge-vang", "Trùng giờ với: " + trung[i].join(", ")));
      } else {
        oTrangThai.appendChild(taoPhanTu("span", "badge badge-xanh", "Hợp lệ"));
      }
      tr.appendChild(oTrangThai);

      const oXoa = taoPhanTu("td");
      const nutXoa = taoPhanTu("button", "btn btn-navy btn-sm", "Xóa");
      nutXoa.type = "button";
      nutXoa.dataset.chiSo = i;
      nutXoa.setAttribute("aria-label", "Xóa hoạt động " + muc.ten);
      oXoa.appendChild(nutXoa);
      tr.appendChild(oXoa);

      tbody.appendChild(tr);
    });
    let cuoi = gioRaPhut(danhSach[0].batDau);
    let hoatDong = 0;
    let khoangTrong = 0;
    let trongLonNhat = 0;
    for (const muc of danhSach) {
      const bd = gioRaPhut(muc.batDau);
      const kt = gioRaPhut(muc.ketThuc);
      if (bd > cuoi) {
        khoangTrong += bd - cuoi;
        trongLonNhat = Math.max(trongLonNhat, bd - cuoi);
      }
      if (kt > cuoi) {
        hoatDong += kt - Math.max(bd, cuoi);
        cuoi = kt;
      }
    }

    const batDauSom = danhSach[0].batDau;
    tongQuan.textContent =
      "Tổng quan: " + danhSach.length + " hoạt động, từ " + batDauSom + " đến " + doiRaGio(cuoi) + ". " +
      "Thời gian hoạt động (không tính phần trùng): " + dinhDangThoiLuong(hoatDong) + ". " +
      "Khoảng trống giữa các hoạt động: " + (khoangTrong === 0 ? "không có" : dinhDangThoiLuong(khoangTrong) + ", dài nhất " + trongLonNhat + " phút") + ". " +
      "Số cặp trùng giờ: " + soCapTrung + ".";
  }
  function doiRaGio(tongPhut) {
    const g = String(Math.floor(tongPhut / 60)).padStart(2, "0");
    const p = String(tongPhut % 60).padStart(2, "0");
    return g + ":" + p;
  }

  function themHoatDong() {
    xoaThongBao(thongBao);
    const ten = oTen.value.trim();
    const bd = gioRaPhut(oBatDau.value);
    const kt = gioRaPhut(oKetThuc.value);
    const loi = [];
    if (ten === "") {
      loi.push("Vui lòng nhập tên hoạt động.");
    } else if (ten.length > 100) {
      loi.push("Tên hoạt động tối đa 100 ký tự.");
    }
    if (bd === null) {
      loi.push("Vui lòng chọn giờ bắt đầu.");
    }
    if (kt === null) {
      loi.push("Vui lòng chọn giờ kết thúc.");
    }
    if (bd !== null && kt !== null && kt <= bd) {
      loi.push("Giờ kết thúc phải sau giờ bắt đầu.");
    }
    if (loi.length === 0 && danhSach.length >= TOI_DA_MUC) {
      loi.push("Chương trình đã đủ " + TOI_DA_MUC + " hoạt động. Hãy xóa bớt trước khi thêm.");
    }
    if (loi.length === 0 && danhSach.some(function (m) { return m.ten === ten && m.batDau === oBatDau.value && m.ketThuc === oKetThuc.value; })) {
      loi.push("Hoạt động này đã có trong chương trình.");
    }
    if (loi.length > 0) {
      hienThongBao(thongBao, "danger", loi);
      return;
    }

    danhSach.push({ ten: ten, batDau: oBatDau.value, ketThuc: oKetThuc.value });
    veLai();

    if (bd < MO_CUA || kt > DONG_CUA) {
      hienThongBao(thongBao, "warning", "Đã thêm \"" + ten + "\", nhưng hoạt động nằm ngoài khung giờ của ngày hội (07:30 - 17:00).");
    } else {
      hienThongBao(thongBao, "success", "Đã thêm \"" + ten + "\" (" + dinhDangThoiLuong(kt - bd) + ").");
    }
    oTen.value = "";
    oBatDau.value = "";
    oKetThuc.value = "";
    oTen.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    themHoatDong();
  });
  tbody.addEventListener("click", function (e) {
    const nut = e.target.closest("button[data-chi-so]");
    if (nut === null) {
      return;
    }
    danhSach.splice(Number(nut.dataset.chiSo), 1);
    xoaThongBao(thongBao);
    veLai();
  });

  document.getElementById("nut-dung-thu").addEventListener("click", function () {
    danhSach = [
      { ten: "Hội thi Văn nghệ - vòng 1",       batDau: "09:00", ketThuc: "10:30" },
      { ten: "Hội thao: kéo co và bóng chuyền", batDau: "10:00", ketThuc: "11:00" },
      { ten: "Đố vui học thuật",                batDau: "13:30", ketThuc: "15:00" },
      { ten: "Hội thi Văn nghệ - chung kết",    batDau: "15:15", ketThuc: "16:15" }
    ];
    veLai();
    hienThongBao(thongBao, "info", "Đã nạp 4 hoạt động để dùng thử. Hai hoạt động đầu trùng giờ, hãy xem cột Trạng thái.");
  });

  document.getElementById("nut-in-chuong-trinh").addEventListener("click", function () {
    if (danhSach.length === 0) {
      hienThongBao(thongBao, "warning", "Chưa có hoạt động nào để in. Hãy thêm hoạt động hoặc bấm \"Dùng thử\".");
      return;
    }
    window.print();
  });

  document.getElementById("nut-dat-lai").addEventListener("click", function () {
    danhSach = [];
    form.reset();
    xoaThongBao(thongBao);
    veLai();
  });

  veLai();
})();
