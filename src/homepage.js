export default function displayHomepage() {
  const container = document.querySelector('#content');

  container.appendChild(createHeader());
  container.appendChild(createOverview());
}

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