console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);

  for (let character of data.results) {
    if (character.name === "R2-D2") {
      console.log(`Die Augenfarbe von R2-D2 ist: ${character.eye_color}`);
      break; // Stoppt die Schleife, sobald R2-D2 gefunden wird
    }
  }
}

fetchData();
