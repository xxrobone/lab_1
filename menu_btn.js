let menuBtn = document.querySelector('#hamburger');
let menu = document.querySelector('nav > ul');

menuBtn.addEventListener('click', () => {
  console.log('clicked button');
  menuBtn.classList.toggle('active');
  menu.classList.toggle('open');
});
