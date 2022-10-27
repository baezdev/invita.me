export const showError = (element, message) => {
  const formInput = element.parentElement;
  const formInputContainer = element.parentElement.parentElement;
  formInput.classList.remove("form__input-success");
  formInput.classList.add("form__input-error");
  formInputContainer.children[1].innerText = message;
};

export const deleteError = (element) => {
  const formInput = element.parentElement;
  const formInputContainer = element.parentElement.parentElement;
  formInput.classList.remove("form__input-error");
  formInput.classList.add("form__input-success");
  formInputContainer.children[1].innerText = "";
};

export const createModal = (contentMessage, type = "error") => {
  if (document.querySelector(".modal")) {
    return;
  }

  const body = document.querySelector("body");
  const message = document.createElement("span");
  message.classList.add(
    "modal",
    type === "error" ? "modal__error" : "modal__success"
  );
  message.innerText = contentMessage;
  body.appendChild(message);
  setTimeout(() => {
    body.removeChild(message);
  }, 4000);
  console.log(message);
};
