const container = document.querySelector("#container");
const gridButton = document.querySelector(".grid-btn");
const resetButton = document.querySelector(".reset-btn");

function createGrid(size) {
  container.innerHTML = "";

  const cellSize = `calc(100% / ${size})`;

  for (let i = 0; i < size * size; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cellDiv");
    cellDiv.style.width = cellSize;
    cellDiv.style.height = cellSize;
    cellDiv.addEventListener("mouseover", () => {
      const randomColor = getRandomColor();
      cellDiv.classList.add("etched");
      cellDiv.style.backgroundColor = randomColor;
      cellDiv.style.opacity = "90%";
    });
    container.appendChild(cellDiv);
  }
}

function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function getRandomColor() {
  const r = getRandomNumber(256);
  const g = getRandomNumber(256);
  const b = getRandomNumber(256);
  return `rgb(${r},${g},${b})`;
}

gridButton.addEventListener("click", () => {
  let userInput = Number(prompt("Enter grid size 1-100:"));
  if (userInput > 100 || !userInput) {
    alert("Invalid input you need to input 1-100");
  } else {
    createGrid(userInput);
  }
});

resetButton.addEventListener("click", () => {});
