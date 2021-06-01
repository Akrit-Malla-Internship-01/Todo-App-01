import { Component } from "react";

export default class Options extends Component {
  constructor(props) {
    super();
    this.state = { filterOption: "all", sortOption: "addedDate" };
  }

  handleFilterChange = (event) => {
    this.setState({ filterOption: event.target.value }, () => {
      this.props.handleFilterOption(event.target.value);
    });
  };
  handleSortChange = (event) => {
    this.setState({ sortOption: event.target.value }, () => {
      this.props.handleSortOption(event.target.value);
    });
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
              value={this.state.filterOption}
              onChange={this.handleFilterChange}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="active">Active</option>
              <option value="due-date">Has due date</option>
            </select>
          </form>

          <form action="" className="sort">
            <label htmlFor="sort">Sort</label>
            <select
              id="sort"
              name="sort"
              className="select"
              value={this.state.sortOption}
              onChange={this.handleSortChange}
            >
              <option value="addedDate">Added date</option>
              <option value="dueDate">Due date</option>
            </select>
            <i className="fas fa-sort-amount-down-alt"></i>
          </form>
        </div>
      </div>
    );
  }
}
