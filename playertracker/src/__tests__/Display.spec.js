import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "../components/Display";

describe("<Display /> tests", () => {
  it("should display strikes and balls", () => {
    const { getByText } = render(<Display />);

    const strikes = getByText(/strikes/i);
    const balls = getByText(/balls/i);

    expect(strikes).toHaveTextContent(/strikes/i);
    expect(balls).toHaveTextContent(/balls/i);
  });
});
