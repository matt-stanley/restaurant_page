import * as homepage from './homepage';
import * as history from './history';


const container = document.querySelector('#content');

function clearContent() {
  container.innerHTML = '';
}

export function displayHomepage() {
  clearContent();
  container.appendChild(homepage.createHeader());
  container.appendChild(homepage.createOverview());
}

export function displayHistory() {
  clearContent();
  container.appendChild(history.createHeader());
  container.appendChild(history.createOverview());
}