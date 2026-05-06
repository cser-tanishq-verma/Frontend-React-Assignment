import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import React from "react";

test("renders button with label", () => {
  render(<Button label="Click Me" />);
  const button = screen.getByText("Click Me");
  expect(button).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);
  const button = screen.getByText("Click Me");
  await userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});