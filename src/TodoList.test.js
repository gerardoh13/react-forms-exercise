import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(component, val) {
  const taskInput = component.getByLabelText("Todo:");
  fireEvent.change(taskInput, { target: { value: val } });
  const submitBtn = component.getByText("Add!");
  fireEvent.click(submitBtn);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function () {
  const todoList = render(<TodoList />);
  addTodo(todoList, "TEST TODO");
  expect(todoList.getByText("TEST TODO")).toBeInTheDocument();
  expect(todoList.getByText("✎")).toBeInTheDocument();
  expect(todoList.getByText("✔")).toBeInTheDocument();
  expect(todoList.getByText("x")).toBeInTheDocument();
});

it("can edit a todo", function () {
  const todoList = render(<TodoList />);
  addTodo(todoList, "TEST TODO");
  const editBtn = todoList.getByText("✎");
  fireEvent.click(editBtn);
  const editIpt = todoList.queryByTestId("editIpt");
  fireEvent.change(editIpt, { target: { value: "NEW TEST VALUE" } });
  const saveBtn = todoList.getByText("Save");
  fireEvent.click(saveBtn);
  expect(todoList.getByText("NEW TEST VALUE")).toBeInTheDocument();
});

it("can delete a todo", function () {
    const todoList = render(<TodoList />);
    addTodo(todoList, "TEST TODO");
    const todo = todoList.getByText("TEST TODO")
    expect(todo).toBeInTheDocument();
    const delBtn = todoList.getByText("x");
    fireEvent.click(delBtn);
    expect(todo).not.toBeInTheDocument();
  });