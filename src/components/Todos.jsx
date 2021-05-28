import { Component } from "react";

export default class Todos extends Component {
  render() {
    return (
      <div>
        <label className="styled-checkbox" htmlFor={this.props.index}>
          {this.props.todo.task}
          <input
            key={this.props.index}
            type="checkbox"
            id={this.props.index}
            name={this.props.index}
            checked={this.props.todo.isComplete}
            onChange={(event, i) => {
              this.props.checkHandler(
                !this.props.todo.isComplete,
                this.props.index
              );
            }}
          />
          <span className="checkmark"></span>
        </label>
        <span className="icons-group">
          <i
            className="fas fa-pen icon icon-pen tooltip"
            onClick={() => {
              this.props.editTodo(this.props.index);
            }}
          >
            <span className="tooltiptext">Edit todo</span>
          </i>
          <i
            className="fas fa-trash-alt icon icon-trash tooltip"
            onClick={() => {
              this.props.deleteTodo(this.props.index);
            }}
          >
            <span className="tooltiptext">Delete todo</span>
          </i>
          <div className="date">
            <i
              className="fas fa-info-circle tooltip"
              onMouseOver={() => {
                // return this.props.todos.date;
              }}
            >
              <span className="tooltiptext">28-05-2021</span>
            </i>
          </div>
        </span>
      </div>
    );
  }
}
