// vars for sticky header
// esc6 'let' does not work with the window object
var menu = document.querySelector('.u-head-part3');
var menuPosition = menu.getBoundingClientRect();
var placeholder = document.createElement('div');
placeholder.style.width = menuPosition.width + 'px';
placeholder.style.height = menuPosition.height + 'px';
var isAdded = false;

// variables for stickySidebar
// var sideBar = document.querySelector('.u-sidebar');
// var sidebarBottom = sideBar.offsetTop + sideBar.offsetHeight;
// var footer = document.querySelector('.footer');
// var footerTop = footer.offsetTop;

window.addEventListener('scroll', function() {
  stickyHeader();
  // stickySidebar();
})

function stickyHeader(){
  if (window.pageYOffset < menuPosition.top && isAdded) {
      menu.classList.remove('sticky');
      menu.parentNode.removeChild(placeholder);
      isAdded = false;
  }
  else if (window.pageYOffset >= menuPosition.top && !isAdded) {
      menu.classList.add('sticky');
      menu.parentNode.appendChild(placeholder, menu);
      isAdded = true;
  }
}

// function stickySidebar() {
//   var rect = sideBar.getBoundingClientRect();
//   var rect2 = footer.getBoundingClientRect();
//   var windTop = window.pageYOffset;
// console.log(rect.top, rect.bottom, rect2.top);
//
//     if (menu.classList.contains('sticky') && sidebarBottom < footerTop){
//       sideBar.classList.add('sticky');
//     } else if (menu.classList.contains('sticky') && sidebarBottom == footerTop){
//       sideBar.classList.remove('sticky');
//     }
// }
