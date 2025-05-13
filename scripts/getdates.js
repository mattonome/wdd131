
// date.js
// Handles dynamic footer dates

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan     = document.getElementById("currentYear");
  const lastModElem  = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  if (lastModElem) {
    // MDN: document.lastModified returns a string of the last-modified date/time
    lastModElem.textContent = `Last Modified: ${document.lastModified}`;
  }
}); 
