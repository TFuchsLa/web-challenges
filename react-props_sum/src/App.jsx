import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={6} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;

  return <h1> The sum is: {result}</h1>;
}
