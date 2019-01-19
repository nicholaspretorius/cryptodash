import React from "react";
import renderer from "react-test-renderer";
import Welcome from "../Settings/Welcome";

it("renders correct", () => {
  const tree = renderer.create(<Welcome name={"CryptoDash"} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<h1>
  Hello 
  CryptoDash
</h1>
`);
});
