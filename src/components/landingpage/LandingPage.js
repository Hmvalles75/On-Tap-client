import React from "react";
import "./landingpage.css";

function LandingPage() {
  return (
    <main>
      <div className="label">
        <h1>On Tap</h1>
        <div className="info">
          <p>Created by Hector Valles</p>
          <p>Copyright 2019</p>
        </div>
      </div>
      <div className="tagLine">
        <h3>See what beer is on tap</h3>
        <h3>in every restaurant & bar in</h3>
        <h3>Downtown Claremont</h3>
        <h5>Select a location below to begin...</h5>
      </div>
    </main>
  );
}

export default LandingPage;
