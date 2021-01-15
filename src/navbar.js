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
  navHistory.setAttribute('id', 'nav-history');
  navHistory.classList.add('nav-btn');
  navHistory.addEventListener('click', DOM.displayHistory);
  navHistory.textContent = "History";

  const navReservations = document.createElement('button');
  navReservations.setAttribute('id', 'nav-reservations');
  navReservations.addEventListener('click', DOM.displayReservations);
  navReservations.classList.add('nav-btn');
  navReservations.classList.add('reservations-btn');
  navReservations.textContent = "Reservations";

  navBar.appendChild(navHome);
  navBar.appendChild(navHistory);
  navBar.appendChild(navReservations);

  body.prepend(navBar);
  body.prepend(burgerButton);
}

function unsetCurrentNavButton() {
  let currentNavButton = document.querySelector('.nav-current');
  if(currentNavButton) {currentNavButton.classList.remove('nav-current');}
}

export function setCurrentNavButton(current) {
  unsetCurrentNavButton();

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

  if (button) {button.classList.add('nav-current')};
}

function toggleNav() {
  const navBar = document.querySelector('#main-nav');
  if (navBar) {
    navBar.classList.toggle('nav-visible');
  }
}