var toolbar = document.getElementById("toolBar");
var nav = document.querySelector(".nav");
nav.classList.add("dp_none");

toolbar.onclick = function () {
  nav.classList.toggle("dp_none");
};
