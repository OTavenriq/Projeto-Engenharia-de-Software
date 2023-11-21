import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
// import { Login } from './pages/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World!
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/home" element={ <Home /> } />
        </Routes>
    </div>
  );
}

export default App;
