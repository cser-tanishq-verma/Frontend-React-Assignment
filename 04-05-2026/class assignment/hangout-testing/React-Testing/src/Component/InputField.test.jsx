import React from "react"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "./InputField";


test("renders input with placeholder", () => {
  render(<InputField value="" onChange={() => {}} placeholder="Enter name" />);
  const input = screen.getByPlaceholderText("Enter name");
  expect(input).toBeInTheDocument();
});



test("calls onChange when typing", async () => {
  const handleChange = jest.fn();
  render( <InputField value="" onChange={handleChange} placeholder="Enter name" />);
  const input = screen.getByPlaceholderText("Enter name");
  await userEvent.type(input, "Prajwal");
  expect(handleChange).toHaveBeenCalled();
});



test("updates value when user types", async () => {
  const Wrapper = () => {
    const [value, setValue] = React.useState("");
    return (
      <InputField value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter name" /> ); };
  render(<Wrapper />);
  const input = screen.getByPlaceholderText("Enter name");
  await userEvent.type(input, "Prajwal");
  expect(input).toHaveValue("Prajwal");
});


test("does not crash without onChange", () => {
  render(<InputField value="" placeholder="Enter name" />);
  const input = screen.getByPlaceholderText("Enter name");
  expect(input).toBeInTheDocument();
});



test("allows clearing the input", async () => {
  const Wrapper = () => {
    const [value, setValue] = React.useState("Hello");
    return (
      <InputField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter name"
      />
    );
  };
  render(<Wrapper />);
  const input = screen.getByPlaceholderText("Enter name");
  await userEvent.clear(input);
  expect(input).toHaveValue("");
});