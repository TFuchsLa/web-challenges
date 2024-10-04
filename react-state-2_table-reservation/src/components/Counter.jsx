export default function Counter({ people, onAdd, onSubtract }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <p>{people} people</p>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onSubtract}
        >
          -
        </button>
      </div>
    </>
  );
}
