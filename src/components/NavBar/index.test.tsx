import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./index";

describe("NavBar Component", () => {
  test("It should render NavBar Component correctly", () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
