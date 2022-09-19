// find a better soluton...

let btnNY = document.querySelector(".press__links .press__link");
let btnCH = document.querySelectorAll(".press__links .press__link")[1];
let btnBI = document.querySelectorAll(".press__links .press__link")[2];

let contentNY = document.querySelector(".press__quotes .press__quote");
let contentCH = document.querySelectorAll(".press__quotes .press__quote")[1];
let contentBI = document.querySelectorAll(".press__quotes .press__quote")[2];

let nyFunction = function () {
  contentNY.className = "press__quote active";
  contentCH.className = "press__quote";
  contentBI.className = "press__quote";

  btnNY.className = "press__link active";
  btnCH.className = "press__link";
  btnBI.className = "press__link";
};

let chFunction = function () {
  contentNY.className = "press__quote";
  contentCH.className = "press__quote active";
  contentBI.className = "press__quote";

  btnNY.className = "press__link";
  btnCH.className = "press__link active";
  btnBI.className = "press__link";
};

let biFunction = function () {
  contentNY.className = "press__quote";
  contentCH.className = "press__quote";
  contentBI.className = "press__quote active";

  btnNY.className = "press__link";
  btnCH.className = "press__link";
  btnBI.className = "press__link active";
};

btnNY.onclick = nyFunction;
btnCH.onclick = chFunction;
btnBI.onclick = biFunction;
