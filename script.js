var a = 5;
var b = 6;
var c = 6;
var d = 4;
var theNumbersMatch;
var operatorMatch;


// Playing around with logical operator

/*
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
*/
a == b ? console.log("Match") : console.log("No match");
