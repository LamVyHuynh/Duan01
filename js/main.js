// Chuyển slide tự động trong banner
let index = 1;
const totalSlide = 3;
let time = 3000;

setInterval(() => {
  document.getElementById(`slider${index}`).checked = true;
  index = (index % totalSlide) + 1;
}, time);
// Kết thúc chuyển slide tự động trong banner

// Hiện frame đăng ký, đăng nhập
const dki = document.querySelector(".btn_dangki");
const close = document.querySelector(".icon-close");
const dki_dnhap = document.querySelector("#dki_dnhap");
dki.addEventListener("click", function () {
  dki_dnhap.classList.remove("close");
});

close.addEventListener("click", function () {
  dki_dnhap.classList.add("close");
});
// Kết thúc hiện frame đăng ký, đăng nhập
