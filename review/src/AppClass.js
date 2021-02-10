import React from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
        <p>
          {this.props.name} is an unbelievable name. Stunning! Never change,{" "}
          {this.props.name}.
        </p>
      </div>
    );
  }
} 

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren",
      key1: "test1",
      key2: "turtles"
    };
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "WEBPT24"
    });
  };


  render() {
    return (
      <div>
        <Person name={this.state.name} />
        <button onClick={this.handleNameButtonClick}>MAKE IT WEBPT24</button>
      </div>
    );
  }
}

export default AppClass;
