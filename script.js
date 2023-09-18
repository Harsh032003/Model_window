"use strict";
/*
1) In addEventListner instead of giving the punction as parameter we have defined function
 outside and directly called function as a variable.(openModal and showmodal)

 2) Here most important part is that we are initially created a hidden class in css and 
 given display : none.
 So to show it we are removing that hidden class using ".classList.remove("hidden")"
 and for again hiding we are adding the hidden class ".classList.add("hidden)

 3) We have created nodeList here in .querySelectorAll method(it is used when class is common in
    more than 1 tags )

4) keyboard event: 



*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonShowModal = document.querySelectorAll(".show-modal");
const buttonCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < buttonShowModal.length; i++) {
  buttonShowModal[i].addEventListener("click", openModal);
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttonCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
