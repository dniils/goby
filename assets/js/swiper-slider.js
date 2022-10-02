//tabs for sliders
const tabs = document.querySelectorAll(".reviews__tab");
const content = document.querySelectorAll(".reviews__content");

tabs.forEach((el, index) => {
  el.addEventListener("click", function openTab() {
    tabs.forEach((link) => link.classList.remove("active"));
    content.forEach((quote) => quote.classList.remove("active"));

    el.classList.add("active");
    content[index].classList.add("active");
  });
});

// Swiper
const swiper = new Swiper(".reviews-slider", {
  // mousewheel: {},
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
