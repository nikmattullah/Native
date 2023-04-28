const navbarNav = document.querySelector(".navbar-nav");

//ketika hamberger di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan navbar

const hamberger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
