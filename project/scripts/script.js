




// menu-toggle.js

const navLinks = document.getElementById("navLinks");

function showMenu() {
  if (navLinks) {
    navLinks.style.right = "0";
  }
}

function hideMenu() {
  if (navLinks) {
    navLinks.style.right = "-200px";
  }
}
