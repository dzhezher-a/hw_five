const userFirstNumber = parseFloat(prompt("Enter the first number: "));
const userSecondNumber = parseFloat(prompt("Enter the second number: "));
const userThirdNumber = parseFloat(prompt("Enter the third number: "));

const sum = userFirstNumber + userSecondNumber + userThirdNumber;

if (isNaN(sum) || sum == null) {
  alert("Error: one of the numbers is invalid");
} else {
  const avg = sum / 3;

  alert(`The arithmetic mean of these numbers is ${avg} `);
}
