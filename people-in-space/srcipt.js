const allBtn = document.getElementById("all-btn");
const issBtn = document.getElementById("iss-btn");
const tiangongBtn = document.getElementById("tiangong-btn");
const peopleList = document.getElementById("people-list");
const peopleInSpaceCount = document.querySelector(
  "[data-js='people-in-space']"
);

// Funktion zum Abrufen der Daten von der API
async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  return data.people; // Gibt die Liste der Leute im All zurück
}

// Funktion zum Filtern und Anzeigen der Leute
function filterPeople(people, craft) {
  return people.filter((person) => person.craft === craft);
}

function displayPeople(people) {
  peopleList.innerHTML = ""; // Liste leeren
  people.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = `${person.name} (${person.craft})`;
    peopleList.appendChild(li);
  });
}

// Daten von der API abrufen und initial alle Leute anzeigen
getPeopleInSpace().then((people) => {
  // Event Listener für die Buttons
  allBtn.addEventListener("click", () => {
    displayPeople(people); // Alle Leute anzeigen
    peopleInSpaceCount.textContent = people.length; // Anzahl der Leute aktualisieren
  });

  issBtn.addEventListener("click", () => {
    const issPeople = filterPeople(people, "ISS"); // Filter nach ISS
    displayPeople(issPeople); // Nur ISS-Leute anzeigen
    peopleInSpaceCount.textContent = issPeople.length; // Anzahl aktualisieren
  });

  tiangongBtn.addEventListener("click", () => {
    const tiangongPeople = filterPeople(people, "Tiangong"); // Filter nach Tiangong
    displayPeople(tiangongPeople); // Nur Tiangong-Leute anzeigen
    peopleInSpaceCount.textContent = tiangongPeople.length; // Anzahl aktualisieren
  });

  // Zeige initial alle Leute an
  displayPeople(people);
  peopleInSpaceCount.textContent = people.length;
});
