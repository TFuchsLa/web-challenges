import { Header } from "../Header/Header.js";
import { Form } from "../Form/Form.js";
import { CardList } from "../CardList/CardList.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList()); // Stellt sicher, dass die Funktionen Header, Form, CardList zurückgegeben werden

  return app;
}
