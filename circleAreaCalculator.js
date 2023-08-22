// Prompt the user to enter their first name
var firstName = prompt("Please enter your first name:");

// Create the constant piValue
const pi = Math.PI;

// Prompt user to enter their favorite number
var favNumber = parseFloat(prompt("What is your favorite number?"));

// Using the user's favorite number for the radius, calculate the area of a circle
var theArea = Math.PI * Math.pow(favNumber, 2);

// Print results to the console
var results = "Hello " + firstName + ", you entered " + favNumber + " as your favorite number. If that was the radius of a circle, the circle's area would be " + theArea.toFixed(6) + ".";
document.write("<p>" + results + "</p>");
