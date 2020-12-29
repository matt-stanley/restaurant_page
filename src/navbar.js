export default function displayNav() {
  const body = document.querySelector('body');

  const burgerButton = document.createElement('button');
  burgerButton.classList.add('burger-btn');
  burgerButton.setAttribute('aria-label', 'Open/close Menu');
  burgerButton.addEventListener('click', toggleNav);

  const navBar = document.createElement('nav');
  navBar.classList.add('main-nav');
  navBar.id = 'main-nav';

  const navHome = document.createElement('a');
  navHome.classList.add('nav-btn');
  navHome.classList.add('nav-current');
  navHome.textContent = "Home";

  const navHistory = document.createElement('a');
  navHistory.classList.add('nav-btn');
  navHistory.textContent = "History";

  const navReservations = document.createElement('a');
  navReservations.classList.add('nav-btn');
  navReservations.classList.add('reservations-btn');
  navReservations.textContent = "Reservations";

  navBar.appendChild(navHome);
  navBar.appendChild(navHistory);
  navBar.appendChild(navReservations);

  body.prepend(navBar);
  body.prepend(burgerButton);
}

function toggleNav() {
  const navBar = document.querySelector('#main-nav');
  if (navBar) {
    navBar.classList.toggle('nav-visible');
  }
}