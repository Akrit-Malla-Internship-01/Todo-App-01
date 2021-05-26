import { Component } from "react";

export default class Todos extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label className="styled-checkbox" htmlFor={this.props.index}>
          {this.props.todo}
          <input
            type="checkbox"
            id={this.props.index}
            name={this.props.index}
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
              onChange={() => {
                this.props.editDate();
              }}
            >
              <span className="tooltiptext">2021/05/25</span>
            </i>
          </div>
        </span>
      </div>
    );
  }
}
