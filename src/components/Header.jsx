import { Component } from "react";

export default class classComponent extends Component {
  render() {
    return (
      <div>
        <header className="main-container__title main-container__title--color main-container__title--size">
          <i className="fas fa-check-square"></i>
          <h2>&nbsp; My Todos</h2>
        </header>
      </div>
    );
  }
}
