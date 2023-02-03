// Double char

function doubleChar(str) {
   let result = "";
   let i = 0;
   while (i < str.length) {
      result = `${result}${str[i]}${str[i]}`;
      i++;
   }
   return result;
}
console.log(doubleChar("Artem"));

// MakeUpperCase

function makeUpperCase(str) {
   let result = str.toUpperCase();
   return str;
}
console.log(makeUpperCase("important"));

//Convert a string to an array

function stringToArray(string) {
   let result = string.split(" ");
   return result;
}

console.log(stringToArray("It is a really important task"));

// Convert a Number to a String!

function numberToString(num) {
   let result = String(num);
   return result;
}

// Even or Odd

console.log(numberToString(1234));

function evenOrOdd(number) {
   let result = "";
   if (number % 2 === 0) {
      result = "Even";
   } else {
      result = "Odd";
   }
   return result;
}

console.log(evenOrOdd(21));

// Returning Strings with name

function greet(name) {
   let result = `Hello, ${name} how are you doing today?`;
   return result;
}

console.log(greet("Artem"));


// Golf Score
function golfScore(par, strokes) {
   // Only change code below this line
   let result = "";
   if (par == 4 && strokes == 1 || par == 1 && strokes == 1) {
      result = "Hole-in-one!";
   } else if (par == 4 && strokes == 2 || par == 5 && strokes == 2) {
      result = "Eagle";
   } else if (par == 4 && strokes == 3) {
      result = "Birdie";
   } else if (par == 4 && strokes == 4 || par == 5 && strokes == 5) {
      result = "Par";
   } else if (par == 4 && strokes == 5) {
      result = "Bogey";
   } else if (par == 4 && strokes == 6) {
      result = "Double Bogey";
   } else if (par == 4 && strokes == 7 || par == 5 && strokes == 9) {
      result = "Go Home!";
   }
   return result;
   // Only change code above this line
}

console.log(golfScore(5, 4));

// Switch case

function switchOfStuff(val) {
   let answer = "";
   switch (val) {
      case 'a':
         answer = 'apple';
         break;
      case 'b':
         answer = 'bird';
         break;
      case 'c':
         answer = 'cat';
         break;
      default:
         answer = 'stuff';
         break;
   }
   return answer;
}

console.log(switchOfStuff(1));

// Switch Case without breaks

function sequentialSizes(val) {
   let answer = "";
   switch (val) {
      case 1:
      case 2:
      case 3:
         answer = 'Low';
         break;
      case 4:
      case 5:
      case 6:
         answer = 'Mid';
         break;
      case 7:
      case 8:
      case 9:
         answer = 'High';
         break;
   }
   return answer;
}

sequentialSizes(1);


//Casino play

let count = 0;

function cc(card) {
   switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
         count--;
         break;
   }
   let holdBet = 'Hold';
   if (count > 0) {
      holdBet = 'Bet';
   }
   return count + ' ' + holdBet;
}

// Using Objects for Lookups

function phoneticLookup(val) {
   let result = "";
   const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
      '': undefined,
   };
   result = lookup[val];
   return result;
}

// Getting property from object
function checkObj(obj, checkProp) {
   obj = {
      'gift': "pony",
      'pet': "kitten",
      'bed': "sleigh",
      'city': "Seattle",
   };
   if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
   } else {
      return 'Not Found';
   }
}

// Vowel Count

function getCount(str) {
   let result = 0;
   let i = 0;
   while (i < str.length) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
         result++;
      }
      i++;
   }
   return result;
}

// Exes and Ohs

function XO(str) {
   let x = str.match(/x/gi);
   let o = str.match(/o/gi);
   if (x !== null) {
      x = x.length;
   } else {
      x = 0;
   }
   if (o !== null) {
      o = o.length;
   } else {
      o = 0;
   }
   return x === o;
}

// Transportation on vacation

function rentalCarCost(d) {
   let result;
   let moneyPerDay = 40;
   if (d <= 2) {
      result = d * moneyPerDay;
   } else if (d >= 7) {
      result = d * moneyPerDay - 50;
   } else {
      result = d * moneyPerDay - 20;
   }
   return result;
}

//  Calculate BMI

function bmi(weight, height) {
   let bmiResult = weight / (height ** 2);
   if (bmiResult <= 18.5) {
      result = "Underweight";
   } else if (bmiResult <= 25.0) {
      result = "Normal";
   } else if (bmiResult <= 30.0) {
      result = "Overweight";
   } else {
      result = "Obese";
   }
   return result;
}

// Update Lights
function updateLight(current) {
   let result;
   if (current === "green") {
      result = "yellow";
   } else if (current === "yellow") {
      result = 'red';
   } else if (current === 'red') {
      result = 'green';
   }
   return result;
}

// finalGrade

function finalGrade(exam, projects) {
   let result;
   if (exam > 90 && projects > 10) {
      result = 100;
   } else if (exam > 75 && projects >= 5) {
      result = 90;
   } else if (exam > 50 && projects >= 2) {
      result = 75;
   } else {
      result = 0;
   }
   return result;
}
console.log(finalGrade(75, 6));

// Switch it Up!

function switchItUp(number) {
   let result;
   switch (number) {
      case 0:
         result = 'Zero';
         break;
      case 1:
         result = 'One';
         break;
      case 2:
         result = 'Two';
         break;
      case 3:
         result = 'Three';
         break;
      case 4:
         result = 'Four';
         break;
      case 5:
         result = 'Five';
         break;
      case 6:
         result = 'Six';
         break;
      case 7:
         result = 'Seven';
         break;
      case 8:
         result = 'Eight';
         break;
      case 9:
         result = 'Nine';
         break;
   }
   return result;
}

// Will there be enough space?

function enough(cap, on, wait) {
   let result = 0;
   let leftSpace = cap - on;
   if (leftSpace >= wait) {
      return result;
   } else if (leftSpace < wait) {
      return result = wait - leftSpace;
   }
}

// Third Angle of a Triangle


function otherAngle(a, b) {
   return 180 - (a + b);
}

// L1: Set Alarm

function setAlarm(employed, vacation) {
   let result;
   if (employed === true && vacation === false) {
      result = true;
   } else {
      result = false;
   }
   return result;
}

//You only need one - Beginner

function check(a, x) {
   let result = a.includes(x);
   return result;
}

//Parse nice int from char problem

function getAge(inputString) {
   let result = Number(inputString[0]);
   return result;
}

// Reverse String

function solution(str) {
   let splitStr = str.split('');
   let reverseStr = splitStr.reverse();
   let joinStr = reverseStr.join('');
   return joinStr;
}
console.log(solution('world'));

// Even or Odd

function evenOrOdd(number) {
   let result = number % 2 === 0 ? 'Even' : 'Odd';
   return result;
}

// Counting sheep..

function countSheeps(arrayOfSheep) {
   let result = arrayOfSheep.filter(x => x === true).length;
   return result;
}

// Is n divisible by x and y?

function isDivisible(n, x, y) {
   let resultX = n / x;
   let resultY = n / y;
   let result;
   if (resultX % 1 === 0 && resultY % 1 === 0) {
      result = true;
   } else {
      result = false;
   }
   return result;
}

// Return Negative

function makeNegative(num) {
   let result;
   if (num > 0) {
      result = num * (-1);
   } else if (num === 0) {
      result = 0;
   } else {
      return num;
   }
   return result;
}

// Find the smallest integer in the array

class SmallestIntegerFinder {
   findSmallestInt(args) {
      let result = Math.min(...args);
      return result;
   }
}

// Grasshopper - Summation

const summation = function (num) {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum = sum + i;
   }
   return sum;
};


// Add average number from array
function getAverage(marks) {
   let sum = 0;
   let result;
   let averageOfSum;
   sum = marks.reduce((a, b) => a + b, 1);
   averageOfSum = sum / marks.length;
   result = Math.floor(averageOfSum);
   return result;
}


// Rock Paper Scissors!


const rps = (p1, p2) => {
   if (p1 === p2) {
      return "Draw!";
   }
   let rules = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
   };
   if (p2 === rules[p1]) {
      return 'Player 1 won!';
   } else {
      return 'Player 2 won!';
   }
};

// Remove First and Last Character

function removeChar(str) {
   let lastCharIndex = str.length - 1;
   let result = str.slice(1, lastCharIndex);
   return result;
}

// Make Math operations
function basicOp(operation, value1, value2) {
   let result;
   switch (operation) {
      case '+':
         result = value1 + value2;
         break;
      case '-':
         result = value1 - value2;
         break;
      case '/':
         result = value1 / value2;
         break;
      case '*':
         result = value1 * value2;
         break;
   }
   return result;
}

// Repeat string n times

function repeatStr(n, s) {
   let result = '';
   for (let i = 0; i < n; i++) {
      result += s;
   }
   return result;
}

// Double all numbers in array
function maps(x) {
   let result;
   result = x.map(x => x * 2);
   return result;
}

//Is he gonna survive?

function hero(bullets, dragons) {
   let result;
   result = bullets >= dragons * 2;
   return result;
}

// Array plus array

function arrayPlusArray(arr1, arr2) {
   let sumArr1 = arr1.reduce((a, b) => a + b);
   let sumArr2 = arr2.reduce((a, b) => a + b);
   let result = sumArr1 + sumArr2;
   return result;
}

//Century From Year

function century(year) {
   let result = Math.ceil(year / 100);
   return result;
}

//Cat years, Dog years

var humanYearsCatYearsDogYears = function (humanYears) {
   let catYears;
   let dogYears;
   if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
   } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
   } else {
      catYears = 24 + 4 * (humanYears - 2);
      dogYears = 24 + 5 * (humanYears - 2);
   }
   return [humanYears, catYears, dogYears];
};


// Calculate points from array

function points(games) {
   let result = 0;
   for (let i = 0; i < games.length; i++) {
      let currentGame = games[i];
      let splitCurrentGame = currentGame.split(':');
      if (+splitCurrentGame[0] > +splitCurrentGame[1]) {
         result += 3;
      } else if (+splitCurrentGame[0] === +splitCurrentGame[1]) {
         result += 1;
      }
   }
   return result;
}

// My first callback function

function myCallBack(someNumber) {
   return someNumber * 2;
}
function mainFunction(randomNumber, shouldCall, callback) {
   let result = randomNumber; // In this example result === 20
   // In this example, shouldCall is true, so we do reach the callback
   if (shouldCall) {
      // In this example callback represents myCallBack from above
      result = callback(randomNumber);
   }
   // Since result was reassigned by the callback function return 40
   return result;
}
console.log(mainFunction(20, true, myCallBack));

// Add all numbers in array
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
   total += myArr[i];
}

//Multiply all products in arrays
function multiplyAll(arr) {
   let product = 1;
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
         product *= arr[i][j];
      }
   }
   return product;
}

// My first do.. while loop
const myArray = [];
let i = 10;
do {
   myArray.push(i);
   i++;
} while (i < 10);

// Loops using Recursion

function sum(arr, n) {
   if (n <= 0) {
      return 0;
   } else {
      return sum(arr, n - 1) + arr[n - 1];
   }
}

// Find the first non-consecutive number

function firstNonConsecutive(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
      const currentNumber = arr[i];
      const nextNumber = arr[i + 1];
      if (currentNumber + 1 !== nextNumber) {
         return nextNumber;
      }
   }
   return null;
}

// Return only even numbers in array

function noOdds(values) {
   let result = [];
   for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
         result.push(values[i]);
      }
   }
   return result;
}

console.log(noOdds([0, 1, 2, 3]));


// Filtering numbers from array with callback
function filter_list(numArr) {
   return numArr.filter(arrItem => {
      return arrItem >= 0 && typeof arrItem === 'number';
   });
}

// Return values that isn`t in both arrays

function arrayDiff(a, b) {
   if (a.length === 0) {
      return [];
   }
   if (b.length === 0) {
      return a;
   }
   let newA = a;
   let newB = b;
   a.forEach((arrItem, arrIndex) => {

      const aCopy = newA.slice();
      const bCopy = newB.slice();
      if (b.includes(arrItem)) {
         newA = aCopy.filter(item => item !== arrItem);
         newB = bCopy.filter(item => item !== arrItem);
      }
   });
   return newA;
}

//Divide and add every digit from number until it lefts one digit
function persistence(num) {
   if (num < 10) {
      return 0;
   }

   const strVersion = num.toString();
   const arrVersion = strVersion.split('');
   const multiplicationValue = arrVersion.reduce((accum, num) => accum *= num);

   if (multiplicationValue >= 10) {
      return 1 + persistence(multiplicationValue);
   } else {
      return 1;
   }
}

// Test valid pin code

function validatePIN(pin) {
   const fourDigitsRegex = /(^[0-9]{4}$)/;
   const sixDigitsRegex = /(^[0-9]{6}$)/;
   if (pin.match(fourDigitsRegex) || pin.match(sixDigitsRegex)) {
      return true;
   } else {
      return false;
   }
}

// Count lower case letters in string

function lowercaseCount(str) {
   let count = 0;
   let desireLetters = /[a-z]/g;
   for (let i = 0; i < str.length; i++) {
      if (str[i].match(desireLetters)) {
         count++;
      }
   }
   return count;
}

// Upper case letters for two strings

function capitalize(s) {
   const arr1 = s.split('');
   const arr2 = s.split('');
   let res1 = '';
   let res2 = '';
   arr1.forEach((item, index, original) => {
      if (index % 2 === 0) {
         original[index] = item.toUpperCase();
      }
   });
   arr2.forEach((item, index, original) => {
      if (index % 2 !== 0) {
         original[index] = item.toUpperCase();
      }
   });
   res1 = arr1.join('');
   res2 = arr2.join('');
   return [res1, res2];
}

/*
Description:
After you've solved @priyankaherur's problem ( http://www.codewars.com/kata/this-is-a-problem/javascript ) you may try to solve this other one.
The problem:
Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".
If, for example, we've got a "NamedOne" like this :
var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
...properties may be changed :
namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
...but all properties are not updated !
namedOne.fullName  // -> "Naomi Wang" 
//-- Oh no ! we want fullName == "John Doe" now !
Your mission:
So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.
If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.
Examples:
var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"
// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"
// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
Can you change our function to create such a NamedOne object ?
( Hint: in this kata you'll try to define properties of an object )
*/
class NamedOne {
   constructor(f, l) { this.firstName = f; this.lastName = l }
   get fullName() { return this.firstName + ' ' + this.lastName }
   set fullName(v) { if (/ /.test(v)) [this.firstName, this.lastName] = v.split(' ') }
}

/*
Description:
In a previous kata ( http://www.codewars.com/kata/547f1a8d4a437abdf800055c ) we try to create an object with mutable properties.
The function NamedOne taken first & last names as parameters, returned an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties. These properties were mutable.
For example, with a "NamedOne" like this :
var namedOne = new NamedOne("Naomi","Wang")
namedOne.fullName  // -> "Naomi Wang"
...we were able to change its properties:
namedOne.firstName = "John" 
namedOne.lastName = "Doe"
namedOne.fullName  // -> "John Doe" 
//..or..
namedOne.fullName = "Bill Smith"
namedOne.firstName // -> "Bill" 
namedOne.lastName // -> "Smith"
##Your mission
On the contrary, the purpose of this kata is to create an OnceNamedOne object with immutable properties.
That means .firstName, .lastName and .fullName are defined into the Constructor and can't be no more changed.
The properties are still readable using the dot or bracket notation but there're not writable.
##Examples:
var onceNamed = new OnceNamedOne("Naomi","Wang")
// ...then...
onceNamed.firstName // -> "Naomi"
onceNamed.lastName  // -> "Wang"
onceNamed.fullName // -> "Naomi Wang"
// ...if you try : ...
onceNamed.firstName = "Bill"
// ...or...
onceNamed['lastName'] = "Smith"
// ...then...
onceNamed['firstName'] // -> "Naomi"
onceNamed['lastName']  // -> "Wang"
onceNamed['fullName'] // -> "Naomi Wang"
// ..but you can still create other instances..
var otherOne = new OnceNamedOne("Don","Jones")
otherOne.fullName // -> "Don Jones"
Can you change our function to create such a OnceNamedOne object ?
( Hint: in this kata you'll try to define properties of an object )
*/
function OnceNamedOne(first, last) {
   this.firstName = first;
   this.lastName = last;
   this.fullName = this.firstName + ' ' + this.lastName;
   Object.freeze(this);
}

/*
Description:
Getting Familiar: LEET: (sometimes written as "1337" or "l33t"), also known as eleet or leetspeak, is another alphabet for the English language that is used mostly on the internet. It uses various combinations of ASCII characters to replace Latinate letters. For example, leet spellings of the word leet include 1337 and l33t; eleet may be spelled 31337 or 3l33t.
GREEK: The Greek alphabet has been used to write the Greek language since the 8th century BC. It was derived from the earlier Phoenician alphabet, and was the first alphabetic script to have distinct letters for vowels as well as consonants. It is the ancestor of the Latin and Cyrillic scripts.Apart from its use in writing the Greek language, both in its ancient and its modern forms, the Greek alphabet today also serves as a source of technical symbols and labels in many domains of mathematics, science and other fields.
Your Task :
You have to create a function **GrεεκL33t** which    
takes a string as input and returns it in the form of 
(L33T+Grεεκ)Case.
Note: The letters which are not being converted in 
(L33T+Grεεκ)Case should be returned in the lowercase.
(L33T+Grεεκ)Case:
A=α (Alpha)      B=β (Beta)      D=δ (Delta)
E=ε (Epsilon)    I=ι (Iota)      K=κ (Kappa)
N=η (Eta)        O=θ (Theta)     P=ρ (Rho)
R=π (Pi)         T=τ (Tau)       U=μ (Mu)      
V=υ (Upsilon)    W=ω (Omega)     X=χ (Chi)
Y=γ (Gamma)
Examples:
GrεεκL33t("CodeWars") = "cθδεωαπs"
GrεεκL33t("Kata") = "κατα"
*/
function GrεεκL33t(str) {
   let dict = {
      a: 'α', b: 'β', d: 'δ', e: 'ε', i: 'ι', k: 'κ', n: 'η', o: 'θ', p: 'ρ', r: 'π', t: 'τ', u: 'μ',
      v: 'υ', w: 'ω', x: 'χ', y: 'γ'
   }
   return str.replace(/./g, v => {
      if (dict[v.toLowerCase()]) {
         return v === v.toUpperCase() ? dict[v.toLowerCase()] : dict[v];
      }
      return v.toLowerCase();
   });
}