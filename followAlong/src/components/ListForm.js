import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({item: e.target.value})
  };

  // class property to submit form
  submitItem = e => {
    e.preventDefault();
    this.setState({ item: '' });
    this.props.addItem(this.state.item, e);
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          name="item"
          value={"test controlled value"}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;