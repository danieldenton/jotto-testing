import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

import Congrats from "./Congrtats";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {});

test("renders no text when success is false", () => {});

test("renders non-empty congrats message when success is true", () => {});
