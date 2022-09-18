let buttonLeanMore = document.querySelector(
  "#ada .ada__info-box .ada__learn-more"
);
let info = document.querySelector("#ada .ada__info-box .ada__add-info");

let learnMorePlus = document.querySelector(
  "#ada .ada__info-box .ada__learn-more .ada__button"
);
let learnMoreText = document.querySelector(
  "#ada .ada__info-box .ada__learn-more .ada__button-text"
);

buttonLeanMore.onclick = function () {
  info.classList.toggle("hidden");

  if (learnMorePlus.textContent === "+") {
    learnMorePlus.textContent = "x";
    learnMoreText.textContent = "Close";
  } else {
    learnMorePlus.textContent = "+";
    learnMoreText.textContent = "Learn more";
  }
};

/*
document
  .querySelector("#ada .ada__info-box .ada__learn-more")
  .addEventListener("click", () =>
    document
      .querySelector("#ada .ada__info-box .ada__add-info")
      .classList.toggle("hidden")
  );
*/
