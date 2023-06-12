let result = document.querySelector("#result");
let clearBtn = document.querySelector(".clearBtn");
let inputBtn = document.querySelectorAll(".inputBtn");
let BackSpace = document.querySelector(".BackSpace");
let resultBtn = document.querySelector(".resultBtn");

inputBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    result.value += btn.value;
  });
});
let clearResult = () => {
  result.value = "";
};
clearBtn.addEventListener("click", clearResult);
clearBtn.addEventListener("dbclick", clearResult);
BackSpace.addEventListener("click", () => {
  let resultValue = result.value;
  resultValue = resultValue.split("");
  resultValue = resultValue.slice(0, resultValue.length - 1);
  resultValue = resultValue.join("");
  result.value = resultValue;
});

// calculation
resultBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let resultValue = eval(result.value);
  resultValue = Number.isInteger(resultValue)
    ? resultValue
    : resultValue.toPrecision(14);
  if (resultValue.toString().length > 14) {
    result.value = resultValue.toPrecision(14);
  } else {
    result.value = resultValue;
  }
});
