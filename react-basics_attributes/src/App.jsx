import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Learn more about React</h2>

      <label htmlFor="search" className="article__label">
        Search
      </label>
      <input id="search" type="text" className="article__input" />
      <a
        href="https://en.wikipedia.org/wiki/React_(web_framework)"
        className="article__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read about React on Wikipedia
      </a>
    </article>
  );
}
