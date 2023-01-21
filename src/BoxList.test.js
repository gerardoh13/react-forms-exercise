import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(component, valArr) {
  const colorInput = component.getByLabelText("Color:");
  const widthInput = component.getByLabelText("Width:");
  const heightInput = component.getByLabelText("Height:");

  fireEvent.change(colorInput, { target: { value: valArr[0] } });
  fireEvent.change(widthInput, { target: { value: valArr[1] } });
  fireEvent.change(heightInput, { target: { value: valArr[2] } });

  const submitBtn = component.getByText("New Box");
  fireEvent.click(submitBtn);
}

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a box", function () {
  const boxList = render(<BoxList test />);
  expect(boxList.queryByText("x")).not.toBeInTheDocument();
  addBox(boxList, ["blue", "100", "100"]);
  const delBtn = boxList.getByText("x")
  expect(delBtn).toBeInTheDocument();
  let box = delBtn.parentElement.previousSibling
  expect(box).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: blue;
  `);

});

it("can delete a box", function () {
    const boxList = render(<BoxList test/>);
    addBox(boxList, ["blue", "100", "100"]);    
    const delBtn = boxList.getByText("x");
    expect(delBtn).toBeInTheDocument();
    fireEvent.click(delBtn);
    expect(delBtn).not.toBeInTheDocument();
  });