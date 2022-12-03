import { render, screen } from "@testing-library/react";
import Counter from "../components/App";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  // Render the Counter component here
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Counter />);
});

test("renders counter message", () => {
  // Complete the unit test below based on the objective in the line above
  beforeEach;
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Complete the unit test below based on the objective in the line above
  beforeEach;
  const initialValue = screen.getByTestId("count");
  expect(initialValue).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Complete the unit test below based on the objective in the line above
  beforeEach;
  userEvent.click(screen.getByText("+"));
  const incrementValue = screen.getByTestId("count");
  expect(incrementValue).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Complete the unit test below based on the objective in the line above
  beforeEach;
  userEvent.click(screen.getByText("-"));
  const decrementValue = screen.getByTestId("count");
  expect(decrementValue).toHaveTextContent("-1");
});
