//Challenge 1
var num1 = 45;
var num2 = 55;
var numResult = num1 + num2;

var str1 = "Hello, "
var str2 = "Matt!";
var strResult = str1 + str2;

console.log(numResult);
console.log(strResult);

//Challenge 2
var multArr = [
  ["JavaScript", "Module Patterns", "Object Orientated JavaScript"],
  ["Stranger Things", "The Punisher", "Mindhunter"]
]

console.log(multArr[0][1]);
console.log(multArr[1][0]);

//Challenge 3
var userNum = prompt("Enter a number");
var MAX_NUM = 100;

if (userNum <= MAX_NUM) {
  alert("Please enter a number higher than 100");
} else {
  alert("Your value is: " + userNum + ". Which is greater than " + MAX_NUM);
}

//Challenge 4
function sayName(name) {
  return "Hello " + name +"!";
}

sayName("Matt");

//Challenge 5
function secretPrize () {
  var userGuess = prompt("Please enter a number 1-3 for a prize.");
  var prize1 = "Your prize is good job for being you";
  var prize2 = "Congrats, on being you";
  var prize3 = "No prize bigger than just being you";

  switch(parseInt(userGuess)) {
    case 1:
      console.log(prize1);
      break;
    case 2:
      console.log(prize2);
      break;
    case 3:
      console.log(prize3);
      break;
    default:
      alert("Hey! Enter a number 1-3, ya jabrooni");
  }
};

secretPrize();
