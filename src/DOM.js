import * as homepage from './homepage';
import * as history from './history';
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