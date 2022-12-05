import Modal from './class/modal-class.js';

const modal = new Modal(document.querySelector(".bground"), document.querySelectorAll('.close'), document.querySelectorAll(".modal-btn"));

modal.init();
modal.reset();

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

