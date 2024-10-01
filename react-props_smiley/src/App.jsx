import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "😊" : "😢"}</h1>;
}
