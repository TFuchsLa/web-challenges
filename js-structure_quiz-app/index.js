// index.js
import { App } from "./components/App/App.js"; // Pfad muss korrekt sein

function render() {
  const root = document.querySelector("#root"); // Entfernt alten Inhalt
  root.append(App());
}

render();
