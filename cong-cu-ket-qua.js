
$(function () {
  const $sapXep = $("#sap-xep-ket-qua");
  const $locMon = $("#loc-mon-ket-qua");
  const $diem = $("#diem-toi-thieu");
  const $tbody = $("#tbody-ket-qua");
  const $thongBao = $("#thong-bao-ket-qua");
  const TONG_DOI = DOI_THI.length;

  function dongThongBao(noiDung) {
    return '<tr><td colspan="5" class="text-center">' + noiDung + "</td></tr>";
  }

  function veBang() {
    $tbody.empty();
    $thongBao.removeClass().empty();
    $diem.removeClass("is-invalid");

    let ds = xepHangDoi();

  
    const mon = $locMon.val();
    if (mon !== "tat-ca") {
      ds = ds.filter(function (doi) { return doi.maMon === mon; });
    }

    const chuoiDiem = $.trim($diem.val());
    if (chuoiDiem !== "") {
      const diemMin = Number(chuoiDiem);
      if (Number.isNaN(diemMin) || diemMin < 0 || diemMin > 100) {
        $diem.addClass("is-invalid");
        $thongBao.addClass("alert alert-danger").text("Điểm tối thiểu phải là một số từ 0 đến 100.");
        $tbody.append(dongThongBao("Dữ liệu lọc chưa hợp lệ."));
        return;
      }
      ds = ds.filter(function (doi) { return doi.diem >= diemMin; });
    }


    switch ($sapXep.val()) {
      case "diem-giam":
        ds.sort(function (a, b) { return b.diem - a.diem; });
        break;
      case "diem-tang":
        ds.sort(function (a, b) { return a.diem - b.diem; });
        break;
      case "ten-az":
        ds.sort(function (a, b) { return a.ten.localeCompare(b.ten, "vi"); });
        break;
      default:
        ds.sort(function (a, b) { return a.hang - b.hang; });
    }

    
    if (ds.length === 0) {
      $thongBao.addClass("alert alert-warning").text("Không có đội nào phù hợp với bộ lọc.");
      $tbody.append(dongThongBao("Không có dữ liệu."));
      return;
    }

    $.each(ds, function (i, doi) {
      $tbody.append(taoDongKetQua(doi, false));
    });
    $thongBao.addClass("alert alert-info").text("Đang hiển thị " + ds.length + "/" + TONG_DOI + " đội.");
  }

  $sapXep.add($locMon).on("change", veBang);
  $diem.on("input", veBang);
  $("#form-ket-qua").on("submit", function (e) { e.preventDefault(); });   

  $("#nut-dat-lai-ket-qua").on("click", function () {
    $("#form-ket-qua")[0].reset();
    veBang();
  });
  $("#nut-dung-thu-ket-qua").on("click", function () {
    $locMon.val("van-nghe");
    $sapXep.val("diem-giam");
    $diem.val("80");
    veBang();
  });

  veBang();   
});
