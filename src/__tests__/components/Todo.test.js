import React from "react";
import { shallow } from "enzyme";
import TodoList from "../../components/TodoList";
import TodoItem from "../../components/TodoItem";
import TestRenderer from "react-test-renderer";

describe("Todo component", () => {
  test("it can render without error", () => {
    shallow(<TodoList />);
  });

  test("it can render TodoItem component with todos prop ", () => {
    const testRenderer = TestRenderer.create(<TodoList />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(TodoItem).props.todos).toBe(
      testInstance.findByType(TodoItem).props.todos
    );
  });

  test("it can add todo to   ", () => {
    const wrapper = shallow(<TodoList />);

    wrapper.find(".new-todo").simulate("keydown", { key: "Enter" });
    const newTodo = wrapper.find(".new-todo").text("newTodo");
    expect(wrapper.find(".todo-title").first().text()).toBe(newTodo);
  });
});
