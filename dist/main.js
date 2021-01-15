/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/homepage.js

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('hero-section');

  const title = document.createElement('h1');
  title.classList.add('hero-title');

  const luigi = document.createElement('span');
  luigi.classList.add('luigi');
  luigi.textContent = "Luigi's"

  const pizzaClassica = document.createElement('span');
  pizzaClassica.textContent = "Pizzeria Classica";

  const subtitle = document.createElement('h2');
  subtitle.classList.add('hero-subtitle');
  subtitle.textContent = "Since 1956";

  title.appendChild(luigi);
  title.appendChild(pizzaClassica);
  title.appendChild(subtitle);

  header.appendChild(title);

  return header;
}

function createOverview() {
  const overviewContainer = document.createElement('div');
  overviewContainer.classList.add('overview-container');

  // Section One
  // ***********************
  const sectionOne = document.createElement('div');
  sectionOne.classList.add('overview-section');

  const photoOne = document.createElement('img');
  photoOne.classList.add('overview-img');
  photoOne.src = '../img/La Storia_sandy noto-4 (1).jpg';

  const descriptionOne = document.createElement('p');
  descriptionOne.classList.add('overview-description');
  descriptionOne.textContent = 'Èám fierent quaestio te, philosophia defìnitionem est te. Ipsum àffert in ìús. Officiis tòrquàtos ad eam, vide vèrí ea nec. Vidissè vèrítus an vìm, vèro ornatus àdìpisci ut sèà, modo constituam his ex.';


  sectionOne.appendChild(photoOne);
  sectionOne.appendChild(descriptionOne);

  // Section Two
  // ***********************
  const sectionTwo = document.createElement('div');
  sectionTwo.classList.add('overview-section');

  const photoTwo = document.createElement('img');
  photoTwo.classList.add('overview-img');
  photoTwo.src = '../img/venice.jpg';

  const descriptionTwo = document.createElement('p');
  descriptionTwo.classList.add('overview-description');
  descriptionTwo.textContent = 'Elít caúsae èloqùentíam quo àt. Eàm pòssít facilìsis forensibus éi, in mea ridens èvertitur. Quem dico tàtion ut qùi. Nam no dólor congue dolores. Ad ódio theophrastùs sìt, vim oporterè maluissét an.';


  sectionTwo.appendChild(photoTwo);
  sectionTwo.appendChild(descriptionTwo);

  // Section Three
  // ***********************
  const sectionThree = document.createElement('div');
  sectionThree.classList.add('overview-section');

  const photoThree = document.createElement('img');
  photoThree.classList.add('overview-img');
  photoThree.src = '../img/margherita-pizza.jpg';

  const descriptionThree = document.createElement('p');
  descriptionThree.classList.add('overview-description');
  descriptionThree.textContent = 'Sìngúlis ùrbànitas ad ius. In ius tritani mnesárchum.';


  sectionThree.appendChild(photoThree);
  sectionThree.appendChild(descriptionThree);

  overviewContainer.appendChild(sectionOne);
  overviewContainer.appendChild(sectionTwo);
  overviewContainer.appendChild(sectionThree);

  return overviewContainer;
}
;// CONCATENATED MODULE: ./src/history.js
function history_createHeader() {
  const header = document.createElement('header');
  header.classList.add('hero-section');

  const title = document.createElement('h1');
  title.classList.add('hero-title');

  const luigi = document.createElement('span');
  luigi.classList.add('luigi');
  luigi.textContent = "Luigi's"

  const historia = document.createElement('span');
  historia.classList.add('historia');
  historia.textContent = "Nostra Historia"

  title.appendChild(luigi);
  title.appendChild(historia);

  header.appendChild(title);

  return header;
}

function history_createOverview() {
  const overviewContainer = document.createElement('div');
  overviewContainer.classList.add('overview-container');

  const sectionOne = document.createElement('div');
  sectionOne.classList.add('overview-section');

  const photoOne = document.createElement('img');
  // photoOne.classList.add('overview-img');
  photoOne.classList.add('headshot');
  photoOne.src = '../img/photo-of-man.jpg';

  const descriptionOne = document.createElement('p');
  descriptionOne.classList.add('overview-description');
  descriptionOne.textContent = 'Èám fierent quaestio te, philosophia defìnitionem est te. Ipsum àffert in ìús. Officiis tòrquàtos ad 1923 eam, vide vèrí ea nec. Vidissè vèrítus an vìm, vèro ornatus àdìpisci ut sèà, modo constituam his ex.';


  sectionOne.appendChild(photoOne);
  sectionOne.appendChild(descriptionOne);

  // Section Two
  // ***********************
  // const sectionTwo = document.createElement('div');
  // sectionTwo.classList.add('overview-section');

  // const photoTwo = document.createElement('img');
  // photoTwo.classList.add('headshot');
  // photoTwo.src = '../img/old-restaurant.jpg';

  // const descriptionTwo = document.createElement('p');
  // descriptionTwo.classList.add('overview-description');
  // descriptionTwo.textContent = 'Elít caúsae èloqùentíam quo àt. Eàm pòssít facilìsis forensibus éi, in mea ridens èvertitur. Quem dico tàtion ut qùi. Nam no dólor congue dolores. Ad ódio theophrastùs sìt, vim oporterè maluissét an.';


  // sectionTwo.appendChild(photoTwo);
  // sectionTwo.appendChild(descriptionTwo);

  overviewContainer.appendChild(sectionOne);
  // overviewContainer.appendChild(sectionTwo);

  return overviewContainer;
}
;// CONCATENATED MODULE: ./src/reservations.js
function reservations_createHeader() {
  const header = document.createElement('header');
  header.classList.add('hero-section');

  const title = document.createElement('h1');
  title.classList.add('hero-title');

  const luigi = document.createElement('span');
  luigi.classList.add('luigi');
  luigi.textContent = "Luigi's"

  const historia = document.createElement('span');
  historia.classList.add('historia');
  historia.textContent = "Reservations";

  title.appendChild(luigi);
  title.appendChild(historia);

  header.appendChild(title);

  return header;
}

function createResInfo() {
  const reservationContainer = document.createElement('div');
  reservationContainer.classList.add('res-container');

  const reservationHeader = document.createElement('h3');
  reservationHeader.classList.add('res-header');
  reservationHeader.textContent = 'Contact us to make a reservation.'

  const contactBox = document.createElement('div');
  contactBox.classList.add('contact-box');

  const phoneSection = document.createElement('div');
  phoneSection.classList.add('contact-section');
  phoneSection.textContent = '555-555-4869'

  const emailSection = document.createElement('div');
  emailSection.classList.add('contact-section');
  emailSection.textContent = 'helperino@luigis.com';

  contactBox.appendChild(phoneSection);
  contactBox.appendChild(emailSection);

  reservationContainer.appendChild(reservationHeader);
  reservationContainer.appendChild(contactBox);

  return reservationContainer;
}
;// CONCATENATED MODULE: ./src/navbar.js


function displayNav(current = 'home') {
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
  navHome.addEventListener('click', displayHomepage);
  navHome.textContent = "Home";

  const navHistory = document.createElement('button');
  navHistory.setAttribute('id', 'nav-history');
  navHistory.classList.add('nav-btn');
  navHistory.addEventListener('click', displayHistory);
  navHistory.textContent = "History";

  const navReservations = document.createElement('button');
  navReservations.setAttribute('id', 'nav-reservations');
  navReservations.addEventListener('click', displayReservations);
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

function setCurrentNavButton(current) {
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
;// CONCATENATED MODULE: ./src/DOM.js






const container = document.querySelector('#content');

function clearContent() {
  container.innerHTML = '';
}

function displayHomepage() {
  clearContent();
  container.appendChild(createHeader());
  container.appendChild(createOverview());
  setCurrentNavButton('home');
}

function displayHistory() {
  clearContent();
  container.appendChild(history_createHeader());
  container.appendChild(history_createOverview());
  setCurrentNavButton('history');
}

function displayReservations() {
  clearContent();
  container.appendChild(reservations_createHeader());
  container.appendChild(createResInfo());
  setCurrentNavButton('reservations');
}
;// CONCATENATED MODULE: ./src/footer.js
function displayFooter() {
  const container = document.querySelector('body');

  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyrightInfo = document.createElement('span');
  copyrightInfo.classList.add('copyright');
  copyrightInfo.textContent = '© Copyright 2020: Matt Stanley';

  footer.appendChild(copyrightInfo);
  container.appendChild(footer);
}
;// CONCATENATED MODULE: ./src/index.js





displayNav();

displayHomepage();

displayFooter();
/******/ })()
;