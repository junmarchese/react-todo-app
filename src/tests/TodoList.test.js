import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../TodoList";

it("renders without crashing", () => {
    render(<TodoList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

describe("TodoList functionality", () => {
    it("can add a new todo", async () => {
        render(<TodoList />);

        const input = screen.getByLabelText("New Todo:");
        const addButton = screen.getByText("Add Todo");

        await userEvent.type(input, "Test Todo");
        await userEvent.click(addButton);

        expect(await screen.findByText("Test Todo")).toBeInTheDocument();
    });

    it("can remove a todo", async () => {
        render(<TodoList />);

        const input = screen.getByLabelText("New Todo:");
        const addButton = screen.getByText("Add Todo");

        await userEvent.type(input, "Test Todo");
        await userEvent.click(addButton);

        const todoText = await screen.findByText("Test Todo");
        expect(todoText).toBeInTheDocument();

        const deleteButton = await screen.findByText("X");
        await userEvent.click(deleteButton);

        expect(todoText).not.toBeInTheDocument();
    });

    it("does not add empty todos", () => {
        render(<TodoList />);

        const addButton = screen.getByText("Add Todo");
        userEvent.click(addButton);

        const todoItems = screen.queryAllByRole("listitem");
        expect(todoItems.length).toBe(0);
    });
});
