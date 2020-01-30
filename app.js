// //   alert("hello js");
// console.log(4);
// console.error("this is error");
// console.warn("this is warning");
// //   variable in js are var let and const
// var age;
// //   variable declaration
// age = 20;
// console.log(age);
// //   datatypes in js
// // 1. primitive data types
// //  a. number
// var number = 10.1;
// console.log(number);
// console.log(typeof number);

// //  b. String
// var name = "ram";
// console.log(name);
// console.log(typeof name);

// var name1 = 20;
// console.log(name1);
// console.log(typeof name1);

// //   c. Undefined
// var person;
// console.log(person);
// console.log(typeof person);

// //   d. boolean
// var bool = true;
// console.log(bool);
// console.log(typeof bool);

// //   e. null
// var nul = null;
// console.log(nul);
// console.log(typeof null);

// //    f. symbol
// var sym = Symbol();
// console.log(sym);
// console.log(typeof sym);

// //    math object
// //   var value = Math.PI;
// //   value = Math.random();
// //   value = Math.round(2.5);
// //   value = Math.floor(Math.random() * 6);
// //   value = Math.ceil(2.3);
// //  value = Math.pow(2, 3);
// //   value = Math.abs(-2);
// //   value = Math.sqrt(16);
// //   value = Math.min(1, 2, 4, -5, -6);
// //   value = Math.max(1, 2, 4, -5, -6);
// //   prompt("enter your name");
// //   console.log(value);
// //   console.log(typeof value);
// //   var name1 = prompt("enter your name");
// //   console.log(name1);

// //   object literal in js

// var car = {
//   wheel: 4,
//   color: "white",
//   start: function() {}
// };
// console.log(car);
// console.log(car.wheel);
// console.log(typeof car);
// console.log(car.start());

// string concatenation in js
console.log("Hello" + "" + "js"); //old way
var str1 = "12";
var str2 = "world";
// console.log(str1 + num);
// console.log("2" + 2);

var str3 = str1.concat(str1);
console.log(str3);

// template literal
console.log(`${str1} ${str2} `);

// condition in js
var job = "Developer";
if (job == "designer") {
  console.log("he is designer");
} else {
  console.log("he is developer");
}

// var name1 = prompt("enter your marks");
// if (name1 == 40) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }

// var marks = prompt("enter your marks");
// if (marks < 60 && marks >= 40) {
//   console.log("pass");
// } else if (marks < 40 && marks >= 0) {
//   console.log("fail");
// } else {
//   console.log("error");
// }

var x = 5;
if (x == "5") {
  console.log(x);
}

// ternary operator
x == 5 ? console.log("5") : console.log("NAN");

// switch case
switch (x) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 5:
    console.log(5); //strict comparision whether it is number or string
    break;
  default:
    console.log("hello");
    break;
}

//loop in js
for (var i = 0; i < 5; i++) {
  console.log(i);
}

for (n = 10; n >= 1; n--) {
  console.log(n);
}

var j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

var a = 11;
do {
  console.log(a);
  a++;
} while (a < 10);

// function
function person(name, age) {
  console.log(`he is ${name}`);
  console.log(`Age is ${age}`);
}
person("hari", 20);

// var let and const, let and const=block scope
// var== functional scope
function loopdata() {
  for (let b = 0; b < 10; b++) {
    console.log(b);
  }
  // console.log(b);
}
loopdata();

// const user;
// user='hari';
// console.log(user);

//object literal in js
var user = {
  name: "ram",
  age: 20,
  hobbies: ["programming", "football", "reading"],
  address: {
    name: "ram",
    street: "tinkune",
    city: "ktm"
  }
};
user.name = "hari";
user.data = "hello";
console.log(user);
console.log(user.name);

//destructuring in js[es6]
const { city, street } = user.address;
console.log(city); //value is passed from above
console.log(street);

//number to string in js
let num = 25;
num = true;
console.log(num);
console.log(String(num));

//string to number in js
let str = "25";
console.log(str);
console.log(Number(str));
console.log(str * 1);

//truthy and falsy in js
console.log(true && 2 && "hello");
console.log(false && 2);
console.log(0 && "hello");
console.log("" && 2);
console.log(null && "hello");
console.log(undefined && "data");
console.log(NaN && 5);

//array in js
let arr = Array(1, 2, 3, 4);
arr.pop(); //remove last item
arr.push("hello"); //add to last index

console.log(arr);
console.log(arr[0]);

arr.unshift(2, 2, 2); //add  item to first index
arr.shift();
console.log(arr.indexOf("hello"));
//is array or not
console.log(Array.isArray("arr"));
console.log(Array.isArray(arr));
console.log(arr.length);

let contact = [
  { id: 1, name: "ram", phone: 6374863 },
  { id: 2, name: "ram", phone: 6374863 },
  { id: 3, name: "ram", phone: 6374863 }
];
//console.log(contact);
//console.log(contact[0]); //for first index

//for loop to display all at once

// for (let i = 0; i < contact.length; i++) {
//   console.log(contact[i]);
// }

//foreach array method
contact.forEach(function(contact, index, allArray) {
  ////console.log(index);
  console.log(allArray);
});

//map in js
let newcontact = contact.map(function(data, idx, allData) {
  console.log(data);
  console.log(idx);
  console.log(allData);
  return idx;
});
console.log(newcontact);

//filter in js
let filterData = contact.filter(function(contact) {
  return contact.id == 1;
});
console.log(filterData);
