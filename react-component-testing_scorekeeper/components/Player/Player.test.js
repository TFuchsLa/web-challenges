import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

describe("Player", () => {
  const mockIncreaseScore = jest.fn();
  const mockDecreaseScore = jest.fn();

  beforeEach(() => {
    // Rendern der Player-Komponente vor jedem Test
    render(
      <Player
        name="John Doe"
        score={10}
        onIncreasePlayerScore={mockIncreaseScore}
        onDecreasePlayerScore={mockDecreaseScore}
      />
    );
  });

  // Test 1: Überprüfen, ob die Spielerinformationen und zwei Schaltflächen gerendert werden
  test("renders player information and two buttons", () => {
    // Überprüfen, ob der Spielername und der Punktestand gerendert werden
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument(); // Punktestand

    // Überprüfen, ob die Schaltflächen vorhanden sind
    const increaseButton = screen.getByRole("button", {
      name: /increase score/i,
    });
    const decreaseButton = screen.getByRole("button", {
      name: /decrease score/i,
    });

    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
  });

  // Test 2: Überprüfen, ob die Callback-Funktionen aufgerufen werden, wenn die Schaltflächen gedrückt werden
  test("calls callbacks when increasing or decreasing score", async () => {
    const increaseButton = screen.getByRole("button", {
      name: /increase score/i,
    });
    const decreaseButton = screen.getByRole("button", {
      name: /decrease score/i,
    });

    // Klicken der Erhöhen-Schaltfläche mit userEvent
    await userEvent.click(increaseButton);
    expect(mockIncreaseScore).toHaveBeenCalledTimes(1); // Überprüfen, ob die Funktion aufgerufen wurde

    // Klicken der Verringern-Schaltfläche mit userEvent
    await userEvent.click(decreaseButton);
    expect(mockDecreaseScore).toHaveBeenCalledTimes(1); // Überprüfen, ob die Funktion aufgerufen wurde
  });
});
