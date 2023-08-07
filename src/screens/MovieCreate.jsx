import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createMovie } from "../services/movies.js"

export default function MovieCreate() {
  const [movie, setMovie] = useState({
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: [],
    Director: [],
    Writer: [],
    Actors: [],
    Plot: "",
    Language: [],
    Country: [],
    Awards: "",
    Poster: "",
    BoxOffice: "",
    imdbID: "",
    imdbRating: "",
    Stills: [],
  })
  
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    movie.Genre = movie.Genre.split(",").map((index) => index.trim())
    await createMovie(movie)
    navigate("/movies")
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }))
  }

  return (
    <div id="add-movie-screen">
      <h1>Add a movie to our Database!</h1>

      <form className="create-form" onSubmit={handleSubmit}>

        <label className="create-form-label">
          Title: 
          <input
            className="create-form-input"
            type="text"
            name="Title"
            placeholder="Movie Title"
            value={movie.Title}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Year: 
          <input
            className="create-form-input"
            type="text"
            name="Year"
            placeholder="Year Released"
            value={movie.Year}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Rated: 
          <input
            className="create-form-input"
            type="text"
            name="Rated"
            placeholder="G/PG/PG-13/R/Not Rated"
            value={movie.Rated}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Released: 
          <input
            className="create-form-input"
            onFocus={(e) => e.target.type = "date"}
            onBlur={(e) => e.target.type = "text"}
            name="Released"
            placeholder="Date Released"
            value={movie.Released}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Runtime: 
          <input
            className="create-form-input"
            type="number"
            name="Runtime"
            placeholder="Runtime in minutes"
            value={movie.Runtime}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Genre: 
          <input
            className="create-form-input"
            type="text"
            name="Genre"
            placeholder="Genre(s)"
            value={movie.Genre}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Director: 
          <input
            className="create-form-input"
            type="text"
            name="Director"
            placeholder="Director(s)"
            value={movie.Director}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Writer: 
          <input
            className="create-form-input"
            type="text"
            name="Writer"
            placeholder="Writer(s)"
            value={movie.Writer}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Actors: 
          <input
            className="create-form-input"
            type="text"
            name="Actors"
            placeholder="Actors"
            value={movie.Actors}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Plot: 
          <input
            className="create-form-input"
            type="text"
            name="Plot"
            placeholder="Plot"
            value={movie.Plot}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Language: 
          <input
            className="create-form-input"
            type="text"
            name="Language"
            placeholder="Language(s)"
            value={movie.Language}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Country: 
          <input
            className="create-form-input"
            type="text"
            name="Country"
            placeholder="Country/Countries"
            value={movie.Country}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Awards: 
          <input
            className="create-form-input"
            type="text"
            name="Awards"
            placeholder="Awards"
            value={movie.Awards}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Poster: 
          <input
            className="create-form-input"
            type="text"
            name="Poster"
            placeholder="Poster URL"
            value={movie.Poster}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Box Office: 
          <input
            className="create-form-input"
            type="number"
            name="BoxOffice"
            placeholder="Amount produced in USD"
            value={movie.BoxOffice}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          IMDb ID: 
          <input
            className="create-form-input"
            type="text"
            name="imdbID"
            placeholder="IMDb ID"
            value={movie.imdbID}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          IMDb Rating: 
          <input
            className="create-form-input"
            type="number"
            name="imdbRating"
            placeholder="IMDb Rating"
            value={movie.imdbRating}
            onChange={handleChange}
          />
        </label>
        <label className="create-form-label">
          Stills: 
          <input
            className="create-form-input"
            type="text"
            name="Stills"
            placeholder="Movie still URLs"
            value={movie.Stills}
            onChange={handleChange}
          />
        </label>

        <button id="add-movie-submit" type="submit">Add your movie!</button>
      </form>
    </div>
  )
}