import React, { useState } from "react";
import { checkProps, findByTestAttr } from "./test/testUtils";
import { shallow } from "enzyme";
import Input from "./Input";

// const mockSetCurrentGuess = jest.fn();

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

const setup = (success = false, secretWord = "fuk") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};
let wrapper;

describe("render", () => {
  describe("success is true", () => {
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit button does not show", () => {
      const button = findByTestAttr(wrapper, "submit-button");
      expect(button.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    beforeEach(() => {
      wrapper = setup(false);
    });
    test("renders without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("input box shows", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit button shows", () => {
      const button = findByTestAttr(wrapper, "submit-button");
      expect(button.exists()).toBe(true);
    });
  });
});

test("does not throw warning with expected props", () => {
  wrapper = setup();
  checkProps(Input, { secretWord: "fuk" });
});

// describe("state controlled input field", () => {
//   const mockSetCurrentGuess = jest.fn();
//   let originalUseState;
//   beforeEach(() => {
//     mockSetCurrentGuess.mockClear();
//     originalUseState = React.useState;
//     React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
//   });
//   afterEach(() => {
//     React.useState = originalUseState;
//   });
// test("state updates with value of input box upon change", () => {
//   const inputBox = findByTestAttr(wrapper, "input-box");
//   const mockEvent = { target: { value: "why" } };
//   inputBox.simulate("change", mockEvent);
//   expect(mockSetCurrentGuess).toHaveBeenCalledWith("why");
// });
//   test("field is cleared upon submit button click", () => {
//     const button = findByTestAttr(wrapper, "submit-button");
//     button.simulate("click", { preventDefault() {} });
//     expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
//   });
// });
