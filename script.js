function loadComponents() {
  // NAV
  fetch("/components/nav.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("nav").innerHTML = data;
      initAll(); // navbar, search, hamburger
    });

  // FOOTER
  fetch("/components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
}

/* =========================================================
   NAVBAR & MOBILE UI SCRIPT
   ========================================================= */

/* ---------- NAVBAR HIDE ON SCROLL (DESKTOP ONLY) ---------- */
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth > 768) {
      if (currentScroll > lastScrollTop && currentScroll > 80) {
        // scroll down
        navbar.classList.add("hide");
      } else {
        // scroll up
        navbar.classList.remove("hide");
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    } else {
      // mobile: navbar selalu tampil
      navbar.classList.remove("hide");
    }
  });
}

/* ---------- MOBILE SEARCH TOGGLE ---------- */
function initMobileSearch() {
  const searchBtn = document.getElementById("searchToggle");
  const searchForm = document.querySelector(".mobile-search-form");
  const searchInput = searchForm?.querySelector("input");

  if (!searchBtn || !searchForm || !searchInput) return;

  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");

    if (searchForm.classList.contains("active")) {
      searchInput.focus();
    } else {
      searchInput.value = "";
    }
  });
}

/* ---------- HAMBURGER MENU ---------- */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenuOverlay");
  const icon = document.getElementById("menuIcon");

  if (!menuBtn || !menu || !icon) return;

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();

    menu.classList.toggle("active");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });
}

/* ---------- SHOP DROPDOWN (MOBILE) ---------- */
function initShopDropdown() {
  const shopLink = document.querySelector(".mobile-shop-link");
  const dropdown = document.getElementById("mobileShopDropdown");

  if (!shopLink || !dropdown) return;

  let isOpen = false;

  shopLink.addEventListener("click", (e) => {
    e.preventDefault();

    isOpen = !isOpen;
    dropdown.classList.toggle("active", isOpen);
  });
}

/* ---------- INIT ALL AFTER NAV LOADED ---------- */
function initAll() {
  initNavbar();
  initMobileSearch();
  initMobileMenu();
  initShopDropdown();
}
