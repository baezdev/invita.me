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
console.log(formInputs);

const validarCampo = (e) => {
  console.log("cambio");
};

formInputs.forEach((input) => {
  /* input.addEventListener("blur", validarCampo);
  input.addEventListener("keyup", validarCampo); */
  console.log(input);
});
