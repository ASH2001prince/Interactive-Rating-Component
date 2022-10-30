const btn = document.getElementById("btn");
const firstCard = document.querySelector(".card.first");
const secondCard = document.querySelector(".card.second");
const valueS = document.querySelector(".value");
const ratingInputs = document.querySelectorAll(".input");
const wrongMassege = document.querySelector(".wrong");
let finalValue;

//

ratingInputs.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.querySelector(".input.orange")?.classList.remove("orange");
    e.target.classList.add("orange");
    finalValue = e.target.textContent;
  });
});
btn.addEventListener("click", () => {
  if (!finalValue) {
    wrongMassege.style.visibility = "visible";
    return false;
  } else {
    valueS.textContent = finalValue;
    secondCard.style.display = "flex";
    firstCard.style.display = "none";
  }
});
