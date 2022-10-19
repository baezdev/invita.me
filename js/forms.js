import validator from "validator";
// ---
const btnShowPass = document.querySelector(".show__pass");
const passwordInput = document.querySelector("[name=password]");

const showPassword = () => {
  btnShowPass.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showPassword();
});

const form = document.querySelector("form");
const formInputs = document.querySelectorAll(".form__input-container");

const validateForm = ({ target }) => {
  if (validator.isEmpty(target.value)) {
    showError(target, "El campo no puede estar vacío");
  } else {
    deleteError(target);
  }

  switch (target.name) {
    case "email":
      if (!validator.isEmail(target.value)) {
        showError(target, "Eso no parece un correo electrónico");
      } else {
        deleteError(target);
      }
      break;
    case "password":
      if (!validator.isStrongPassword(target.value, { minSymbols: 0 })) {
        showError(target, "Al menos 8 caracteres, una minúscula y un número");
      } else {
        deleteError(target);
      }
      break;

    default:
      break;
  }
};

const showError = (element, message) => {
  const formInput = element.parentElement;
  const formInputContainer = element.parentElement.parentElement;
  formInput.classList.add("form__input-error");
  formInputContainer.children[1].innerText = message;
};

const deleteError = (element) => {
  const formInput = element.parentElement;
  const formInputContainer = element.parentElement.parentElement;
  formInput.classList.remove("form__input-error");
  formInputContainer.children[1].innerText = "";
};

formInputs.forEach((input) => {
  input.addEventListener("blur", validateForm);
  input.addEventListener("keyup", validateForm);
});
