import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const minus = () => setCount(count - 1);
  const plus = () => setCount(count + 1);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={minus}>
          -
        </button>
        <button type="button" onClick={plus}>
          +
        </button>
      </div>
    </div>
  );
}

// ## Task

// Refactor the code so that it features React state and makes use of it. Declare a state variable and make sure to have the buttons update said state variable.

// You can use the following hints as a guideline:

// - `let` doesn't seem to be the appropriate way to declare a variable in this instance.
// - Is there a built-in React function you can use instead?
//   - Make sure to import said function.
// - At present, the `<button>`s' event handler is logging an emoji to the console.
//   - Clearly, the event handler should be handling a different type of functionality.
