export default function displayHomepage() {
  const container = document.querySelector('#content');

  const header = document.createElement('header');
  header.classList.add('hero-section');

  const grayOverlay = document.createElement('div');
  grayOverlay.classList.add('gray-overlay');

  const title = document.createElement('h1');
  title.classList.add('hero-title');

  const luigi = document.createElement('span');
  luigi.classList.add('luigi');
  luigi.textContent = "Luigi's"

  const pizzaClassica = document.createElement('span');
  pizzaClassica.textContent = "Pizza Classica";

  const subtitle = document.createElement('h2');
  subtitle.classList.add('hero-subtitle');
  subtitle.textContent = "Since 1956";

  title.appendChild(luigi);
  title.appendChild(pizzaClassica);
  title.appendChild(subtitle);

  header.appendChild(grayOverlay);
  header.appendChild(title);
  

  container.appendChild(header);
}