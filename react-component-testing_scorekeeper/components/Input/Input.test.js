import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// Test 1: Stellt sicher, dass ein Label und ein Eingabefeld mit den korrekten Attributen gerendert werden
test("renders a label and an input with the correct attributes", () => {
  const labelText = "Name of game";
  const placeholder = "e.g. Dodelido";
  const name = "nameOfGame";

  // Render die Input-Komponente
  render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      name={name}
      required
    />
  );

  // Überprüfe, ob das Label im Dokument ist
  const label = screen.getByLabelText(labelText);
  expect(label).toBeInTheDocument();

  // Überprüfe, ob das Eingabefeld im Dokument ist
  const input = screen.getByPlaceholderText(placeholder);
  expect(input).toBeInTheDocument();

  // Überprüfe, ob das Eingabefeld die richtigen Attribute hat
  expect(input).toHaveAttribute("name", name);
  expect(input).toHaveAttribute("type", "text");
  expect(input).toBeRequired(); // Überprüfe, ob das Feld als erforderlich markiert ist
});

// Test 2: Überprüft, ob der Callback bei jeder Benutzereingabe aufgerufen wird
test("calls callback on every user input", async () => {
  const handleChange = jest.fn(); // Mock für den onChange-Callback
  const labelText = "Name of game";
  const placeholder = "e.g. Dodelido";
  const name = "nameOfGame";

  // Render die Input-Komponente
  render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      required
    />
  );

  const input = screen.getByLabelText(labelText);

  // Simuliere die Benutzereingabe
  await userEvent.type(input, "Test Game");

  // Überprüfe, ob der Callback mit jedem Tastendruck aufgerufen wurde
  expect(handleChange).toHaveBeenCalledTimes("Test Game".length); // Anzahl der Zeichen in der Eingabe
});
