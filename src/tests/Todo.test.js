import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "../Todo";

it("renders without crashing", () => {
    render(<Todo id={1} task="Test Todo" removeTodo={() => {}} />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<Todo id={1} task="Test Todo" removeTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
});

it("calls removeTodo when the remove button is clicked", async () => {
    const mockRemoveTodo = jest.fn();
    render(<Todo id={1} task="Test Task" removeTodo={mockRemoveTodo} />);

    const button = screen.getByText("X");
    await userEvent.click(button);

    expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
    expect(mockRemoveTodo).toHaveBeenCalledWith(1);
});