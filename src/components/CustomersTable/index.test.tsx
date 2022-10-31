import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomersTable from "./index";

describe("CustomersTable Component", () => {
  test("It should render CustomersTable Component correctly", () => {
    const { asFragment } = render(
      <Router>
        <CustomersTable />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
