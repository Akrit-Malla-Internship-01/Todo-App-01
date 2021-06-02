import { Component } from "react";
import Todos from "./Todos";
import Options from "../components/Options";

export default class AddInput extends Component {
  constructor() {
    super();
    this.state = {
      counter: 3,
      value: "",
      filterOption: "all",
      sortOption: "addedDate",
      todos: [
        {
          index: 0,
          task: "Buy groceries for next week",
          isComplete: false,
          add_date: new Date("2021-05-21"),
          due_date: new Date("2021-05-31"),
        },
        {
          index: 1,
          task: "Renew car insurance",
          isComplete: false,
          add_date: new Date("2021-05-12"),
          due_date: new Date("2021-05-22"),
        },
        {
          index: 2,
          task: "Sign up for online course edit test",
          isComplete: false,
          add_date: new Date("2021-05-06"),
          due_date: new Date("2021-06-03"),
        },
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  getDueDate = () => {
    let result = new Date();
    result.setDate(result.getDate() + 10);
    return result;
  };
  addTodo = (event) => {
    const changedTodos = this.state.todos;
    changedTodos.push({
      index: this.state.counter,
      task: this.state.value,
      isComplete: false,
      add_date: new Date(),
      due_date: this.getDueDate(),
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

  editTodo = (todoValue, index) => {
    const uneditedTodo = this.state.todos;
    if (todoValue.length !== 0) {
      uneditedTodo.forEach((element) => {
        if (element.index == index) {
          element.task = todoValue;
        }
      });
      this.setState({ todos: uneditedTodo });
    }
  };

  handleFilterOption = (option) => {
    this.setState({ filterOption: option });
  };

  checkHandler = (checkValue, index) => {
    let temp = this.state.todos;
    temp.forEach((element) => {
      if (element.index == index) {
        element.isComplete = checkValue;
      }
    });
    this.setState({ todos: temp });
  };

  handleSortOption = (option) => {
    this.setState({ sortOption: option });
  };

  render() {
    let sortedTodos = this.state.todos;
    sortedTodos.sort((a, b) => {
      switch (this.state.sortOption) {
        case "addedDate":
          return b.due_date - a.due_date;
        case "dueDate":
          return a.due_date - b.due_date;
      }
    });
    let filteredTodos = sortedTodos

      .filter((todo) => {
        switch (this.state.filterOption) {
          case "all":
            return todo;
          case "completed":
            if (todo.isComplete) {
              return todo;
            }
            break;
          case "active":
            if (!todo.isComplete) {
              return todo;
            }
          case "due-date":
            let today = new Date();
            if (
              today.toLocaleDateString("en-US") ==
              todo.due_date.toLocaleDateString("en-US")
            ) {
              return todo;
            }
        }
      })
      .map((todo) => {
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
              <div className="form-group">{filteredTodos}</div>
            </div>
          </form>
        </div>
        <Options
          filterData={this.filterData}
          handleFilterOption={this.handleFilterOption}
          handleSortOption={this.handleSortOption}
          todos={this.state.todos}
        />
      </div>
    );
  }
}
