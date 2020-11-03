//cimporting components
import './App.css';
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

      <NavBar/>
     <h1>Henry Challenge</h1>
      </Router>
    </div>
  );
}

export default App;
