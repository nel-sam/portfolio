var skipLink = document.querySelector('.skip-link');

skipLink.addEventListener('click', function (e) {
  document.querySelector(skipLink.getAttribute('href')).focus();
});