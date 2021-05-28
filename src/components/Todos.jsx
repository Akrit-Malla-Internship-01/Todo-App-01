import { Component } from "react";
import { EditText, EditTextarea } from "react-edit-text";

export default class Todos extends Component {
  handleChange = (event) => {
    this.props.checkHandler(!this.props.todo.isComplete, this.props.index);
  };

  render() {
    return (
      <div key={this.props.todo.index}>
        <label className="styled-checkbox" htmlFor={this.props.index}>
          <input
            type="checkbox"
            id={this.props.index}
            name={this.props.index}
            checked={this.props.todo.isComplete}
            onChange={this.handleChange}
          />
          <span className="checkmark"></span>
        </label>
        <EditText defaultValue={this.props.todo.task} />
        <span className="icons-group">
          <i className="fas fa-pen icon icon-pen tooltip" onClick={() => {}}>
            <span className="tooltiptext">Click the text</span>
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
            <i className="fas fa-info-circle tooltip" onMouseOver={() => {}}>
              <span className="tooltiptext"></span>
            </i>
          </div>
        </span>
      </div>
    );
  }
}
