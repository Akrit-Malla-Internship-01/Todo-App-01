import { Component } from "react";

export default class classComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <header className="main-container__title main-container__title--color main-container__title--size">
          <i className="fas fa-check-square"></i>
          <h2>My Todos </h2>
        </header>
      </div>
    );
  }
}
