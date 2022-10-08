var current = "square";

var shape = [
  "square",
  "rectangle",
  "circle",
  "oval",
  "triangle-up",
  "triangle-down",
  "triangle-topleft",
  "triangle-bottomleft",
  "triangle-right",
  "triangle-bottomright",
  "parallelogram",
];
// console.log(shape);

var color = ["red", "green", "cyan", "orange", "black", "Gold", "voilet", "pink", "maroon", "brown", "GreenYellow"];

var x = document.getElementById("shape");
// console.log(x);
x.onclick = function () {
    var random = shape[Math.floor(Math.random() * shape.length)];
    // console.log(random);
  document.getElementById(current).setAttribute("id", random);
  current = random;
}

var x1 = document.getElementById("color");
// console.log(x);
x1.onclick = function () {
  var randomColor = color[Math.floor(Math.random() * color.length)];
  // console.log(random);
  document.getElementById("block").style.backgroundColor = randomColor;
  // current = randomColor;
};



















