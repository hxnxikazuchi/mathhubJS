"use strict";

const myName = "Ruslan";

const COLOR_RED = "#F00";

let myNumber = 20;
console.log(myNumber);
myNumber = 100.67;
console.log(myNumber);
console.log(1 / 0);
console.log("ruslan" / 2);

const myBigInt = 10000000000000000000000000000000n;
console.log(myBigInt);

const yourName = "Ruslan";
const yourAge = "22";
const yourTotalInfo = `${yourName} is ${100 - 56} years old`;
console.log(yourTotalInfo);

const isOld = false;
const isYoung = true;

console.log(isOld, isYoung);

const myData = null;

console.log(myData);

let myPlane;
console.log(myPlane);

let mySymbol = Symbol("id");

const obj = {
  name: "Ruslan",
  age: 22,
  isOld: true,
};

console.log(typeof 5);
console.log(typeof "Ruslan");
console.log(typeof true);
console.log(typeof 10n);
console.log(typeof Symbol('myId'));
console.log(typeof null);
console.log(typeof Math);
console.log(typeof alert);

let value = true;
console.log(typeof value);

value = value + "";
console.log(typeof value);

let myBigNumber = "100";
console.log(typeof myBigNumber);

myBigNumber = +myBigNumber;

console.log(typeof myBigNumber);

let a = +5;
let b = 5 + 10;

console.log(5 % 2);
console.log(5 / 2);
console.log(5 * 2);
console.log(5 + 2);
console.log(5 - 2);
console.log(5 ** 2);

let myString = "you" + " " + "me";
console.log(myString);

console.log("5" + 2);
console.log(2 + "5");
console.log(4 - "haha");
console.log((5 + 5) * 2);

let n = 2;
n = n + 5;
console.log(n);

n += 5;
n -= 5;
n *= 5;
n /= 5;
console.log(n);

console.log(5 > 3);
console.log(5 < 3);
console.log(5 == 5);
console.log(5 != 6);

console.log("abc" < "aef");
console.log("abc" > "def");

console.log("" === 0);
console.log("4s" > 3);
console.log('' == false);

console.log(null == undefined);
console.log(null >= 0);
console.log(null == 0);

const age = prompt("how old are you", "6");

if (age < 18) {
  console.log("you are too young");
} else if (age == 22) {
  console.log("the same as me");
} else if (age == 23) {
  console.log("ok let's go");
} else {
  console.log("come in");
}

let accessAllowed = age > 18 ? "come in" : "go home";

console.log(accessAllowed);

// &&(и), ||(или), !(не), ??

let hour = 12;
let isWeekend = true;
let minute = 30;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("office is closed");
}

let result = "" || 0 || "Hello";

console.log(result);

if (hour == 12 && minute == 30) {
  console.log("Time is 12:30");
}

console.log(null || 2 && 3 || 4);
console.log(null || 0 || 4);

console.log(!0);

console.log(0 || 5);
console.log(0 ?? 5);
let ourName = "Ruslan";
console.log(ourName ?? "Anonyme");
