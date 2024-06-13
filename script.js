const contactForm = document.getElementsByClassName("contact-form")[0];
const nameInput = document.getElementById("nameinput");
const emailInput = document.getElementById("emailinput");

contactForm.addEventListener("submit", formValidation);
function addError(element, message) {
  let nextElement = element.nextElementSibling;
  nextElement.innerHTML = message;

  nextElement.classList.add("error");
}
function removeError(element) {
  let nextElement = element.nextElementSibling;
  nextElement.innerHTML = "";

  nextElement.classList.remove("error");
}
function formValidation(e) {
  e.preventDefault();

  //  Name  validation //
  if (nameInput.value === "" || nameInput.value === undefined) {
    addError(nameInput, "Please enter a name");
    return;
  } else {
    removeError(nameInput);
  }

  // Email validation //
  if (emailInput.value === "" || emailInput.value === undefined) {
    addError(emailInput, "Please enter an email address");
    return;
  } else {
    removeError(emailInput);
  }

  contactForm.reset();
}
