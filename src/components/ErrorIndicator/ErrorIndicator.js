import React from "react";

import "./body.css";
import "./cup.css";

export default function ErrorIndicator() {
  const errorMsg = "Soryyy, some error happened :(";

  return (
    <div id="container">
      <div className="steam" id="steam1">
        {" "}
      </div>
      <div className="steam" id="steam2">
        {" "}
      </div>
      <div className="steam" id="steam3">
        {" "}
      </div>
      <div className="steam" id="steam4">
        {" "}
      </div>

      <div id="cup">
        <div id="cup-body">
          <div id="cup-shade"></div>
        </div>
        <div id="cup-handle"></div>
      </div>

      <div id="saucer"></div>

      <div id="shadow"></div>
      <h1>{errorMsg}</h1>
    </div>
  );
}
