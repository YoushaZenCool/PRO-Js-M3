//Pracite with lets, objects, bracket notations and closures

// Lets make it streamlined and clear. This is a tricky do this again.
//Put the code below to make the function an anonymous function.
//var findBiggestFraction = function
function findBiggestFraction(a, b) {
  a>b ?
  result = ["firstFraction", a] : result = ["secondFraction", b]
  return result;
}

var firstFraction = 3/5;
var secondFraction = 8/9;
var fractionResult = findBiggestFraction(firstFraction,secondFraction);

findBiggestFraction(8/9, 11/12);
// Don't use the comma sign in codes to combine things because Safari puts a dash instead of a space.

console.log("First fraction result: " + firstFraction);
console.log("Second fraction result: " + secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");

// Adding Arguments
/*
function findBiggestFraction(firstFraction, secondFraction) {
  firstFraction > secondFraction ?
  console.log( "firstFraction: " + firstFraction.toFixed(3) + " is bigger than " + "secondFraction: " + secondFraction + ".") :
  console.log("secondFraction: " + secondFraction.toFixed(3) + " is bigger than " + "firstFraction: " + firstFraction + ".");
}

var firstFraction;
var secondFraction;
findBiggestFraction(8/9, 11/12);
*/

/*
 if (a>b) {
  console.log(a.toFixed(3) + " is bigger than " + b + ".")
 } else {
  console.log(b.toFixed(3) + " is bigger than " + a + ".")
 }

*/

// Lets make it shorter.
/*
function findBiggestFraction() {
  //console.log("The function is running!");
  a > b ? console.log(a.toFixed(3) + " is bigger than " + b + ".") : console.log(b.toFixed(3) + " is bigger than " + a + ".");
}

var a = 3 / 4;
var b = 5 / 6;
findBiggestFraction();
*/

//Playing with Arrays
/*
var pens;
pens = ["red", "green", "blue", "black"]
//We use the console.log to explain to yourself what you just did in a clear way in the console. Now you don't need to go back to the code.
console.log("These are the colours of my pens: " + pens.join(", ") + ".");
*/

// Playing around with logical operator
/*
var theNumbersMatch;
var operatorMatch;
var a = 4;
var b = 6;
var c = 6;
var d = 6;
if ( a === b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);
*/
/*
if (a == b && c == d) {
  operatorMatch = true;
} else {
  operatorMatch = false;
}
*/
/*
if ((a == b || c == d) && ( (a == b) != (c == d) ) ) {
  operatorMatch = true;
} else {
  operatorMatch = false;
}
console.log(operatorMatch);
*/

//Playing with ternary operator
/*
if (a == b) {
  console.log("Match")
} else {
  console.log ("No match")
}

(a == b || c == d) && ( (a == b) != (c == d) ) ? console.log("Match") : console.log("No match");
*/
