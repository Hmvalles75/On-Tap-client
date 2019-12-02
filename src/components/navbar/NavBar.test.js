import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <NavBar />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
