import editNav from "./nav.js";
import Modal from "./Class/Modal.js";
import Validator from "./Class/Validator.js";
import { formFields, fieldContainer } from "./formConfig.js";

window.editNav = editNav;

// initialize modal
Modal.launchModalEvent();

const validator = new Validator(fieldContainer, formFields);

const formName = document.getElementsByName("reserve")[0];

formName.onsubmit = (event) => {
  event.preventDefault();
  console.log("Salut");

  if (validator.launchValidation()) {
    formName.reset();
    Modal.validation();
  }
};
