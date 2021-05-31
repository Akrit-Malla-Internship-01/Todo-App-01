import { Component } from "react";

export default class Options extends Component {
  constructor(props) {
    super();
    this.state = { optionValue: "" };
  }

  filterData = (option) => {
    let editedTodos = this.props.todos;

    switch (option) {
      case "all":
        for (let i = 0; i < editedTodos.length; i++) {
          editedTodos[i].display = true;
        }
        console.log(editedTodos);
        this.props.handleFilter(editedTodos);
        break;
      case "active":
        for (let i = 0; i < editedTodos.length; i++) {
          if (editedTodos[i].isComplete === true) {
            editedTodos[i].display = false;
          } else {
            editedTodos[i].display = true;
          }
        }
        console.log(editedTodos);
        this.props.handleFilter(editedTodos);
        break;
      case "completed":
        //for all todos make display true if iscomplete is true else false
        for (let i = 0; i < editedTodos.length; i++) {
          if (editedTodos[i].isComplete === true) {
            editedTodos[i].display = true;
          } else {
            editedTodos[i].display = false;
          }
        }
        console.log(editedTodos);
        this.props.handleFilter(editedTodos);
        break;
      default:
        alert("In progress... not figured it out yet.");
    }
  };

  handleChange = (event) => {
    this.setState({ optionValue: event.target.value }, () =>
      this.filterData(this.state.optionValue)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="main-container__items-filter-sort">
          <form action="" className="filter">
            <label htmlFor="filter">Filter</label>
            <select
              id="filter"
              name="filter"
              className="select"
              value={this.state.optionValue}
              onChange={this.handleChange}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="active">Active</option>
              <option value="due-date">Has due date</option>
            </select>
          </form>

          <form action="" className="sort">
            <label htmlFor="sort">Sort</label>
            <select id="sort" name="sort" className="select">
              <option value="addedDate">Added date</option>
              <option value="active">Due date</option>
            </select>
            <i className="fas fa-sort-amount-down-alt"></i>
          </form>
        </div>
      </div>
    );
  }
}
