import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomTextField from "./index";

describe("Custom Textfield Component", () => {
  test("It should render Custom Textfield Component correctly", () => {
    const props = {
      id: "0",
      value: "Test",
      label: "Test",
      onChange: () => {
        <></>;
      },
      error: true,
      helperText: "Test",
      disabled: true,
    };
    const { asFragment } = render(
      <Router>
        <CustomTextField {...props} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
