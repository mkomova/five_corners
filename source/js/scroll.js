'use strict'

function scrollMenu() {
  let mainNav = document.querySelector('.main-nav');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 50) {
      mainNav.classList.add('main-nav--onscroll');
    } else {
      mainNav.classList.remove('main-nav--onscroll');
    }
  });
}

scrollMenu();
