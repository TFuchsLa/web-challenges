console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorOutput = document.querySelector(".error");
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  errorOutput.innerHTML = "";
  try {
    const result = operations[operation](firstNumber, secondNumber);
    console.log(
      `${firstNumber} ${operation} ${secondNumber} equals to ${result}`
    );
    output.innerHTML = result;
  } catch (error) {
    console.log("Please pass a number rather than 0 as divisor, thank you!");
    errorOutput.innerHTML = error.message;
    output.innerHTML = "";
  }
});
