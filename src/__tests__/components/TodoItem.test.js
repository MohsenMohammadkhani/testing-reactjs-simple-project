import React from "react";
import { shallow } from "enzyme";
import TodoItem from "../../components/TodoItem";
describe("TodoItem component", () => {
  test("it can render without error", () => {
    shallow(<TodoItem todos={[]} />);
  });

  test("it can render with todos from props", () => {
    const todos = [
      {
        title: "wake up",
      },
      {
        title: "wash my face",
      },
      {
        title: "exercise",
      },
      {
        title: "breakfast",
      },
    ];

    const wrapper = shallow(<TodoItem todos={todos} />);
    expect(wrapper.find(".todo").length).toBe(4);
    expect(wrapper.find(".todo-title").first().text()).toBe(todos[0].title);
    expect(wrapper.find(".todo-title").last().text()).toBe(todos[3].title);
  });
});
