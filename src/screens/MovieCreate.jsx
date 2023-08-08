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
    movie.Genre = Array.isArray(movie.Genre) ? movie.Genre : movie.Genre.split(",").map((index) => index.trim())
    movie.Director = Array.isArray(movie.Director) ? movie.Director : movie.Director.split(",").map((index) => index.trim())
    movie.Writer = Array.isArray(movie.Writer) ? movie.Writer : movie.Writer.split(",").map((index) => index.trim())
    movie.Actors = Array.isArray(movie.Actors) ? movie.Actors : movie.Actors.split(",").map((index) => index.trim())
    movie.Stills = Array.isArray(movie.Stills) ? movie.Stills : movie.Stills.split(",").map((index) => index.trim())
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
        <span>
          <label className="create-form-label">
            Title:
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Title"
            placeholder="Movie Title"
            value={movie.Title}
            onChange={handleChange}
          />
        </span>
        <span>
          <label className="create-form-label">
            Year: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Year"
            placeholder="Year Released"
            value={movie.Year}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Rated: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Rated"
            placeholder="G/PG/PG-13/R/Not Rated"
            value={movie.Rated}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Released: 
          </label>
          <input
            className="create-form-input"
            onFocus={(e) => e.target.type = "date"}
            onBlur={(e) => e.target.type = "text"}
            name="Released"
            placeholder="Date Released"
            value={movie.Released}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Runtime: 
          </label>
          <input
            className="create-form-input"
            type="number"
            name="Runtime"
            placeholder="Runtime in minutes"
            value={movie.Runtime}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Genre(s): 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Genre"
            placeholder="Genre(s), separated by commas"
            value={movie.Genre}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Director: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Director(s)"
            placeholder="Director(s), separated by commas"
            value={movie.Director}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Writer(s): 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Writer"
            placeholder="Writer(s), separated by commas"
            value={movie.Writer}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Actors: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Actors"
            placeholder="Actors, separated by commas"
            value={movie.Actors}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Awards: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Awards"
            placeholder="Awards"
            value={movie.Awards}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Poster: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Poster"
            placeholder="Poster URL"
            value={movie.Poster}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Box Office: 
          </label>
          <input
            className="create-form-input"
            type="number"
            name="BoxOffice"
            placeholder="Amount produced in USD"
            value={movie.BoxOffice}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          IMDb ID: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="imdbID"
            placeholder="IMDb ID"
            value={movie.imdbID}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          IMDb Rating: 
          </label>
          <input
            className="create-form-input"
            type="number"
            name="imdbRating"
            placeholder="IMDb Rating"
            value={movie.imdbRating}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Stills: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Stills"
            placeholder="Movie still URLs, separated by commas"
            value={movie.Stills}
            onChange={handleChange}
          />
        </span>
        <span>
        <label className="create-form-label">
          Plot: 
          </label>
          <input
            className="create-form-input"
            type="text"
            name="Plot"
            placeholder="Plot"
            value={movie.Plot}
            onChange={handleChange}
          />
        </span>

        <button id="add-movie-submit" type="submit">Add your movie!</button>
      </form>
    </div>
  )
}