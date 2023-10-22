import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Should render the default counter value 10", () => {
  render(<Counter />);
  const conterText = screen.getByText("10");
  expect(conterText).toBeInTheDocument();
});

test("Should render increment button", () => {
  render(<Counter />);
  const incrementBtn = screen.getByRole("button", { name: "Increment" });
  expect(incrementBtn).toBeInTheDocument();
  expect(incrementBtn).toBeEnabled();
});

test("When we click increment button the counter value should be increased", () => {
  render(<Counter />);
  const conterText = screen.getByText("10");
  expect(conterText).toBeInTheDocument();
  expect(conterText).toHaveTextContent("10");
  const incrementBtn = screen.getByRole("button", { name: /increment/i });
  fireEvent.click(incrementBtn);
  
  expect(conterText).toHaveTextContent("11");
});
