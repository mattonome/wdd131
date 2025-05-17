// Wait for the DOM to fully load
window.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Set last modified date
    const lastMod = document.getElementById("lastModified");
    if (lastMod) {
      lastMod.textContent = `Last Modified: ${document.lastModified}`;
    }
  
    // Handle hamburger menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const navList = document.querySelector("nav ul");
  
    if (menuToggle && navList) {
      menuToggle.addEventListener("click", () => {
        navList.classList.toggle("open");
        menuToggle.textContent = navList.classList.contains("open") ? "✖" : "☰";
      });
    }
  });
  