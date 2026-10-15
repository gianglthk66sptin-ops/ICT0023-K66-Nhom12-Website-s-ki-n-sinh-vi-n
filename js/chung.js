(function () {
  const hienThi = document.getElementById("demnguoc");
  if (hienThi === null) {
    return;
  }

  const moc = new Date(hienThi.dataset.thoiDiem);   // đọc từ thuộc tính data-thoi-diem
  if (Number.isNaN(moc.getTime())) {
    hienThi.textContent = "Chưa có thời điểm khai mạc hợp lệ.";
    return;
  }

  let boDem;
  function capNhat() {
    const conLai = moc.getTime() - Date.now();
    if (conLai <= 0) {
      hienThi.textContent = "Lễ khai mạc đã diễn ra.";
      clearInterval(boDem);
      return;
    }
    const giay = Math.floor(conLai / 1000);
    const ngay = Math.floor(giay / 86400);
    const gio = Math.floor((giay % 86400) / 3600);
    const phut = Math.floor((giay % 3600) / 60);
    hienThi.textContent = "Còn " + ngay + " ngày " + gio + " giờ " + phut + " phút " + (giay % 60) + " giây";
  }
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
  capNhat();
  boDem = setInterval(capNhat, 1000);
})();
