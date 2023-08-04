import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <NavLink id="home" to="/" style={{ textDecoration: "none" }}>Home</NavLink>
      <NavLink id="movies" to="/movies" style={{ textDecoration: "none" }}>Movies</NavLink>
      <NavLink id="add-movie" to="add-movie" style={{ textDecoration: "none" }}>Add Movie</NavLink>
    </nav>
  )
}
