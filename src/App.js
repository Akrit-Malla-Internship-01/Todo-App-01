import "./App.css";
import "./styles/main.scss";
import Header from "./components/Header.jsx";
import AddInput from "./components/AddInput.jsx";
import Checklist from "./components/Checklist.jsx";
import Option from "./components/Options.jsx";
import { Component } from "react";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div>
          <Header />
        </div>
        <div>
          <AddInput />
        </div>
        {/* <div>
          <Checklist />
        </div> */}
        <div>
          <Option />
        </div>
      </div>
    </div>
  );
}

export default App;
