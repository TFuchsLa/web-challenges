import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button disabled={false} text="Mein toller Button" color="lightblue" />
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      onClick={() => console.log("blblaksjbdlk")}
      disabled={disabled}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}
