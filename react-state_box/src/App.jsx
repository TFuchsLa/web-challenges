import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    // Check that the value changes correctly.
    console.log(isActive);

    setIsActive(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}

// ## Task

// Refactor the code so that React re-renders the `App` component when `isActive` is changed.

// You can use the following hints as guideline:

// - Instead of `let`, consider the `useState` function.
//   - Don't forget to import the function.
//   - The initial state value should be `false`.
// - Inside of the `handleClick` function, use the `set` function of the `useState` function to set the new value of the `isActive` state.

// You should now be able to toggle the boxes color with the button! 🎉
