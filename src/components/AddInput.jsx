import { Component } from "react";
import Todos from "./Todos.jsx";

export default class classComponent extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todos: [
        "Buy groceries for next week",
        "Renew car insurance",
        "Sign up for online course edit test",
      ],
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTodo(event) {
    const changedTodos = this.state.todos;
    changedTodos.push(this.state.value);
    this.setState({ todos: changedTodos });
    event.preventDefault();
  }

  deleteTodo = (index) => {
    const deletedTodo = this.state.todos;
    const todoRemaining = deletedTodo.filter((element, i) => i != index);
    this.setState({ todos: todoRemaining });
  };

  editTodo = (index) => {
    const uneditedTodo = this.state.todos;
    const editedTodo = prompt();
    uneditedTodo[index] = editedTodo;
    this.setState({ todos: uneditedTodo });
  };

  editDate = (index) => {
    const date = new Date();
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    var displayItems = this.state.todos.map((todo, i) => {
      return (
        <Todos
          index={i}
          key={i}
          todo={todo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          editDate={this.editDate}
        />
      );
    });

    return (
      <div>
        <form
          action=""
          className="main-container__add-new-item"
          onSubmit={this.addTodo}
        >
          <input
            type="text"
            name="addItem"
            id="addItem"
            placeholder="Add new..."
            onChange={this.handleChange}
          />
          <button type="submit" id="add">
            Add
          </button>
        </form>
        <div className="main-container__checklist-items">
          <form>
            <div className="checklist-row">
              <div className="form-group">{displayItems}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
