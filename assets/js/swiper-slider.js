// Initialize
const swiper = new Swiper(".reviews-slider", {
  mousewheel: {},
  autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
