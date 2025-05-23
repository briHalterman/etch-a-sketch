let gridSize = 16; // number of squares per row or column

const createEtchASketch = (gridSize) => {
  const sketchWindow = document.getElementById("sketchWindow");
  const sketchWindowWidth = sketchWindow.clientWidth;
  const pixelCount = gridSize * gridSize;
  const pixelLength = sketchWindowWidth / gridSize;

  sketchWindow.replaceChildren();

  for (i = 0; i < pixelCount; i++) {
    const pixel = document.createElement("div");
    pixel.style.width = `${pixelLength}px`;
    pixel.style.height = `${pixelLength}px`;
    pixel.classList.add("pixel");
    sketchWindow.appendChild(pixel);

    pixel.addEventListener("mouseenter", () => {
      pixel.style.backgroundColor = "#2E242D";
    });
  }
};

createEtchASketch(gridSize);

document.getElementById("resize").addEventListener("click", () => {
  gridSize = prompt("Twist the knob! How many 'pixels' per side?");

  while (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    gridSize = prompt("Please choose a number between 1 and 100");
  }

  createEtchASketch(gridSize);
});

document.getElementById("reset").addEventListener("click", () => {
  createEtchASketch(gridSize);
});

window.addEventListener("resize", () => {
  createEtchASketch(gridSize);
});
