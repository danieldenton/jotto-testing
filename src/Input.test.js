import React, { useState } from "react";
import { checkProps, findByTestAttr } from "./test/testUtils";
import { shallow } from "enzyme";
import Input from "./Input";

const setup = (secretWord = "fuk") => {
  return shallow(<Input secretWord={secretWord} />);
};

const mockSetCurrentGuess = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

test("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: 99 });
});

describe("state controlled input field", () => {
  test("state updates with value of input box upon change", () => {
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "why" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("why");
  });
});
