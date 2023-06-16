import { fireEvent, render, screen } from "@testing-library/react";
import { StyledComponentButton } from "./StyledComponentButton";
import renderer from 'react-test-renderer'
import 'jest-styled-components'

test("check in button color by props", () => {
  const tree = renderer.create(<StyledComponentButton color={"#5AD07A"}
                            bgrColor={"#E8FFEE"} />).toJSON();
  expect(tree).toHaveStyleRule("color", "#5AD07A");
  expect(tree).toHaveStyleRule("background-color", "#E8FFEE");
});
test("check out button color by props", () => {
  const tree = renderer.create(<StyledComponentButton color={"#E23428"}
                            bgrColor={"#FFEDEC"} />).toJSON();
  expect(tree).toHaveStyleRule("color", "#E23428");
  expect(tree).toHaveStyleRule("background-color", "#FFEDEC");
});
test("in progress button color by props", () => {
  const tree = renderer.create(<StyledComponentButton color={"#FF9C3A"}
                            bgrColor={"#ffd7ae"} />).toJSON();
  expect(tree).toHaveStyleRule("color", "#FF9C3A");
  expect(tree).toHaveStyleRule("background-color", "#ffd7ae");
});