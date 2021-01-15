import * as DOM from './DOM';

export default function displayNav(current = 'home') {
  const body = document.querySelector('body');

  const burgerButton = document.createElement('button');
  burgerButton.classList.add('burger-btn');
  burgerButton.setAttribute('aria-label', 'Open/close Menu');
  burgerButton.addEventListener('click', toggleNav);

  const navBar = document.createElement('nav');
  navBar.classList.add('main-nav');
  navBar.id = 'main-nav';

  const navHome = document.createElement('button');
  navHome.setAttribute('id', 'nav-home');
  navHome.classList.add('nav-btn');
  navHome.classList.add('nav-current');
  navHome.addEventListener('click', DOM.displayHomepage);
  navHome.textContent = "Home";

  const navHistory = document.createElement('button');
  navHome.setAttribute('id', 'nav-home');
  navHistory.classList.add('nav-btn');
  navHome.addEventListener('click', DOM.displayHistory);
  navHistory.textContent = "History";

  const navReservations = document.createElement('button');
  navReservations.classList.add('nav-btn');
  navReservations.classList.add('reservations-btn');
  navReservations.textContent = "Reservations";

  unsetCurrentNavButton();
  setCurrentNavButton(current);

  navBar.appendChild(navHome);
  navBar.appendChild(navHistory);
  navBar.appendChild(navReservations);

  body.prepend(navBar);
  body.prepend(burgerButton);
}

function unsetCurrentNavButton() {
  currentNavButton = document.querySelector('.nav-current');
  currentNavButton.classList.remove('nav-current');
}

function setCurrentNavButton(current) {

  let button;

  switch(current) {
    case 'home':
      button = document.getElementById('nav-home');
      break;
    
    case 'history':
      button = document.getElementById('nav-history');
      break;

    case 'reservations':
      button = document.getElementById('nav-reservations');
      break;
  }

  button.classList.add('nav-current');
}

function toggleNav() {
  const navBar = document.querySelector('#main-nav');
  if (navBar) {
    navBar.classList.toggle('nav-visible');
  }
}