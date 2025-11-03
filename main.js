const toggleBtn = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  nav.classList.toggle('open');
});