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
    console.log(this.state.value);
    var changedTodos = this.state.todos;
    changedTodos.push(this.state.value);
    console.log(changedTodos);
    this.setState({ todos: changedTodos });
    event.preventDefault();
  }

  deleteTodo(event) {
    var deletedTodo = this.state.todos;
    // axiom.delete();
    for (var i = 0; i < deletedTodo.length; i++) {
      deletedTodo.splice(i, 1);
    }
    console.log(deletedTodo);
    this.setState({ todos: deletedTodo });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    var displayItems = this.state.todos.map((todo, i) => {
      return <Todos key={i} todo={todo} />;
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
        {/* <form
          action=""
          className="fas fa-trash-alt icon icon-trash tooltip"
          onSubmit={this.DeleteTodo}
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
        </form> */}
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
