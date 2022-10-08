const btnEye = document.querySelector(".show__pass");
const passwordInput = document.querySelector("[name=password]");

const showPassword = () => {
  btnEye.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showPassword();
});
