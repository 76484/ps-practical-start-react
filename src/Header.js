import React from "react";

export default ({ subtitle }) => (
  <header className="row">
    <div className="row">
      <img alt="logo" className="logo" />
    </div>
    <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
  </header>
);
