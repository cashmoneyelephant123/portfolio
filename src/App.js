import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Duolingo from './components/Duolingo';
import Home from './components/Home';
import NBA from './components/NBA';
import ReactLab from './components/ReactLab';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/feed" element={<Duolingo />} />
        <Route path="/nba" element={<NBA />} />
        <Route path="/react-lab" element={<ReactLab />} />
      </Routes>
    </div>
  );
}

export default App;
