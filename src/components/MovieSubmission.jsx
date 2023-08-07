import React from 'react'

export default function MovieSubmission({ movieTitle, movieYear }) {
  return (
    <p>{movieTitle}, released {movieYear}</p>
  )
}
