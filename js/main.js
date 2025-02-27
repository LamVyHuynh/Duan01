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
const closeFrame = document.querySelector(".icon-close");
const dki_dnhap = document.querySelector("#dki_dnhap");
const frameDki = document.querySelector(".js_frame-dki");

// Hàm mở khung đăng kí tài khoản
function open_dki() {
  dki_dnhap.classList.remove("close");
}

dki.addEventListener("click", open_dki);

// Hàm đóng khung đăng kí tài khoản
function close_dki() {
  dki_dnhap.classList.add("close");
}

closeFrame.addEventListener("click", close_dki);
dki_dnhap.addEventListener("click", close_dki);

// Không cho nổ bọt bấm bên ngoài thì close nhưng vào bên trong khung thì không close
frameDki.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Kết thúc hiện frame đăng ký, đăng nhập
