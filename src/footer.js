export default function displayFooter() {
  const container = document.querySelector('body');

  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyrightInfo = document.createElement('span');
  copyrightInfo.classList.add('copyright');
  copyrightInfo.textContent = '© Copyright 2020: Matt Stanley';

  footer.appendChild(copyrightInfo);
  container.appendChild(footer);
}