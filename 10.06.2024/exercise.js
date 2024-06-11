const email = document.getElementById("exampleFormControlInput1");
const email_error = document.getElementById("email_error");
const fullname = document.getElementById("fullname");
const fullname_error = document.getElementById("fullname_error");
const password = document.getElementById("inputPassword5");
const password_error = document.getElementById("password_error");
const phonenum = document.getElementById("phonenum");
const phonenum_error = document.getElementById("phonenum_error");
const form = document.getElementById("form");
const submit = document.getElementById("submitt");
const cpassword = document.getElementById("cpassword");
const cpassword_error = document.getElementById("cpassword_error");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  // email
  let emailinput = email.value;
  let validate = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let validateresult = validate.test(emailinput);
  if (validateresult) {
    email_error.innerHTML = "valid";
  } else {
    email_error.innerHTML = "not valid";
  }

  // fullname
  let fullnameinput = fullname.value;
  let validate1 = /^[a-z ,.'-]+$/i;
  let validateresult1 = validate1.test(fullnameinput);
  if (validateresult1) {
    fullname_error.innerHTML = "valid";
  } else {
    fullname_error.innerHTML = "not valid";
  }

  // phone number
  let phonenuminput = phonenum.value;
  let validate2 = /^077\d{7}$/;
  let validateresult2 = validate2.test(phonenuminput);
  if (validateresult2) {
    phonenum_error.innerHTML = "valid";
  } else {
    phonenum_error.innerHTML = "not valid";
  }

  // password
  let passwordinput = password.value;
  let validate3 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&()])[A-Za-z\d!@#$%^&()]{6,18}$/;
  let validateresult3 = validate3.test(passwordinput);
  if (validateresult3) {
    password_error.innerHTML = "valid";
  } else {
    password_error.innerHTML = "not valid";
  }

  // confirm password
  if (cpassword.value == password.value) {
    cpassword_error.innerHTML = "valid";
  } else {
    cpassword_error.innerHTML = "not valid";
  }

  // check all validations before redirecting
  if (email_error.innerHTML === "valid" &&
      fullname_error.innerHTML === "valid" &&
      phonenum_error.innerHTML === "valid" &&
      password_error.innerHTML === "valid" &&
      cpassword_error.innerHTML === "valid") {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("fullname", fullname.value);
    window.location.href = "page2.html";
  }
  
});
    

