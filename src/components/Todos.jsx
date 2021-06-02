import { React, Component } from "react";
import { EditText } from "react-edit-text";

export default class Todos extends Component {
  handleChange = (event, id) => {
    this.props.checkHandler(!this.props.todo.isComplete, event.target.id);
  };

  dateSort = () => {
    let arrayDate = this.props.todos.date;
    let dateA;
    let dateB;
    arrayDate.Sort(dateA - dateB);
  };

  handleTextChange = (event) => {
    this.props.editTodo(event.value, parseInt(event.name));
  };
  render() {
    return (
      <div className="todo" key={this.props.todo.index}>
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

        <EditText
          id={"editText"}
          name={"" + this.props.index + ""}
          onSave={this.handleTextChange}
          defaultValue={this.props.todo.task}
        />

        <span className="icons-group">
          <i
            className="fas fa-exclamation icon icon-pen tooltip"
            onClick={this.clickEdit}
          >
            <span className="tooltiptext">Click the text to edit</span>
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
            Added Date: &nbsp;
            <i className="fas fa-info-circle tooltip" onMouseOver={() => {}}>
              <span className="tooltiptext">
                {this.props.todo.add_date.toLocaleDateString("en-US")}
              </span>
            </i>
          </div>
          <div className="date">
            Due Date: &nbsp;
            <i className="fas fa-info-circle tooltip" onMouseOver={() => {}}>
              <span className="tooltiptext">
                {this.props.todo.due_date.toLocaleDateString("en-US")}
              </span>
            </i>
          </div>
        </span>
      </div>
    );
  }
}
