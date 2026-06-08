let count = 0;
let increment = 1;

const counter = document.getElementById("counter");
const powerButton = document.getElementById("powerButton");
const incButtons = document.querySelectorAll(".inc-btn");
const buttonWrapper = document.querySelector(".button-wrapper");

powerButton.addEventListener("click", () => {
  count += increment;
  counter.textContent = count;

  const aura = document.createElement("span");
  aura.classList.add("aura");
  buttonWrapper.appendChild(aura);

  setTimeout(() => {
    aura.remove();
  }, 600);
});

incButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    incButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    increment = parseInt(btn.getAttribute("data-inc"));
  });
});