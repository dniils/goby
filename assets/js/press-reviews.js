const tabLinks = document.querySelectorAll(".press__link");
const tabQuotes = document.querySelectorAll(".press__quote");

tabLinks.forEach((el, index) => {
  el.addEventListener("click", function openTab() {
    tabLinks.forEach((link) => link.classList.remove("active"));
    tabQuotes.forEach((quote) => quote.classList.remove("active"));

    el.classList.add("active");
    tabQuotes[index].classList.add("active");
  });
});
