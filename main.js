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

golfScore(5, 4);

// Switch case construction

function caseInSwitch(val) {
   let answer = "";
   switch (val) {
      case 1:
         answer = 'alpha';
         break;
      case 2:
         answer = 'beta';
         break;
      case 3:
         answer = 'gamma';
         break;
      case 4:
         answer = 'delta';
         break;
   }
   return answer;
}
console.log(caseInSwitch(2));