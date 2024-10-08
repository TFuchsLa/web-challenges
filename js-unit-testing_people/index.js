// Gibt eine Liste der Vornamen der Personen zurück
export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

// Gibt eine Liste der vollständigen Namen (Vor- und Nachnamen) zurück
export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

// Gibt eine Liste von Strings zurück, die den vollständigen Namen und das Alter der Person enthalten
export function getNameAndAge(people) {
  return people.map(
    (person) => `${person.firstName} ${person.lastName} (${person.age})`
  );
}

// Filtert und gibt eine Liste der Personen mit einem bestimmten Alter zurück
export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

// Gibt die vollständigen Namen von Personen zurück, die älter als ein bestimmtes Alter sind
export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age)
    .map((person) => `${person.firstName} ${person.lastName}`);
}

// Filtert und gibt eine Liste der Personen zurück, die einen bestimmten Nachnamen haben
export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}

// Findet eine Person anhand ihrer ID und gibt das entsprechende Personenobjekt zurück
export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

// Überprüft, ob mindestens eine Person älter als ein bestimmtes Alter ist
export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

// Gibt die vollständigen Namen der Personen zurück, sortiert nach Alter (aufsteigend)
export function getFullNamesSortedByAge(people) {
  return people
    .sort((a, b) => a.age - b.age)
    .map((person) => `${person.firstName} ${person.lastName}`);
}
