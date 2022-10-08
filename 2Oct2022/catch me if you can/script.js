var box = document.getElementById('box');

var viewwidth = window.innerWidth;
var viewHeight = window.innerHeight;

box.addEventListener("mouseover", function () {
    var boxAttr = box.getBoundingClientRect();
    console.log(boxAttr);
    var pos = getNewPosition(boxAttr.width, boxAttr.height);
    console.log(pos);

    box.style.top = pos.X + "px";
    box.style.left = pos.Y + "px";

});


function getNewPosition(boxWidth, boxHeight) {
    //the boxwidth and box height are substracted so that  they would not move out from the right and bottom direction
    var newX = Math.floor((Math.random() * viewHeight) - boxHeight);
    var newY = Math.floor((Math.random() * viewwidth) - boxWidth);

    // console.log(newX);
    // console.log(newY);

    //these lines will satisfy that box doesnt go out in top and left direction

    if (newX < 0) {
        newX = 0;
    }

    if (newY < 0) {
      newY = 0;
    }


    return {X:newX, Y:newY}
}















