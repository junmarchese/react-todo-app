import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

it("renders without crashing", () => {
    render(<App />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});

it("renders the heading", () => {
    render(<App />);
    const heading = screen.getByText("Todo App");
    expect(heading).toBeInTheDocument();
});

