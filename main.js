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