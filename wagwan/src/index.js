import React from "react";
import ReactDOM from "react-dom/client";

function FunctionComponent() {
  return <h1>This is a function component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionComponent />);
