export function createHeader() {
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

export function createResInfo() {
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