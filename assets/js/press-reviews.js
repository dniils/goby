const tabLinks = document.querySelectorAll(".press__link");
const tabQuotes = document.querySelectorAll(".press__quote");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  const linkTarget = el.currentTarget;
  const company = linkTarget.dataset.company;

  // Remove class .acvite for all links
  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  // Remove class .acvite for all quotes
  tabQuotes.forEach(function (el) {
    el.classList.remove("active");
  });

  // Add class .active to the targeted link
  linkTarget.classList.add("active");

  // Add class .active to element with the same id as the link's data-attribute
  document.getElementById(company).classList.add("active");
}
