import { Component } from "react";
import Todos from "./Todos.jsx";

export default class classComponent extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        "Buy groceries for next week",
        "Renew car insurance",
        "Sign up for online course edit test",
      ],
    };
  }

  render() {
    var displayItems = this.state.todos.map((todo, i) => {
      return <Todos key={i} todo={todo} />;
    });
    return (
      <div className="main-container__checklist-items">
        <form>
          <div className="checklist-row">
            <div className="form-group">{displayItems}</div>
          </div>
        </form>
      </div>
    );
  }
}
