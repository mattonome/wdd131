function calculateWindChill(tempC, speedKmh) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(speedKmh, 0.16) +
      0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModSpan = document.getElementById("lastModified");
  
    yearSpan.textContent = new Date().getFullYear();
    lastModSpan.textContent = document.lastModified;
  
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);
    const chillEl = document.getElementById("chill");
  
    if (temp <= 10 && wind > 4.8) {
      chillEl.textContent = `${calculateWindChill(temp, wind)} °C`;
    } else {
      chillEl.textContent = "N/A";
    }
  });
  