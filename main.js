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