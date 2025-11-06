const toggleBtn = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  nav.classList.toggle('open');
  header.classList.toggle('open');
});