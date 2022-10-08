// console.log("Hello DigiKull!!!");


// var name = "global";  //global scope variable
// function scopeDemo() {
//     // var name = "function name variable";   //function scope variable
//     console.log(name);
// }

// scopeDemo();
// console.log(name);


// var a;
// console.log(a);




// function c() {
//     console.log("c");
// }
// function b() {
//     c();
//     console.log("b");
// }
// function a() {
//     b();
//     console.log("a");
// }
// a();
// console.log("Global");
// var out = 10;


// function outer() {
//     var out = 10;
//     function inner() {
//         var inn = 100;
//         console.log(out);
//     }
//     inner();
//     console.log(inn);
// }
// outer();

// var a = 10;


//fuction expression

// var factorial = function (a,b) {
//     console.log(a+b);
// };

// factorial(2, 3);
// console.log(factorial);


//higher order function
// var fatorial = function (n) {
//     var ans = 1;
//     for (var i = 1; i <= n; i++) {
//         ans = ans * i;
//     }
//     return ans;
// };

// function ncr(n, r, fatorial) {
//   return fatorial(n) / (fatorial(r) * fatorial(n - r));
// }


// console.log(ncr(5, 2, fatorial));


//hoisting concept
// console.log(i);
// var i = 10;

//js will convert this code like this:-
// var i;
// console.log(i);
// i = 10;


// for each method
// var arr = [10, 20, 30, 40, 50, 60, 70];
// arr.forEach(function print(elements) {
//     console.log(elements);
// });

// function print(elemets) {
//     console.log(elemets);
// }


// var i;
// console.log(i);



// demo();
// function demo() {
//     console.log("hello");
// }

// var p = {
//   0: "value1",
//   b: "value2",
//   key: "value3",
// };

// for (var key of Object.keys(p)) {
//   console.log(key + " -> " + p[key]);
// }


var student = {
    name: "abc",
    rollNo:2
}

for (var prop in student) {
    console.log(prop + "->" + student[prop]);
}




































