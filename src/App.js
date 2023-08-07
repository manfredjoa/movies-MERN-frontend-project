import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Movies from "./screens/Movies.jsx";
import MovieSubmissions from "./screens/MovieSubmissions.jsx";
import Nav from "./components/Nav.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<MovieSubmissions />} />
      </Routes>
    </div>
  );
}

export default App;
