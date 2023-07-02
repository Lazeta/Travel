const burger = document.querySelector('.burger');
const menu = document.querySelector('nav');
const body = document.querySelector('body');

function toggleMenu() {
  burger.classList.toggle('active');
  body.classList.toggle('hidden');
  menu.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);