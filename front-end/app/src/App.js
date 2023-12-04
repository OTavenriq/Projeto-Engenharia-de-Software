import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Home from "./pages/Home";
import Rental from "./pages/Rental";
import Customer from "./pages/Customer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </div>
  );
}

export default App;
