import React from "react";

class ClassComponent extends React.Component {
  render() {
    return <h1>Welcome to {this.props.first_name}</h1>;
  }
}

export default ClassComponent;
