// Header stickey

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header-main");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
