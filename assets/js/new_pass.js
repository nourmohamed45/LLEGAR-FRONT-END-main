// ======== Start showing password confirmation ========

const passwordInputs = document.querySelectorAll(".password");
const togglePasswords = document.querySelectorAll("#togglePassword");

togglePasswords.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    const type = passwordInputs[index].getAttribute("type") === "password" ? "text" : "password";
    passwordInputs[index].setAttribute("type", type);
    
    toggle.classList.toggle("fa-eye-slash");
    toggle.classList.toggle("fa-eye");
  });
});

// ======== End showing password confirmation ========


// Create a new password

const generateBtn = document.querySelector(".gen-new-pass");
let newPasswordInput = document.getElementById("newPassword");
let confirmPasswordInput = document.getElementById("confirmPassword")
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(newPasswordInput.value === confirmPasswordInput.value) {
    localStorage.setItem("password", confirmPasswordInput.value);
    setTimeout(() => {
      window.location = "index.html";
    }, 1000);
  } else {
    alert("Passwords do not match");
  }
});