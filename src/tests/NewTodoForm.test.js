import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTodoForm from "../NewTodoForm";

it("renders without crashing", () => {
    render(<NewTodoForm addTodo={() => {}} />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
});

it("can submit a new todo", async () => {
    const mockAddTodo = jest.fn();
    render(<NewTodoForm addTodo={mockAddTodo} />);

    const input = screen.getByLabelText("New Todo:");
    const button = screen.getByText("Add Todo");

    // Fill out and submit the form
    await userEvent.type(input, "Test Todo");
    await userEvent.click(button);

    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith(expect.objectContaining({ task: "Test Todo" }));
    expect(input).toHaveValue("");
});



