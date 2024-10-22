import { createServer } from "node:http";
import Chance from "chance";

// Instanziere Chance
const chance = new Chance();

// Erstelle den Server
export const server = createServer((req, res) => {
  // Generiere zufällige Werte
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession({ rank: true });

  // Baue die Antwort-Message
  const responseMessage = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  // Setze den Statuscode und sende die Antwort
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(responseMessage);
});
