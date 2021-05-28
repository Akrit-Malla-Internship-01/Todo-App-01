import { Component } from "react";
import Todos from "./Todos";
import Options from "../components/Options";

export default class AddInput extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todos: [
        {
          task: "Buy groceries for next week",
          isComplete: false,
          date: new Date("2021-05-21"),
        },
        {
          task: "Renew car insurance",
          isComplete: false,
          date: new Date("2021-05-22"),
        },
        {
          task: "Sign up for online course edit test",
          isComplete: false,
          date: new Date("2021-05-23"),
        },
      ],
      filteredTodos: [],
    };
  }

  componentDidMount() {
    this.setState({ filteredTodos: this.state.todos });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  addTodo = (event) => {
    const changedTodos = this.state.filteredTodos;
    changedTodos.push({
      task: this.state.value,
      isComplete: false,
      date: new Date(),
    });
    this.setState({ todos: changedTodos });
    event.preventDefault();
  };

  deleteTodo = (index) => {
    const deletedTodo = this.state.filteredTodos;
    let todoRemaining = deletedTodo.filter((element, i) => i != index);
    console.log(todoRemaining);
    this.setState({ filteredTodos: todoRemaining });
  };

  editTodo = (index) => {
    const uneditedTodo = this.state.filteredTodos;
    const editedTodo = prompt();
    uneditedTodo[index].task = editedTodo;
    this.setState({ todos: uneditedTodo });
  };

  handleFilter = (filtered) => {
    this.setState({ filteredTodos: filtered }, () =>
      console.log(this.state.filteredTodos)
    );
  };

  checkHandler = (checkValue, index) => {
    this.state.todos[index].isComplete = checkValue;
    this.setState({ todos: this.state.todos });
  };

  render() {
    let displayItems = this.state.filteredTodos.map((todo, i) => {
      return (
        <>
          <Todos
            index={i}
            key={i}
            todo={todo}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            editDate={this.editDate}
            checkHandler={this.checkHandler}
          />
        </>
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
        <Options
          filterData={this.filterData}
          handleFilter={this.handleFilter}
          todos={this.state.todos}
        />
      </div>
    );
  }
}
