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
  // fixedSidebar();
})

function fixedHeader(){
  if (window.pageYOffset < menuPosition.top && isAdded) {
      menu.classList.remove('fixed');
      menu.parentNode.removeChild(placeholder);
      isAdded = false;
  }
  else if (window.pageYOffset >= menuPosition.top && !isAdded) {
      menu.classList.add('fixed');
      menu.parentNode.appendChild(placeholder, menu);
      isAdded = true;
  }
}

// function fixedSidebar() {
//   if( menu.classList.contains('fixed')){
//     document.querySelector('.u-side-open').classList.add('fixed');
//   } else {
//     document.querySelector('.u-side-open').classList.remove('fixed');
//   }
// }
