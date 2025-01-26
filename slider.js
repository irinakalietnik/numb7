const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1,
    },
    1280: { slidesPerView: 1 },
  },
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination-button-active",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
