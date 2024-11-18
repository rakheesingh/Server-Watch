import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchComponent from "./index";

// Mock the SearchIcon component
jest.mock("../../assets/icons", () => ({
  SearchIcon: () => <svg data-testid="search-icon" />,
}));

describe("SearchComponent", () => {
  test("renders input and search icon", () => {
    render(<SearchComponent />);

    const inputElement = screen.getByRole("textbox");
    const iconElement = screen.getByTestId("search-icon");

    expect(inputElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    render(<SearchComponent />);

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(inputElement.value).toBe("test");
  });

  test("calls debounce function with input value", () => {
    const mockDebounce = jest.fn();
    render(<SearchComponent debounce={mockDebounce} />);

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(mockDebounce).toHaveBeenCalledWith("test");
  });
});
