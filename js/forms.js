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
const values = {};
const camposValidados = {};

const validateForm = ({ target }) => {
  if (!validator.isEmpty(target.value)) {
    values[target.name] = target.value;

    switch (target.name) {
      case "email":
        if (!validator.isEmail(target.value)) {
          showError(target, "Eso no parece un correo electrónico");
          camposValidados[target.name] = false
        } else {
          deleteError(target);
          camposValidados[target.name] = true
        }
        break;
      case "password":
        if (!validator.isStrongPassword(target.value, { minSymbols: 0 })) {
          showError(target, "Al menos 8 caracteres, una minúscula y un número");
          camposValidados[target.name] = false
        } else {
          deleteError(target);
          camposValidados[target.name] = true
        }
        break;
      case "name":
        if (!validator.isAlpha(target.value, "es-ES", { ignore: "-'s" })) {
          showError(target, "Eso no parece un nombre");
          camposValidados[target.name] = false
        } else {
          deleteError(target);
          camposValidados[target.name] = true
        }
        break;
    }
  } else {
    showError(target, "El campo no puede estar vacío");
  }
};

const showError = (element, message) => {
  const formInput = element.parentElement;
  const formInputContainer = element.parentElement.parentElement;
  formInput.classList.remove("form__input-success");
  formInput.classList.add("form__input-error");
  formInputContainer.children[1].innerText = message;
};

const deleteError = (element) => {
  const formInput = element.parentElement;
  const formInputContainer = element.parentElement.parentElement;
  formInput.classList.remove("form__input-error");
  formInput.classList.add("form__input-success");
  formInputContainer.children[1].innerText = "";
};

formInputs.forEach((input) => {
  input.addEventListener("blur", validateForm);
  input.addEventListener("keyup", validateForm);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(camposValidados);
});
