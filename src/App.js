import "./App.css";
import { Homepage } from "./components/Homepage";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="App">
      <div className="lg:flex">
        <Homepage />
        <Signup />
      </div>
    </div>
  );
}

export default App;
