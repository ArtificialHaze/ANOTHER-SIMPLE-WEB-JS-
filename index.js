const navItems = document.querySelector("#nav__items");
const openBtn = document.querySelector("#open__nav-btn");
const closeBtn = document.querySelector("#close__nav-btn");

openBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

const closeNavbar = () => {
  navItems.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};

closeBtn.addEventListener("click", closeNavbar);

if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav__items li a").forEach((navItem) => {
    navItem.addEventListener("click", () => {
      closeNavbar();
    });
  });
}

window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scroll", window.scrollY > 0);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
