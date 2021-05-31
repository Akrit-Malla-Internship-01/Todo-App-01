import "./App.css";
import "./styles/main.scss";
import Header from "./components/Header.jsx";
import AddInput from "./components/AddInput.jsx";

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
      </div>
    </div>
  );
}

export default App;
