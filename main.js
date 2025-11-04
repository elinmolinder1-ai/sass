
//skapa toggle-knapp
const header = document.querySelector('.header');
const toggleBtn= document.createElement('button');
toggleBtn.className= 'header__toggle';

for (let i=0; i<3; i++){
  toggleBtn.appendChild(document.createElement('span'));
}

const nav = document.createElement('nav');
nav.className = 'header__nav';

header.appendChild(toggleBtn);
header.appendChild(nav);

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  nav.classList.toggle('open')});


  const headerMenu = document.createElement('ul');
  headerMenu.className ='header__menu';

  ['Play online', 'Play on-site', 'The story', 'Contact us'].forEach (text=> {const li =document.createElement('li');
    li.className='header__item';
    const a = document.createElement('a');
    a.className = 'header__link';
    a.href = '#';
    a.textContent =text;
    li.appendChild(a);
    headerMenu.appendChild(li);
  });
  nav.appendChild(headerMenu);