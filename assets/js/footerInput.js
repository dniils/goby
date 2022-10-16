const inputBox = document.querySelector("input");
const inputButton = document.querySelector(".button_input");

const showButton = function (event) {
  //   console.log(event);
  //   console.log(event.target.value);

  if (event.target.value) {
    inputButton.classList.add("active");
  } else {
    inputButton.classList.remove("active");
  }
};

inputBox.addEventListener("input", showButton);
