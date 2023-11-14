// Regester User

let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let fullName = document.getElementById("fullName");
let address = document.getElementById("address");
let phoneNumber = document.getElementById("phone");
let city = document.getElementById("country");
let gender = document.getElementById("gender");
let image = document.getElementById("image");
let signUpBtn = document.getElementById("sign-up");

// localStorage.clear();

// sign up clicked
signUpBtn.addEventListener("click", function (e) {
  // email regex
  const regex = /\w+@[a-z]+\.[a-z]{2,3}/;
  e.preventDefault();
  // check empty field
  if (
    userName.value === "" ||
    email.value === "" ||
    password.value === "" ||
    fullName.value === "" ||
    address.value === "" ||
    phoneNumber.value === ""
  ) {
    alert("Please Fill Data");
  } else {
    // check email regex
    if (!regex.test(email.value)) {
      alert("please Enter Valid Email");
    } else if (password.value.length < 8) {
      alert("Please Enter Password with at least 8 character");
    } else if (isNaN(phoneNumber.value)) {
      alert("please Enter Only Number In Phone Number");
    } else {
      // save inputs values
      localStorage.setItem("username", userName.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
      localStorage.setItem("fullname", fullName.value);
      localStorage.setItem("address", address.value);
      localStorage.setItem("phonenumber", phoneNumber.value);
      localStorage.setItem("city", city.value);
      localStorage.setItem("gender", gender.value);
      if(image.value === ""){
        
      } else {
        
        localStorage.setItem("image", image.value);
      }

      // Open Active landing Page of user
      setTimeout(() => {
        window.location = "login.html";
      }, 1500);
    }
  }
});



// ======== showing password confirmation ========

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  
  togglePassword.classList.toggle("fa-eye-slash");
  togglePassword.classList.toggle("fa-eye");
});
