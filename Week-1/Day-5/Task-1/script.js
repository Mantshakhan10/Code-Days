// Change text color
function changeColor(color) {
  document.getElementById("myText").style.color = color;
}

// Change font family
function changeFont() {
  let selectedFont = document.getElementById("fontSelect").value;
  document.getElementById("myText").style.fontFamily = selectedFont;
}

// Font size change
let size = 22;

function increaseSize() {
  size += 2;
  document.getElementById("myText").style.fontSize = size + "px";
}

function decreaseSize() {
  size -= 2;
  if (size < 10) size = 10;
  document.getElementById("myText").style.fontSize = size + "px";
}

// Mouseover styles
function boldText() {
  document.getElementById("myText").style.fontWeight = "bold";
}

function italicText() {
  document.getElementById("myText").style.fontStyle = "italic";
}

function underlineText() {
  document.getElementById("myText").style.textDecoration = "underline";
}

// Reset to normal on mouseout
function normalStyle() {
  document.getElementById("myText").style.fontWeight = "normal";
  document.getElementById("myText").style.fontStyle = "normal";
  document.getElementById("myText").style.textDecoration = "none";
}
