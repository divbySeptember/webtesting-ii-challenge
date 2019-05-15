import React from "react";
import Display from "./Display.js";
import { render } from "react-testing-library";

describe("<Display />", () => {
  it("renders successfully", () => {
    const testStats = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      hit: 0
    };
    render(<Display stats={testStats} />);
  });

  it("renders Header successfully", () => {
    const testStats = {
      balls: 0,
      strikes: 0,
      fouls: 0,
      hit: 0
    };

    const { getByText } = render(<Display stats={testStats} />);

    getByText(/at bat/i);
  });

  describe("Display Balls", () => {
    it("renders balls successfully", () => {
      const testStats = {
        balls: 0,
        strikes: 0,
        fouls: 0,
        hit: 0
      };

      const { getByText } = render(<Display stats={testStats} />);

      getByText(/balls/i);
    });

    describe("Display Strikes", () => {
      it("renders strikes successfully", () => {
        const testStats = {
          balls: 0,
          strikes: 0,
          fouls: 0,
          hit: 0
        };

        const { getByText } = render(<Display stats={testStats} />);

        getByText(/strikes/i);
      });
    });
  });
});
