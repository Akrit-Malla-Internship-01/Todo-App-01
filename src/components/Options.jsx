import { Component } from "react";

export default class Options extends Component {
  constructor(props) {
    super();
    this.state = { optionValue: "" };
  }

  filterData = (option) => {
    let filteredTodos;

    switch (option) {
      case "all":
        filteredTodos = this.props.todos;
        this.props.handleFilter(filteredTodos);
        break;
      case "active":
        filteredTodos = this.props.todos.filter((each) => {
          return !each.isComplete;
        });
        this.props.handleFilter(filteredTodos);
        break;
      case "completed":
        filteredTodos = this.props.todos.filter((each) => {
          return each.isComplete;
        });
        this.props.handleFilter(filteredTodos);
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
