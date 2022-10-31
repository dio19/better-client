import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Form from "./index";

describe("Form Component", () => {
  test("It should render Form Component correctly", () => {
    const { asFragment } = render(
      <Router>
        <Form />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
