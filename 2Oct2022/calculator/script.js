// var input = document.getElementById("input");
function getHistory(){
    return document.getElementById("history-value").innerText;
}

// alert(getHistory())

function printHistory(num) {
    return document.getElementById("history-value").innerText = num;
}
// alert(printHistory(23553));

function getInput() {
  return document.getElementById("input-value").innerText;
}

// alert(getInput())

function printinput(num) {
  return (document.getElementById("input-value").innerText = num);
}
// alert(printinput(23553));


var operator = document.getElementsByClassName("operator");
// console.log(operator);

for (var i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function () {
        // alert(this.id);
        if (this.id == "clear") {
            printHistory("");
            printinput("");
        } else if (this.id == "backspace") {
            var input = getInput().toString();
            // console.log("******",input);
            if (input) {
                var input = input.substring(0, input.length - 1);
                // console.log(input);
                printinput(input)
            }
        } else {
            var input = getInput();
            var history1 = getHistory();
            if (input != "" || history1 != "") {
                history1 = history1 + input;
                if (this.id == "=") {
                    var result = eval(history1);
                    printinput(result);
                    printHistory("")
                } else {
                    history1 = history1 + this.id;
                    printHistory(history1);
                    printinput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++){
    number[i].addEventListener("click", function () {
        // alert(this.id);
        var input = getInput();
        if (input != NaN) {
            input = input + this.id;
            printinput(input);
        }
    })
}


