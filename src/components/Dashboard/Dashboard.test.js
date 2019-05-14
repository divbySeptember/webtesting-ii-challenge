import React from "react";
import Dashboard from "./Dashboard.js";
import { render, fireEvent } from "react-testing-library";

describe("<Dashboard />", () => {
  it("renders successfully", () => {
    render(<Dashboard />);
  });

  describe("Balls", () => {
    it("renders the Ball Header successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/balls:/i);
    });

    it("renders the Add Ball Button successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/add ball/i);
    });

    it("renders the Subtract Ball Button successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/subtract ball/i);
    });
  });

  describe("Strikes", () => {
    it("renders the Strike Header successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/strikes:/i);
    });

    it("renders the Add Strike Button successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/add strike/i);
    });

    it("renders the Subtract Strike Button successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/subtract strike/i);
    });
  });

  describe("Fouls", () => {
    it("renders the Foul Header successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/fouls:/i);
    });

    it("renders the Add Foul Button successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/add foul/i);
    });

    it("renders the Subtract Foul Button successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/subtract foul/i);
    });
  });

  describe("Hit", () => {
    it("renders the Foul Header successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/hit:/i);
    });

    it("renders the Runner Hits Button successfully", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/runner hits/i);
    });
  });
});
