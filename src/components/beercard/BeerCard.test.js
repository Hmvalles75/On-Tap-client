import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import BeerCard from "./BeerCard";

describe("BeerCard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <BeerCard />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
