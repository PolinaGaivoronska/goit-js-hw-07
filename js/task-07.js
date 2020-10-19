const fontSizeRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
const fontSizeChange = function () {
  console.log(fontSizeRange.value);
  spanText.style.fontSize = `${fontSizeRange.value}px`;
};
spanText.style.fontSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", fontSizeChange);