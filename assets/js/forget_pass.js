
let continueBtn = document.querySelector(".footer .continue-btn");
let emailForgetPassPage = document.getElementById("old-email");
continueBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(emailForgetPassPage.value === localStorage.getItem("email")) {
    setTimeout(() => {
      window.location = "new_pass.html";
    }, 1000);
  } else {
    alert("This email not valid");
  }

});