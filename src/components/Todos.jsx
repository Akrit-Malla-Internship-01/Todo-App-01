import { Component } from "react";

export default class Todos extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label className="styled-checkbox" htmlFor={this.key}>
          {this.props.todo}
          <input type="checkbox" id={this.key} name={this.key} />
          <span className="checkmark"></span>
        </label>
        <span className="icons-group">
          <i className="fas fa-pen icon icon-pen tooltip">
            <span className="tooltiptext">Edit todo</span>
          </i>
          <i className="fas fa-trash-alt icon icon-trash tooltip">
            <span className="tooltiptext">Delete todo</span>
          </i>
          <div className="date">
            <i className="fas fa-info-circle tooltip">
              <span className="tooltiptext">2021/05/25</span>
            </i>
          </div>
        </span>
      </div>
    );
  }
}
