import { useState } from "react";

export default function Form({ onCreateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onCreateUser(name, email);

    setName("");

    setEmail("");

    event.target.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)} // Aktualisiert den Zustand
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="john@doe.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Aktualisiert den Zustand
      />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

// ### 1. Setting State on Submit

// Let's start by fixing the submit event first. Switch to the `./src/components/Form.jsx` file; there already are two states called `name` and `email` and a `handleSubmit` function.

// 1. Extend the `handleSubmit` function to set the `name` and `email` state to its corresponding form field values.
// 2. Reset the form after submit.
