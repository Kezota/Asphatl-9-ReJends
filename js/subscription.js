document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.querySelector("#name");
  var nameError = document.querySelector(".name .error-message");

  var email = document.querySelector("#email");
  var emailError = document.querySelector(".email .error-message");

  var birthday = document.querySelector("#birthday");
  var birthdayError = document.querySelector(".birthday .error-message");

  var country = document.querySelector("#country");
  var countryError = document.querySelector(".country .error-message");

  var gender = document.querySelector('input[name="gender"]:checked');
  var genderError = document.querySelector(".gender .error-message");

  var terms = document.querySelector("#terms");
  var termsError = document.querySelector(".terms-conditions .error-message");

  var newsletter = document.querySelector("#newsletter");
  var newsletterError = document.querySelector(".newsletter .error-message");

  if (!name.value) {
    name.classList.add("error");
    nameError.textContent = "Name is required";
  } else {
    name.classList.remove("error");
    nameError.textContent = "";
  }

  if (!email.value) {
    email.classList.add("error");
    emailError.textContent = "Email is required";
  } else if (
    !(email.value.includes("@gmail") && email.value.includes(".com"))
  ) {
    email.classList.add("error");
    emailError.textContent = "Email is not valid";
  } else {
    email.classList.remove("error");
    emailError.textContent = "";
  }

  if (!birthday.value) {
    birthday.classList.add("error");
    birthdayError.textContent = "Birthday is required";
  } else {
    birthday.classList.remove("error");
    birthdayError.textContent = "";
  }

  if (!country.value) {
    country.classList.add("error");
    countryError.textContent = "Country is required";
  } else {
    country.classList.remove("error");
    countryError.textContent = "";
  }

  if (!gender) {
    document.querySelector(".gender").classList.add("error");
    genderError.textContent = "Gender is required";
  } else {
    document.querySelector(".gender").classList.remove("error");
    genderError.textContent = "";
  }

  if (!terms.checked) {
    terms.classList.add("error");
    termsError.textContent = "You must agree to the terms and conditions";
  } else {
    terms.classList.remove("error");
    termsError.textContent = "";
  }

  if (!newsletter.checked) {
    newsletter.classList.add("error");
    newsletterError.textContent = "You must agree to receive the newsletter";
  } else {
    newsletter.classList.remove("error");
    newsletterError.textContent = "";
  }
});
