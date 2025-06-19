// === Navigation Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      toggleBtn.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
    });
  }

  // === Wayfinder Function ===
  function highlightCurrentPage() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  }

  highlightCurrentPage(); // Call it on page load
});
