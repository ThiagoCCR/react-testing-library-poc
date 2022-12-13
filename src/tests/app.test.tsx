import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../components/App";

it("should add a new task when input is written when add button is clicked", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Add a new task");
  fireEvent.change(input, { target: { value: "Comer" } });
  const button = screen.getByText("Insert");
  fireEvent.click(button);
  const task = screen.getByText("Comer");
  expect(task).toBeInTheDocument();
});

it("should delete a task when delete button is clicked", async () => {
  render(<App />);
  const deleteButtonContainer = screen.getByTestId(`deleteButton_Lavar Roupa`);
  fireEvent.click(deleteButtonContainer);
  const task = screen.queryByText("Lavar Roupa");
  expect(task).not.toBeInTheDocument();
});
