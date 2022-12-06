import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Duolingo from './components/Duolingo';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/feed" element={<Duolingo />} />
      </Routes>
    </div>
  );
}

export default App;
