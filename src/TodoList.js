import React, { Component } from "react";
import TodoForm from "./newTodoForm";
import Todo from "./Todo";
import uuid from "uuid/v4";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  addTodo(todos) {
    let newTodo = { ...todos, completed: false, id: uuid() };
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }));
    // localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  removeTodo(id) {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        task={todo.task}
        id={todo.id}
        key={todo.id}
        completed={todo.completed}
        updateTodo={this.updateTodo}
        toggleTodo={this.toggleCompletion}
        removeItem={() => this.removeTodo(todo.id)}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List! <span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <TodoForm addItem={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
