const container = document.querySelector("#container");

// iterate to create a loop of divs to get 16x16
for (let i = 1; i < 17 * 17; i++) {
  const divs = document.createElement("div");
  container.appendChild(divs);
}

container.addEventListener("mousemove", (e) => {
  let log = document.querySelector("#log");
  log.innerText = `
            Screen X/Y: (${e.screenX}, ${e.screenY})
            Client X/Y: (${e.clientX}, ${e.clientY})`;
});
