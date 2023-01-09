import { checkPropTypes } from "prop-types";

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.proptypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
