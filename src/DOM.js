import * as homepage from './homepage';
import * as history from './history';
import * as reservations from './reservations';
import {setCurrentNavButton} from './navbar';


const container = document.querySelector('#content');

function clearContent() {
  container.innerHTML = '';
}

export function displayHomepage() {
  clearContent();
  container.appendChild(homepage.createHeader());
  container.appendChild(homepage.createOverview());
  setCurrentNavButton('home');
}

export function displayHistory() {
  clearContent();
  container.appendChild(history.createHeader());
  container.appendChild(history.createOverview());
  setCurrentNavButton('history');
}

export function displayReservations() {
  clearContent();
  container.appendChild(reservations.createHeader());
  container.appendChild(reservations.createResInfo());
  setCurrentNavButton('reservations');
}