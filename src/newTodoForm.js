import React, { Component } from "react";
import "./newTodoForm.css";

class newTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ task: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          id="task"
          placeholder="New Todo"
          type="text"
          name="task"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default newTodoForm;
