import { Component } from "react";

export default class classComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="main-container__items-filter-sort">
          <form action="" className="filter">
            <label htmlFor="filter">Filter</label>
            <select id="filter" name="filter" className="select">
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
