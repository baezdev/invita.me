import { getUserLogged } from "../auth/getUser";

const botonWA = document.querySelector(".contact__button");
botonWA.addEventListener("click", () => {
  window.open("https://api.whatsapp.com/send?phone=525611268833");
});

//Si hay usuario loggeado los imputs de contacto se llenan automaticamente
const assignValuesContactForm = async () => {
  const inputName = document.querySelector("#name");
  const inputEmail = document.querySelector("#email");

  const infoUser = await getUserLogged();

  if (!infoUser) {
    inputName.value = "";
    inputEmail.value = "";
    return;
  }

  inputName.value = infoUser?.name;
  inputEmail.value = infoUser?.email;
};

assignValuesContactForm();
