const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "You Clicked me!! ❤️";
  setTimeout(() => {
    btn.textContent = "Press me";
  }, 1000);
});

const favoriteColorForm = document.getElementById("favoriteColorForm");
const favoriteColors = favoriteColorForm.elements;

favoriteColorForm.addEventListener("change", () => {
  for (let i = 0; i < favoriteColors.length; i++) {
    if (favoriteColors[i].name === "firstColor") {
      favoriteColorForm.style.backgroundColor = favoriteColors[i].value;
    }
  }
});
