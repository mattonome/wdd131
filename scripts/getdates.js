
// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    //
    // 1. Date handling (was in date.js)
    //
    const yearSpan = document.getElementById("currentYear");
    const lastModified = document.getElementById("lastModified");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModified) {
      lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
  



// date.js
// Handles dynamic footer dates

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentYear");
    const lastModified = document.getElementById("lastModified");
  
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModified) {
      lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
  });
  