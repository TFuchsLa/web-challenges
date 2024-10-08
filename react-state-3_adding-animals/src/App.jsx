import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid/single";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
    console.log(animals);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} id={animals.id} />
      <List animals={animals} />
    </main>
  );
}

// There is, however, a warning regarding the `key` prop in list items. This happens becaus newly added items currently don't have an `id` to be used by the `./src/components/List/index.jsx` component. There is a package called `uid` already installed to fix this.

// - In your `App`, import `uid` via `import { uid } from "uid";`.
// - A new animal is added inside of the `handleAddAnimal` function, which is where you need to add the id.
// - When `setAnimals` is called, replace the `newAnimal` part with a new object.
// - Spread `newAnimal` into this object and add the id key with `id: uid()`. It might look similar to this:
//   - `setXzys([...xyzs, {id: uid(), ...newXyz}]);`
