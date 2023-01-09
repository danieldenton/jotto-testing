import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

import Congrats from "./Congrtats";

Enzyme.configure({ adapter: new Adapter() });

test("renders without error", () => {});
