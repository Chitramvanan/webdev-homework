let form = document.querySelector("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let date = document.querySelector("#date");
var item;
if (document.querySelector('div [class="form-check"]')) {
  document.querySelectorAll('div [class="form-check"]').forEach((elem) => {
    elem.addEventListener("change", function (event) {
      item = event.target.value;
    });
  });
}
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  console.log(form.elements[3].type);
  console.log("=================Form Submission==============");

  if (
    form.elements.username.value.length == 0 &&
    form.elements.email.value.length == 0 &&
    form.elements.password.value.length == 0 &&
    item == undefined &&
    form.elements.date.value.length == 0
  ) {
    console.log("You must enter some data to submit this form");
  } else {
    if (form.elements.username.value.length == 0) {
      console.log("Username: No submission");
    } else {
      console.log("Username:", form.elements.username.value);
    }
    if (form.elements.email.value.length == 0) {
      console.log("Email: No submission");
    } else {
      console.log("Email:", form.elements.email.value);
    }
    if (form.elements.password.value.length == 0) {
      console.log("Password: No submission");
    } else {
      console.log("Password:", form.elements.password.value);
    }
    if (item == undefined) {
      console.log("Newsletter: No submission");
    } else {
      console.log("Newsletter:", item);
    }
    if (form.elements.date.value.length == 0) {
      console.log("Date: No submission");
    } else {
      console.log("Date:", form.elements.date.value);
    }
  }
}
