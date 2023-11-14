let button = document.querySelector("button");
let inputs = document.querySelectorAll("input");

window.addEventListener("load", () => {
  inputs[0].focus()
})

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    let currentInput = input;
    let nextInput = input.nextElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = currentInput.value.slice(1);
    }

    if(nextInput !== null && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    input.addEventListener("keyup", (e) => {
      if(e.key === "Backspace") {
        if(input.previousElementSibling !== null) { 
          e.target.value = "";
          e.target.setAttribute("disabled", true);
          input.previousElementSibling.focus();
        }
      }
    })
  })
})