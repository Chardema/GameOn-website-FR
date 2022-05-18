function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//exit popup
const closeBtn = document.querySelector(".close");
closeBtn.onclick = (e) => closeModal();

const closeModal = () => {
  modalbg.style.display = "none";
};
// on déclare le formulaire
let form = document.querySelector("#contactform");

// ***********************REGEXP prenom **********************************
form.first.addEventListener("change", function () {
  validFirst(this);
});

const validFirst = function (inputFirst) {
  let msg;
  let valid = false;
  // au moins 2 caractère
  if (inputFirst.value.length < 2) {
    msg = "Le prénom est trop court";
  } else {
    msg = "le prenom est correct !!!";
    valid = true;
  }
  //Affichage
  //Récupération de la balise Small
  let small = inputFirst.nextElementSibling;

  //on test l'expression régulière
  if (valid) {
    small.innerHTML = "OK 👨🏼‍💻";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
  }
};

// ***********************REGEXP NOM **********************************
form.last.addEventListener("change", function () {
  validLast(this);
});

const validLast = function (inputLast) {
  let msg;
  let valid = false;
  // au moins 2 caractère
  if (inputLast.value.length < 2) {
    msg = "Le Nom est trop court";
  } else {
    msg = "le Nom est correct !!!";
    valid = true;
  }
  //Affichage
  //Récupération de la balise Small
  let small = inputLast.nextElementSibling;

  //on test l'expression régulière
  if (valid) {
    small.innerHTML = "OK 👨🏼‍💻";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
  }
};

// ***********************REGEXP MAIL**********************************
form.email.addEventListener("change", function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g" // voir pk il accepete 2 @@
  );
  //on test la RegExp
  let testEmail = emailRegExp.test(inputEmail.value);
  let small = inputEmail.nextElementSibling;

  if (testEmail) {
    small.innerHTML = "Adresse valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHTML = "Adresse invalide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
  }
};
// ***********************REGEXP CONCOURS**********************************
form.quantity.addEventListener("change", function () {
  validQuantity(this);
});

const validQuantity = function (inputQuantity) {
  let quantityRegExp = new RegExp("^[0-9]*$");
  //on test la RegExp
  let testQuantity = quantityRegExp.test(inputQuantity.value);
  let small = inputQuantity.nextElementSibling;

  if (testQuantity) {
    small.innerHTML = "en vrai... c'est pas mal";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHTML = "PAS OK";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
  }
};

// ***********************Vérifie Saisie **********************************
const formFields = {
  firstName: {
    element: document.getElementById("first"),
    validationType: "name",
    invalidMessage:
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  },
  lastName: {
    element: document.getElementById("last"),
    validationType: "name",
    invalidMessage:
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  },
  email: {
    element: document.getElementById("email"),
    validationType: "email",
    invalidMessage: "Veuillez entrer une adresse mail valide.",
  },
  birthdate: {
    element: document.getElementById("birthdate"),
    validationType: "date",
    invalidMessage: "Vous devez entrer votre date de naissance.",
  },
  quantity: {
    element: document.getElementById("quantity"),
    validationType: "number",
    invalidMessage: "Veuillez entrer un nombre.",
  },
  location: {
    element: document.querySelectorAll('input[name="location"]'),
    validationType: "radio",
    invalidMessage: "Veuillez selectionner une ville.",
  },
  checkbox: {
    element: document.getElementById("checkbox1"),
    validationType: "checkbox",
    invalidMessage:
      "Vous devez vérifier que vous acceptez les termes et conditions.",
  },
};

const fieldContainer = document.querySelectorAll(".formData");
