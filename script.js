const contactForm = document.getElementsByClassName("contact-form")[0];
const nameInput = document.getElementById("nameinput");
const emailInput = document.getElementById("emailinput");

contactForm.addEventListener("submit", formValidation);

function formValidation(e) {
  e.preventDefault();
  if (
    nameInput.value === "" ||
    nameInput.value === null ||
    nameInput.value === undefined
  ) {
    nameInput.value = "Please enter a name";
    nameInput.classList.add("is-active");

    return;
  } else {
    nameInput.value = nameInput.value;
    nameInput.classList.remove("is-active");
  }
  if (
    emailInput.value === "" ||
    emailInput.value === null ||
    emailInput.value === undefined
  ) {
    emailInput.value = "Please enter an email address";
    emailInput.classList.add("is-active");

    return;
  } else {
    emailInput.value = emailInput.value;
    emailInput.classList.remove("is-active");
  }
  contactForm.reset();
}
