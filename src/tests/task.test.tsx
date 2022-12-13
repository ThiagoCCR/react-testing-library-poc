import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Task from "../components/Task";

it("should select a task when it is clicked", () => {
  render(<Task text={"Lavar Roupa"} onDelete={jest.fn()} />);
  const selectedTask = screen.getByText("Lavar Roupa");
  fireEvent.click(selectedTask);
  expect(selectedTask).toHaveStyle({ textDecoration: "line-through" });
});
