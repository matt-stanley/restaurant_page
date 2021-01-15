export default function displayHistory() {
  const container = document.querySelector('#content');
  container.innerHTML = '';
  container.appendChild(createHeader());
  container.appendChild(createOverview());
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('hero-section');

  const title = document.createElement('h1');
  title.classList.add('hero-title');

  const historia = document.createElement('span');
  historia.classList.add('historia');
  historia.textContent = "Nostra Historia"

  title.appendChild(historia);

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
  photoOne.src = '../img/photo-of-man.jpg';

  const descriptionOne = document.createElement('p');
  descriptionOne.classList.add('overview-description');
  descriptionOne.textContent = 'Èám fierent quaestio te, philosophia defìnitionem est te. Ipsum àffert in ìús. Officiis tòrquàtos ad eam, vide vèrí ea nec. Vidissè vèrítus an vìm, vèro ornatus àdìpisci ut sèà, modo constituam his ex.';


  sectionOne.appendChild(photoOne);
  sectionOne.appendChild(descriptionOne);

  overviewContainer.appendChild(sectionOne);

  return overviewContainer;
}