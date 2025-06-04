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
      menuToggle.textContent = navList.classList.contains("open") ? "X" : "☰";
    });
  }

  // Initial temple card rendering
  renderTemples(temples);
});


// Temple objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Adelaide Australia",
    location: "Adelaide Australia",
    dedicated: "2000, June, 15",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Sant Cugat del Vallès, Barcelona",
    location: "Sant Cugat del Vallès, Barcelona, Spain",
    dedicated: "2002, April, 3",
    area: 27500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/barcelona-spain-temple/barcelona-spain-temple-43015-main.jpg"
  }
];


// Function to render a given list of temples
function renderTemples(templeList) {
  const container = document.querySelector(".grid-view");
  container.innerHTML = ""; // clear old content

  templeList.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

// Helper to filter temples
function filterTemples(criteria) {
  switch (criteria.toLowerCase()) {
    case "old":
      return temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 2000);
    case "new":
      return temples.filter(t => parseInt(t.dedicated.split(",")[0]) >= 2000);
    case "large":
      return temples.filter(t => t.area > 90000);
    default:
      return temples;
  }
}


// This is the filtering section
document.addEventListener("DOMContentLoaded", () => {
  renderTemples(temples); // Initial display

  // Filter from nav menu
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const filter = e.target.dataset.filter;
      const filtered = filterTemples(filter);
      renderTemples(filtered);

      // Update heading
      // Update heading
      const heading = document.querySelector("main h2");
      if (heading) {
        heading.textContent = (filter.toLowerCase() === "all") ? "Home" : filter.charAt(0).toUpperCase() + filter.slice(1);
      }

      

      // Update active class
      document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

  // Optional: Hide the .filter-buttons section if filtering is via nav
  const btnContainer = document.querySelector(".filter-buttons");
  if (btnContainer) btnContainer.style.display = "none";
});
