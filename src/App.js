import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Movies from "./screens/Movies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
