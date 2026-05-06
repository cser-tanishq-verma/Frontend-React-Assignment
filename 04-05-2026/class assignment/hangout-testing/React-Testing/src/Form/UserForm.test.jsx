import React from "react"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import UserForm from "./UserForm";

jest.mock("axios");
test("shows loading when submitting", async () => {
  let resolvePromise;
  axios.post.mockImplementation(() => new Promise((res) => (resolvePromise = res))  );
  const user = userEvent.setup();
  render(<UserForm />);
  const input = screen.getByPlaceholderText("Enter name");
  const button = screen.getByRole("button", { name: /submit/i });
  await user.type(input, "Prajwal");
  await user.click(button);
  expect(screen.getByText("Loading...")).toBeInTheDocument();
  resolvePromise({});
});



test("shows success message after successful API call", async () => {
  axios.post.mockResolvedValueOnce({});
  const user = userEvent.setup();
  render(<UserForm />);
  await userEvent.type(screen.getByPlaceholderText("Enter name"), "Prajwal");
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));
  const successMsg = await screen.findByText("Success!");
  expect(successMsg).toBeInTheDocument();
});



test("shows error message when API fails", async () => {
  axios.post.mockRejectedValueOnce(new Error("API failed"));
  render(<UserForm />);
  await userEvent.type(screen.getByPlaceholderText("Enter name"), "Prajwal");
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));
  const errorMsg = await screen.findByText("Error occurred");
  expect(errorMsg).toBeInTheDocument();
});



test("calls API with correct data", async () => {
  axios.post.mockResolvedValueOnce({});
  render(<UserForm />);
  await userEvent.type(screen.getByPlaceholderText("Enter name"), "Prajwal");
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(axios.post).toHaveBeenCalledWith("/api/user", {
    name: "Prajwal",
  });
});