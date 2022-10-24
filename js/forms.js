import validator from "validator";

import { createModal, deleteError, showError } from "./helpers/message";
import { loginWithEmail, registerNewUser } from "./auth/signIn";
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

/* Validacion del formulario de registro y el inicion de sesion */
const formLogin = document.querySelector("#login");
const formRegister = document.querySelector("#register");
const formInputs = document.querySelectorAll(".form__input-container");
const values = {};
const validFields = {
  email: false,
  password: false,
  name: false,
};

const validateForm = ({ target }) => {
  if (!validator.isEmpty(target.value)) {
    values[target.name] = target.value;

    switch (target.name) {
      case "email":
        if (!validator.isEmail(target.value)) {
          showError(target, "Eso no parece un correo electrónico");
          validFields[target.name] = false;
        } else {
          deleteError(target);
          validFields[target.name] = true;
        }
        break;
      case "password":
        if (!validator.isStrongPassword(target.value, { minSymbols: 0 })) {
          showError(target, "Al menos 8 caracteres, una minúscula y un número");
          validFields[target.name] = false;
        } else {
          deleteError(target);
          validFields[target.name] = true;
        }
        break;
      case "name":
        if (!validator.isAlpha(target.value, "es-ES", { ignore: "-'s" })) {
          showError(target, "Eso no parece un nombre");
          validFields[target.name] = false;
        } else {
          deleteError(target);
          validFields[target.name] = true;
        }
        break;
    }
  } else {
    showError(target, "El campo no puede estar vacío");
    validFields[target.name] = false;
  }
};

formInputs.forEach((input) => {
  input.addEventListener("blur", validateForm);
  input.addEventListener("keyup", validateForm);
});

//Pagina de Inicion de sesion
formLogin?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validFields.email || !validFields.password) {
    createModal("Algo anda mal, revisa tus datos");
    return;
  }
  loginWithEmail(values.email, values.password).then((data) => {
    if (data.error) {
      createModal(
        data.error.message === "Invalid login credentials" &&
          "Credenciales de acceso inválidas"
      );
      return;
    }
    window.location.href = "/";
  });
});

//Pagina de registro
formRegister?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validFields.name || !validFields.email || !validFields.password) {
    createModal("Algo anda mal, revisa tus datos");
    return;
  }

  registerNewUser(values.email, values.password, values.name).then((data) => {
    if (data.error) {
      createModal(
        data.error.message === "User already registered" &&
          "Usuario ya registrado"
      );
      return;
    }
    createModal("Te has registrado correctamente, Redirigiendo... ", "success");
    setTimeout(() => {
      window.location.href = "/";
    }, 4500);
  });
});
