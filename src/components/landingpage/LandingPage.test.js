import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <LandingPage />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
