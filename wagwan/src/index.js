import React from "react";
import ReactDOM from "react-dom/client";

class ClassComponent1 extends React.Component {
  render() {
    return <ClassComponent2 />;
  }
}

class ClassComponent2 extends React.Component {
  render() {
    return <h1>Dario da goat 2</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ClassComponent1 />);
