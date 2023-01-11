import * as React from "react";
import { checkProps, findByTestAttr } from "./test/testUtils";
import { shallow } from "enzyme";
import Input from "./Input";

const setup = (secretWord = "fuk") => {
  return shallow(<Input secretWord={secretWord} />);
};
const wrapper = setup();

test("renders without error", () => {
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
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
//   test("state updates with value of input box upon change", () => {
//     const inputBox = findByTestAttr(wrapper, "input-box");
//     const mockEvent = { target: { value: "why" } };
//     inputBox.simulate("change", mockEvent);
//     expect(mockSetCurrentGuess).toHaveBeenCalledWith("why");
//   });
//   test("field is cleared upon submit button click", () => {
//     const button = findByTestAttr(wrapper, "submit-button");
//     button.simulate("click", { preventDefault() {} });
//     expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
//   });
// });
