// When the user scrolls the page, execute:
window.onscroll = function() { addShadow() };

function addShadow() {
  let header = document.querySelector(".header-container");
  if (window.scrollY > 20) {
    header.classList.add("header-shadow")
  } else {
    header.classList.remove("header-shadow");
  }
} 