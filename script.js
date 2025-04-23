const sketchWindow = document.getElementById("sketchWindow");
const sketchWindowWidth = sketchWindow.clientWidth;
let gridSize = 16; // number of squares per row or column
const pixelCount = gridSize * gridSize;
const pixelLength = sketchWindowWidth / gridSize;

for (i = 0; i < pixelCount; i++) {
  const pixel = document.createElement("div");
  pixel.style.width = `${pixelLength}px`;
  pixel.style.height = `${pixelLength}px`;
  pixel.style.border = "1px solid black";
  pixel.classList.add("pixel");
  sketchWindow.appendChild(pixel);
}
