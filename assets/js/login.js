let email = document.getElementById("email");
let password = document.getElementById("password");
let signInBtn = document.getElementById("signIn");

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

let remember = document.getElementById("remember");
let mail = document.getElementById("email");
let pass = document.getElementById("pass");
// email regex
let regex = /\w+@[a-z]+\.[a-z]{2,3}/;

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // check empty field
  if (email.value === "" || password.value === "") {
    alert("Please Fill Data");
  } else {
    // check email regex
    if (!regex.test(email.value)) {
      alert("please Enter Valid Email");
    } else if (password.value.length < 8) {
      alert("Please Enter Password with at least 8 character");
    } else if (
      getEmail &&
      email.value.trim() === getEmail.trim() &&
      getPassword &&
      password.value === getPassword
    ) {
      // Open Active landing Page of user
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      alert("Email or Password is Wrong");
    }
  }
});

rememberMe();

// Remember Me function

function rememberMe() {
  remember.addEventListener("click", () => {
    if (email.value !== "" && password.value !== "") {
      if (!regex.test(email.value)) {
        alert("Please Enter Valid Email");
      } else if (password.value.length < 8) {
        alert("Please Enter Password with at least 8 characters");
      } else {
        let prevState = remember.classList.contains("active");
        remember.classList.toggle("active");
        if (remember.classList.contains("active")) {
          localStorage.setItem("pass", pass.value);
          localStorage.setItem("mail", mail.value);
        } else {
          localStorage.removeItem("pass");
          localStorage.removeItem("mail");
        }
        if (prevState !== remember.classList.contains("active")) {
          console.log("Checkbox state changed");
          remember.classList.remove("active");
        } else {
          remember.classList.add("active");
          console.log("Checkbox state unchanged");
        }
      }
    } else {
      localStorage.removeItem("pass");
      localStorage.removeItem("mail");
      alert(
        "Fill Data Before Asking Remember and Reset remember Value Checked"
      );
    }
  });
}


// ======== showing password confirmation ========

let passwordInput = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  let type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  
  togglePassword.classList.toggle("fa-eye-slash");
  togglePassword.classList.toggle("fa-eye");
});


// Forget Password

let forgetBtn = document.querySelector(".forget");

forgetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  setTimeout(() => {
    window.location = "forget_pass.html";
  }, 1000);
});