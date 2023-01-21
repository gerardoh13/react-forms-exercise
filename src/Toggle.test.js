
import React from "react";
import { render } from "@testing-library/react";
import Toggle from "./Toggle";

it("renders without crashing", function() {
  render(<Toggle />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Toggle />);
  expect(asFragment()).toMatchSnapshot();
});