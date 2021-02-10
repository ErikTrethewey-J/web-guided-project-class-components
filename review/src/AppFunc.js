import React, { useState } from "react";
import { render } from "sass";

const Person = (props) => {
  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <p>
        {props.name} is a great name! Never change {props.name}.
      </p>
    </div>
  );
};

class AppFunc extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "WEBPT24"
    }
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  render() {
    return (
      <div>
        <Person name={name} />
        <button onClick={handleClick}>MAKE IT ALLISON!</button>
      </div>
    );
  }
};

export default AppFunc;
