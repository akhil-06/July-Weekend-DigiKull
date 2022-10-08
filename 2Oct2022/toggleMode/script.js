var toggled = false;

var htag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

var x = document.getElementById("toggle");

x.onclick = function () {
  if (!toggled) {
    console.log(toggled);
    htag.classList.add("color-white");
    bodyTag.classList.add("color-black");
    circle.style.marginLeft = "100px";
    toggled = true;
  } else {
    console.log(toggled);
    htag.classList.remove("color-white");
    bodyTag.classList.remove("color-black");
    circle.style.marginLeft = "1px";
    toggled = false;
  }
};
