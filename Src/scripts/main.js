// vars for fixed header
// esc6 'let' does not work with the window object
var menu = document.querySelector('.u-head-part3');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('div');
placeholder.style.width = menuPosition.width + 'px';
placeholder.style.height = menuPosition.height + 'px';
placeholder.classList.add('fauxMenu');
var isAdded = false;

window.addEventListener('scroll', function() {
  fixedHeader();
})

function fixedHeader(){
//   if (window.pageYOffset < menuPosition.top && isAdded) {
//       menu.classList.remove('fixed');
//       menu.parentNode.removeChild(placeholder);
//       isAdded = false;
//   }
//   else if (window.pageYOffset >= menuPosition.top && !isAdded) {
//       menu.classList.add('fixed');
//       menu.parentNode.appendChild(placeholder, menu);
//       isAdded = true;
//   }
// enable the previous and disable below, to remove slight 'jump' of menu on
// scroll down, however it bugs out on mid page refresh
var sticky = menu.offsetTop;

if (window.pageYOffset >= sticky) {
  menu.classList.add('fixed');
} else {
  menu.classList.remove('fixed');
}

}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}

var sidebar = document.querySelector('.c-right-sidebar');
var sideOpen = document.querySelector('.c-r-side-opener');
var innerWrapper = document.querySelector('.l-inner-wrapper');
sidebar.style.margin = '-20% 100%';
function openNav() {
    if (sidebar.style.margin == '-20% 100%'){
        sidebar.style.margin = '-20% 0%';
        sideOpen.style.margin = "10% -3%";
        innerWrapper.classList.add('overlay');
      } else {
        sidebar.style.margin = '-20% 100%';
        sideOpen.style.margin = "10% 3%";
        innerWrapper.classList.remove('overlay');
      }
}
