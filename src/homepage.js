export default function displayHomepage() {
  const container = document.querySelector('#content');

  container.appendChild(createHeader());
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