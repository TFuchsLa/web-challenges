import { add } from ".";
import { subtract } from ".";
import { multiply } from ".";
import { divide } from ".";

// Tests für die add() Funktion
test("return 5 if called add(2, 3)", () => {
  const result = add(2, 3);

  expect(result).toBe(5);
});

test("return a negative value if the greater argument is negative", () => {
  const result = add(2, -5);

  expect(result).toBeLessThan(0);
});

test("return a value close to 0.3 if called add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);

  expect(result).toBeCloseTo(0.3);
});

// Tests für die subtract() Funktion
test("return 10 if called subtract(15, 5)", () => {
  const result = subtract(15, 5);

  expect(result).toBe(10);
});

test("return a negative value if the second argument is greater than the first one", () => {
  const result = subtract(5, 10);

  expect(result).toBeLessThan(0);
});

// Tests für die multiply() Funktion
test("return 8 if called multiply(2, 4)", () => {
  const result = multiply(2, 4);

  expect(result).toBe(8);
});

test("return a negative value if only the first argument is negative", () => {
  const result = multiply(-3, 4);

  expect(result).toBeLessThan(0);
});

test("return a negative value if only the second argument is negative", () => {
  const result = multiply(3, -4);

  expect(result).toBeLessThan(0);
});

test("return a positive value if called with two negative arguments", () => {
  const result = multiply(-3, -4);

  expect(result).toBeGreaterThan(0);
});

// Tests für die divide() Funktion
test("return 3 if called divide(9, 3)", () => {
  const result = divide(9, 3);

  expect(result).toBe(3);
});

// Create an `index.test.js` file and import the functions from the `./index.js`. Implement tests to make sure that the functions work properly.

// Your tests should cover the following criteria (write one test case for each of them):

// - `add()`

//   - returns 5 if called with add(2, 3)
//   - returns a negative value if the greater argument is negative (Hint: use the matcher `toBeLessThan()`)
//   - returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher `toBeCloseTo()`)

// - `subtract()`

//   - returns 10 if called with subtract(15, 5)
//   - returns a negative value if the second argument is greater than the first one (use `toBeLessThan()` again)

// - `multiply()`

//   - returns 8 if called with multiply(2, 4)
//   - returns a negative value if only the first argument is negative
//   - returns a negative value if only the second argument is negative
//   - returns a positive value if called with two negative arguments

// - `divide()`
//   - returns 3 if called with divide(9, 3)
