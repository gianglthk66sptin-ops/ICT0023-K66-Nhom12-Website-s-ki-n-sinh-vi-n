/* lien-he.js - Kiểm tra form liên hệ, đếm ký tự tức thời và tóm tắt phản hồi (dùng jQuery). */
/* Yêu cầu đề: chức năng bắt buộc số 3 - kiểm tra form, báo lỗi rõ ràng, kết quả tức thời; dùng jQuery. */
$(function () {
  const $form = $("#form-lien-he");
  const $hoTen = $("#ho-ten");
  const $email = $("#email");
  const $loai = $("#loai-phan-hoi");
  const $noiDung = $("#noi-dung");
  const $dongY = $("#dong-y");
  const $dem = $("#dem-ky-tu");
  const $thongBao = $("#thong-bao-form");
  const $tomTat = $("#tom-tat-phan-hoi");
  const TOI_THIEU = 20;
  const TOI_DA = 500;
  const MAU_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const TOM_TAT_MAC_DINH = $tomTat.html();   // lưu nội dung gốc để đặt lại

  // Kết quả tức thời: đếm ký tự khi người dùng gõ
  function capNhatDem() {
    const n = $noiDung.val().length;
    let chu = "Đã nhập " + n + "/" + TOI_DA + " ký tự.";
    if (n > 0 && n < TOI_THIEU) {
      chu += " Cần thêm ít nhất " + (TOI_THIEU - n) + " ký tự.";
    }
    $dem.text(chu).toggleClass("text-danger", n >= TOI_DA * 0.9);
  }

  function datLoi($o, thongDiep) {
    $o.addClass("is-invalid").siblings(".invalid-feedback").text(thongDiep);
    return { o: $o, thongDiep: thongDiep };
  }

  // Kiểm tra từng ô, trả về mảng các lỗi
  function kiemTra() {
    $form.find(".is-invalid").removeClass("is-invalid");
    $form.find(".invalid-feedback").text("");
    const loi = [];

    const ten = $.trim($hoTen.val());
    if (ten.length < 2) {
      loi.push(datLoi($hoTen, "Họ và tên cần ít nhất 2 ký tự (không tính khoảng trắng)."));
    }
    const email = $.trim($email.val());
    if (email === "") {
      loi.push(datLoi($email, "Vui lòng nhập email."));
    } else if (!MAU_EMAIL.test(email)) {
      loi.push(datLoi($email, "Email chưa đúng định dạng, ví dụ: ten@example.com."));
    }
    if ($loai.val() === "") {
      loi.push(datLoi($loai, "Vui lòng chọn loại phản hồi."));
    }
    const noiDung = $.trim($noiDung.val());
    if (noiDung.length < TOI_THIEU) {
      loi.push(datLoi($noiDung, "Nội dung cần ít nhất " + TOI_THIEU + " ký tự (hiện có " + noiDung.length + ")."));
    } else if (noiDung.length > TOI_DA) {
      loi.push(datLoi($noiDung, "Nội dung tối đa " + TOI_DA + " ký tự."));
    }
    if (!$dongY.is(":checked")) {
      loi.push(datLoi($dongY, "Bạn cần tích vào ô xác nhận."));
    }
    return loi;
  }

  function hienTomTat() {
    const noiDung = $.trim($noiDung.val());
    const soTu = noiDung.split(/\s+/).length;
    const trich = noiDung.length > 60 ? noiDung.slice(0, 60) + "..." : noiDung;
    // Dùng .text() nên nội dung có chứa thẻ HTML cũng chỉ hiện thành chữ, không bị thực thi
    $tomTat.empty().append(
      $("<h3>").text("Tóm tắt phản hồi"),
      $("<ul>").append(
        $("<li>").text("Người gửi: " + $.trim($hoTen.val())),
        $("<li>").text("Loại phản hồi: " + $loai.find("option:selected").text()),
        $("<li>").text("Độ dài: " + noiDung.length + " ký tự, " + soTu + " từ"),
        $("<li>").text("Thời gian đọc ước tính: khoảng " + Math.max(1, Math.ceil(soTu / 200)) + " phút"),
        $("<li>").text("Nội dung (trích): " + trich)
      ),
      $("<p>").addClass("mb-0 small").text("Thông tin chỉ được kiểm tra trên trình duyệt, không gửi đi hoặc lưu lại.")
    );
  }

  $noiDung.on("input", capNhatDem);
  $form.on("input change", "input, select, textarea", function () {
    $(this).removeClass("is-invalid");   // sửa đến đâu, bỏ viền đỏ đến đó
  });

  $form.on("submit", function (e) {
    e.preventDefault();
    const loi = kiemTra();
    if (loi.length > 0) {
      $thongBao.attr("class", "alert alert-danger").text("Biểu mẫu còn " + loi.length + " lỗi. Vui lòng kiểm tra các ô được đánh dấu đỏ.");
      loi[0].o.trigger("focus");   // đưa con trỏ về ô lỗi đầu tiên
      return;
    }
    $thongBao.attr("class", "alert alert-success").text("Biểu mẫu hợp lệ. Cảm ơn bạn đã phản hồi!");
    hienTomTat();
  });

  $("#nut-dung-thu-lien-he").on("click", function () {
    $hoTen.val("Nguyễn Văn A");
    $email.val("ten@example.com");
    $loai.val("gop-y");
    $noiDung.val("Mong Ban tổ chức bổ sung thêm khung giờ nghỉ giữa các hội thi để các đội kịp chuẩn bị.");
    $dongY.prop("checked", true);
    $form.find(".is-invalid").removeClass("is-invalid");
    $form.find(".invalid-feedback").text("");
    capNhatDem();
  });

  $("#nut-dat-lai-lien-he").on("click", function () {
    $form[0].reset();
    $form.find(".is-invalid").removeClass("is-invalid");
    $form.find(".invalid-feedback").text("");
    $thongBao.attr("class", "").empty();
    $tomTat.html(TOM_TAT_MAC_DINH);
    capNhatDem();
  });

  capNhatDem();
});