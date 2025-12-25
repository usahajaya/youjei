// sembunyikan navbar saat scroll
let lastScrollTopDesktop = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener(
  "scroll",
  function () {
    if (window.innerWidth > 768) {
      // hanya desktop
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st < lastScrollTopDesktop) {
        // Scroll ke atas: sembunyikan navbar
        navbar && navbar.classList.remove("hide");
      } else {
        // Scroll ke bawah: tampilkan navbar
        navbar && navbar.classList.add("hide");
      }
      lastScrollTopDesktop = st <= 0 ? 0 : st;
    } else {
      // Pastikan navbar selalu tampil di mobile
      navbar && navbar.classList.remove("hide");
    }
  },
  false
);