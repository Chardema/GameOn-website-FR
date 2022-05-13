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
    small.innerHTML = "c pas bon cthistoire 🥸";
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
    small.innerHTML = "c pas bon cthistoire 🥸";
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
    "g"
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

function required() {
  var empt = document.forms["reserve"]["first"].value;
  if (empt == "") {
    alert("Merci de donner votre prénom");
    return false;
  } else {
    alert("Tout est bon");
    return true;
  }
}
