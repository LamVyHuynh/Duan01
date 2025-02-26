// Chuyển slide tự động trong banner
let index = 1;
const totalSlide = 3;
let time = 3000;

setInterval(() => {
  document.getElementById(`slider${index}`).checked = true;
  index = (index % totalSlide) + 1;
}, time);
// Kết thúc chuyển slide tự động trong banner
