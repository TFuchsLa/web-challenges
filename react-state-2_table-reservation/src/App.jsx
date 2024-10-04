import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(2);

  const Add = () => {
    setPeople(people + 1);
  };

  const Subtract = () => {
    setPeople(people - 1);
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter people={people} onAdd={Add} onSubtract={Subtract} />
      <p>You are going to reserve a table for 2 people.</p>
    </div>
  );
}
