import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FormPost from "./index";

describe("Form Post Component", () => {
  test("It should render Form Post Component correctly", () => {
    const { asFragment } = render(
      <Router>
        <FormPost />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
