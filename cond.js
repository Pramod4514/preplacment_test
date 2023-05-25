var userInput = prompt("Enter a number:");

var number = parseInt(userInput);

if (number > 0) {

  for (var i = 1; i <= number; i++) {
    console.log(i);
  }
} else {
  console.log("The number is not positive.");
}
