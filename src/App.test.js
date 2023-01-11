import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "./test/testUtils";

const setup = () => {
  return shallow(<App />);
};

test("renders App without error", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "component-app");
  expect(app).toHaveLength(1);
});
