import { Component } from "react";
import Todos from "./Todos";
import Options from "../components/Options";

export default class AddInput extends Component {
  constructor() {
    super();
    this.state = {
      counter: 3,
      value: "",
      todos: [
        {
          index: 0,
          task: "Buy groceries for next week",
          isComplete: false,
          date: new Date("2021-05-21"),
          display: true,
        },
        {
          index: 1,
          task: "Renew car insurance",
          isComplete: false,
          date: new Date("2021-05-22"),
          display: true,
        },
        {
          index: 2,
          task: "Sign up for online course edit test",
          isComplete: false,
          date: new Date("2021-05-23"),
          display: true,
        },
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  addTodo = (event) => {
    const changedTodos = this.state.todos;
    changedTodos.push({
      index: this.state.counter,
      task: this.state.value,
      isComplete: false,
      date: new Date(),
      display: true,
    });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ todos: changedTodos });
    event.preventDefault();
  };

  deleteTodo = (index) => {
    const deletedTodo = this.state.todos;
    let todoRemaining = deletedTodo.filter(
      (element) => element.index !== index
    );
    this.setState({ todos: todoRemaining });
  };

  editTodo = (value, index) => {
    const uneditedTodo = this.state.todos;

    if (value.length !== 0) {
      for (let i = 0; i < uneditedTodo.length; i++) {
        if (uneditedTodo[i].index == index) {
          uneditedTodo[i].task = value;
        }
      }
      this.setState({ todos: uneditedTodo }, () => {
        console.log(uneditedTodo);
      });
    }
  };

  handleFilter = (editedTodos) => {
    this.setState({ todos: editedTodos });
  };

  checkHandler = (checkValue, index) => {
    let temp = this.state.todos;
    temp[index].isComplete = checkValue;
    console.log(temp);
    this.setState({ todos: temp });
  };

  displayDate = (date) => {
    // this.state.todos.date;
  };

  render() {
    let displayItems = this.state.todos.map((todo) => {
      if (todo.display) {
        return (
          <Todos
            key={todo.index}
            index={todo.index}
            todo={todo}
            task={todo.task}
            date={todo.date}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            checkHandler={this.checkHandler}
          />
        );
      }
      return "";
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
        <Options
          filterData={this.filterData}
          handleFilter={this.handleFilter}
          todos={this.state.todos}
        />
      </div>
    );
  }
}
