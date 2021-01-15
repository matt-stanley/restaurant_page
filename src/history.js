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
  historia.textContent = "Nostra Historia"

  title.appendChild(luigi);
  title.appendChild(historia);

  header.appendChild(title);

  return header;
}

export function createOverview() {
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