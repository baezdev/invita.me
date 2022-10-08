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
