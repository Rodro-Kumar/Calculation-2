// todo: take 2 input number & return 6 function

const addition = (a, b) => {
  const addResult = a + b;
  const addReturn = { result: addResult, funName: "addition" }; //* Object
  return addReturn;
};

const subtraction = (a, b) => {
  const subResult = a - b;
  const subReturn = { result: subResult, funName: "subtraction" }; //* Object
  return subReturn;
};

const multiplication = (a, b) => {
  const multiResult = a * b;
  const multiReturn = { result: multiResult, funName: "multiplication" }; //* Object
  return multiReturn;
};

const exponentiation = (a, b) => {
  const expoResult = a ** b;
  const expoReturn = { result: expoResult, funName: "exponentiation" }; //* Object
  return expoReturn;
};

const division = (a, b) => {
  const divResult = a / b;
  const divReturn = { result: divResult, funName: "division" }; //* Object
  return divReturn;
};

const modulus = (a, b) => {
  const modulResult = a % b;
  const modulReturn = { result: modulResult, funName: "modulus" }; //* Object
  return modulReturn;
};

const allFunction = [
  addition,
  subtraction,
  multiplication,
  exponentiation,
  division,
  modulus,
];

const inputFirstValue = document.getElementById("value1");
const inputSecondValue = document.getElementById("value2");
const btn = document.getElementById("btn");
const display = document.getElementById("display");

btn.addEventListener("click", () => {
  const firstValue = +inputFirstValue.value;
  const secoundValue = +inputSecondValue.value;

  for (let i = 0; i < allFunction.length; i++) {
    const finalResult = allFunction[i](firstValue, secoundValue);

    if (finalResult.funName === "addition") {
      display.innerHTML += `The Addition Result is :  ${finalResult.result} <br>`;
    } else if (finalResult.funName === "subtraction") {
      display.innerHTML += `The Subtraction Result is : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "multiplication") {
      display.innerHTML += `The Multiplication Result is : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "exponentiation") {
      display.innerHTML += `The Exponentiation Result is : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "division") {
      display.innerHTML += `The Division Result is : ${finalResult.result} <br>`;
    } else if (finalResult.funName === "modulus") {
      display.innerHTML += `The Modulus Result is : ${finalResult.result} <br>`;
    }
  }
});
