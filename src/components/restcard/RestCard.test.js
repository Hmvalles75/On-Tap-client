import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import RestCard from "./RestCard";

describe("RestCard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Route path="/restaurants/:id" component={RestCard} />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
