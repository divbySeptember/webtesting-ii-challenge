import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import App from "./App";

describe("<App />", () => {
  it("renders successfully", () => {
    render(<App />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders App Running", () => {
    const { getByText } = render(<App />);

    getByText(/app running/i);
  });

  describe("Display Count", () => {
    it("renders added ball", () => {
      const { getByText, container } = render(<App />);

      getByText(/balls: 0/i);

      const button = container.querySelector("#add-ball");

      fireEvent.click(button);

      getByText(/balls: 1/i);
    });

    it("renders subtracted ball", () => {
      const { getByText, container } = render(<App />);

      getByText(/balls: 0/i);

      const button = container.querySelector("#sub-ball");

      fireEvent.click(button);

      getByText(/balls: 0/i);
    });
  });
});
