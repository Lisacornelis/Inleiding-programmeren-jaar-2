// Functie om afbeelding te veranderen
function veranderAfbeelding(nieuweAfbeelding) {
  document.querySelector("#konijn").src = "images/" + nieuweAfbeelding;
  document.querySelector("#konijn").classList.remove("hidden"); // Verwijder de hidden class wanneer een afbeelding is geselecteerd
}

// Interval voor het wisselen van ogen
// gaat continu de if else af waardoor de afbeeldingen switchen van opactiy
setInterval(() => {
  const konijnOgenOpen = document.querySelector("#KonijnOgenOpen");
  const konijnOgenDicht = document.querySelector("#KonijnOgenDicht");
  if (konijnOgenDicht.style.opacity == 0) {
    konijnOgenDicht.style.opacity = 1;
    konijnOgenOpen.style.opacity = 0;
  } else {
    konijnOgenDicht.style.opacity = 0;
    konijnOgenOpen.style.opacity = 1;
  }
}, 1000);

// maakt keuzeStack hidden wanneer je daarbuiten klikt
document.body.addEventListener("click", function (event) {
  const keuzesStack = document.querySelector("#keuzesStack");
  if (event.target !== keuzesStack && !keuzesStack.contains(event.target)) {
    // als je niet op de keuzeStack klikt & als je ook niet op een van de onderdelen in de keuzeStack klikt
    document.querySelector("#konijn").classList.add("hidden"); // Voeg de hidden class toe wanneer er buiten het keuzesStack wordt geklikt
    document.querySelector("#konijn").classList.add("hidden");
  }
});

//achtergrondcode
document.addEventListener("DOMContentLoaded", function () {
  // Selecteer de afbeeldingen
  const bosAchtergrond = document.querySelector("#bosAchtergrond");
  const boerderijAchtergrond = document.querySelector("#boerderijAchtergrond");
  const binnenAchtergrond = document.querySelector("#binnenAchtergrond");

  // Voegt een click event listener toe aan elke afbeelding
  bosAchtergrond.addEventListener("click", function () {
    // manipuleert de achtergrond url / pad van de background image die in de body staat
    document.body.style.backgroundImage = `url('${bosAchtergrond.src}')`;
  });

  boerderijAchtergrond.addEventListener("click", function () {
    document.body.style.backgroundImage = `url('${boerderijAchtergrond.src}')`;
  });

  binnenAchtergrond.addEventListener("click", function () {
    document.body.style.backgroundImage = `url('${binnenAchtergrond.src}')`;
  });
});

// Hieronder de scriptcode die de h1 op main.html aanpast naar input van de form op index.html. Bron: ChatGPT (zie bronnenlijst)

document.addEventListener("DOMContentLoaded", function () {
  // Functie voor index.html
  if (document.querySelector("#naamForm")) {
    document
      .querySelector("#naamForm")
      .addEventListener("submit", function (event) {
        // klik verzenden -> voer event uit
        event.preventDefault(); // Voorkomt de standaard actie (herladen pagina / gegevens naar server)
        const naam = document.querySelector("#naam").value;
        localStorage.setItem("gebruikersNaam", naam); // ingevoerde naam word opgeslagen in localStorage onder sleutel "gebruikersNaam"
        window.location.href = "main.html"; // Wordt doorverwezen naar volgende pagina
      });
  }

  // Functie voor main.html
  if (document.querySelector("#welkomstBericht")) {
    // Controleert of welkomstBericht (h1) aanwezig is en of je op main.html zit
    const naam = localStorage.getItem("gebruikersNaam"); // gebruikersNaam dat in localStorage staat opgeslagen wordt opgehaald
    if (naam) {
      document.querySelector(
        "#welkomstBericht"
      ).textContent = `Hallo, ${naam}!`; // welkomstBericht wordt aangepast dvm textContent naar Hallo, + gebruikersNaam
    }
  }
});
