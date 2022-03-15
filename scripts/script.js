var skipLink = document.querySelector('.skip-link');

skipLink.addEventListener('click', function (e) {
  document.querySelector(skipLink.getAttribute('href')).focus();
});

function setActiveLink(id) {
  const className = 'active-link';
  const clearNavClass = 'clear-nav';

  const currentActive = document.querySelector(`.${className}`);
  currentActive.classList.remove(className);
  const activeSection = document.querySelector(`.${clearNavClass}`);
  activeSection.classList.remove(clearNavClass);

  const toActivate = document.getElementById(id);
  toActivate.classList.add(className);
  const toActivateSectionSelector = id.replace('-link','');
  const toActivateSection = document.querySelector(`#${toActivateSectionSelector}`);
  toActivateSection.classList.add(clearNavClass);
}