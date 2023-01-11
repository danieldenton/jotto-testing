import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "./test/testUtils";

const setup = (state = {}) => {
  const wrapper = mount(<App />);
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", {
    target: {
      value: "train",
    },
  });

  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("creates GuessedWords table with one row", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});
describe("some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "rain", letterMatchCount: 2 },
      ],
    });
  });
  test("creates GuessedWords table with three rows", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(3);
  });
});
describe("guess secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: true,
      guessedWords: [],
    });
  });
  test("renders Congrats message", () => {
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message).toHaveLength(1);
  });
});
