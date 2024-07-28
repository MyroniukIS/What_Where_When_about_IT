'use strict';

const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModals = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const againBtn = document.querySelector('.again');
const factsQuantity = document.querySelector('.facts-num');

let numR = 20;
let randomNumber = Math.trunc(Math.random() * numR) + 1;
let className = `hidden-${randomNumber}`;
let currentModal;
factsQuantity.textContent = numR;

const openModal = function () {
  modals.forEach(modal => {
    if (modal.classList.contains(className)) {
      modal.classList.remove(className);
      overlay.classList.remove('hidden');
      currentModal = modal;
    }
  });
};

const closeModal = function () {
  if (currentModal) {
    currentModal.classList.add(className);
    overlay.classList.add('hidden');
    againBtn.style.backgroundColor = 'rgb(246, 231, 67)';
  }
};

const tryAgain = function () {
  if (currentModal) {
    currentModal.classList.add(className);
  }
  overlay.classList.add('hidden');
  randomNumber = Math.trunc(Math.random() * numR) + 1;
  className = `hidden-${randomNumber}`;
  againBtn.style.backgroundColor = 'rgb(246, 242, 199)';
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModals.forEach(btn => {
  btn.addEventListener('click', closeModal);
});

overlay.addEventListener('click', closeModal);
againBtn.addEventListener('click', tryAgain);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});
