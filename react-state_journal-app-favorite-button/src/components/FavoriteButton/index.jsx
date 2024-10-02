import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
    console.log("favorite button clicked");
  }

  return (
    <button
      className="favorite-button"
      onClick={toggleFavorite}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
// ## Task

// Locate the component with the favorite button. Here it's called `FavoriteButton`.

// The component has an `isFavorite` boolean variable. This variable is used to determine if the star icon should be filled in or not.

// - Make `isFavorite` a state variable.
// - This state variable needs to be toggled when the user clicks the favorite button.
// - Happy Hacking!
