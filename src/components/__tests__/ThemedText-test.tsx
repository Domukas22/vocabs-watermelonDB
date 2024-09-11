import * as React from "react";
import renderer from "react-test-renderer";

import { Themed_TEXT } from "../Styled_TEXT";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Themed_TEXT>Snapshot test!</Themed_TEXT>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
