import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Reset } from "./Components/Reset";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/Home/:email" element={<Home />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
