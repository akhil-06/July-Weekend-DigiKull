// //Strings
// // var name = "Hello World";
// // console.log(name);
// //  01234
// var text1 = "Hello";
// var text2 = "DigiKull";
// var result = `The full name will be ${text1} ${text2}`;

// // console.log(text1);
// // console.log(text2);
// // console.log(result);

// // console.log(text1[0]);
// // console.log(text1.charAt(3));

// // console.log(text2[3]);
// // console.log(text2.charAt(1));

// // console.log(result[19]);
// // console.log(result.charAt(33));

// // text1[0] = "h";
// // console.log(text1);

// //case sensative
// // var a = 'a';
// // var b = 'A';
// // console.log(a === b);

// // var ans = text1 + text2;
// // console.log(ans);

// var text3 = "This is a session on";

// console.log(text3);
// console.log(text3.length);

// var text4 = new String("Digikull web development session");
// console.log(text4);

// console.log(typeof text3);
// console.log(typeof text4);

// console.log(text3.concat(' ', text4));
// console.log(text3.toUpperCase());
// console.log(text3.toLowerCase());
// // console.log(text3.trim());
// // console.log(text3.split());
// //slice, substring, substr
// console.log(text3.slice(3, 10));

// var num = 404;
// var bool = true;
// var result1 = String(num);
// var result2 = String(bool);

// console.log(typeof result1);
// console.log(typeof result2);

// //   'Digikull'
// //\"", \n, \v, \t,\b
// var result4 = 'My name is \"Digikull"\.';
// console.log(result4);
//replace, includes, serach and so on..

//OBJECTS
var student = {
  name: "Akhil",
  designation: "SDE1",
};

//for in loop
// to study about for of loop
// for (var prop in student) {
//     console.log(prop + "-> " + student[prop]);
// }

// var keys = Object.keys(student);
// console.log(keys);

// var keys1 = Object.getOwnPropertyNames(student);
// console.log(keys1);
// console.log(student);

var student = {
  name: "Aditya",
  designation: "Developer",
  contactNumber: 1234567890,
  address: {
    city: "Shimla",
    state: "Himachal pardesh",
    pinCode: 127564,
    country: {
      name: "India",
      location: "south",
      famousPlaces: "10 places",
    },
  },
};

console.log(student.address.country["name"]);
// make a company structure in form of objects

var obj = {
  p1: 10,
};

var obj2 = obj;

console.log(obj2 === obj);    //false
console.log(obj2 == obj);    //
console.log(obj);
console.log(obj2);