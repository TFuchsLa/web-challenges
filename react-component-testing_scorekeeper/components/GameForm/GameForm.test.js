import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

// 1. Test: Stellt sicher, dass zwei Eingabefelder und ein Button gerendert werden
test("renders two input fields and a button", () => {
  render(<GameForm />);

  // Suche nach den Eingabefeldern und dem Button
  const nameInput = screen.getByLabelText(/name of game/i);
  const playerInput = screen.getByLabelText(/player names/i);
  const button = screen.getByRole("button", { name: /create game/i });

  // Überprüfe, ob sie im Dokument sind
  expect(nameInput).toBeInTheDocument();
  expect(playerInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

// 2. Test: Überprüft, ob das Formular mit dem zugänglichen Namen 'Create a new game' gerendert wird
test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  // Suche nach der Überschrift mit dem zugänglichen Namen
  const formHeader = screen.getByRole("heading", {
    name: /create a new game/i,
  });

  // Überprüfe, ob die Überschrift im Dokument ist
  expect(formHeader).toBeInTheDocument();
});

// 3. Test: Überprüft, ob die richtigen Daten gesendet werden, wenn alle Felder ausgefüllt sind
test("submits the correct form data when every field is filled out", async () => {
  const mockOnCreateGame = jest.fn();

  render(<GameForm onCreateGame={mockOnCreateGame} />);

  // Fülle die Eingabefelder mit userEvent aus
  const nameInput = screen.getByLabelText(/name of game/i);
  const playerInput = screen.getByLabelText(/player names/i);
  const button = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameInput, "Test Game"); // Verwendung von userEvent
  await userEvent.type(playerInput, "John Doe, Jane Doe"); // Verwendung von userEvent
  await userEvent.click(button); // Klicke auf den Button, um das Formular abzuschicken

  // Überprüfe, ob die Funktion `onCreateGame` mit den korrekten Daten aufgerufen wurde
  expect(mockOnCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Test Game",
    playerNames: ["John Doe", "Jane Doe"],
  });
});

// 4. Test: Überprüft, ob das Formular nicht abgesendet wird, wenn ein Feld leer bleibt
test("does not submit form if one input field is left empty", async () => {
  const mockOnCreateGame = jest.fn();

  render(<GameForm onCreateGame={mockOnCreateGame} />);

  // Fülle nur das Feld für den Spielnamen aus und lasse die Spielernamen leer
  const nameInput = screen.getByLabelText(/name of game/i);
  const button = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameInput, "Test Game"); // Verwendung von userEvent
  await userEvent.click(button); // Klicke auf den Button, um das Formular abzuschicken

  // Überprüfe, ob die Funktion nicht aufgerufen wurde, da ein Feld leer ist
  expect(mockOnCreateGame).not.toHaveBeenCalled();
});
