"use client";

import { Input } from "postcss";
import { useState } from "react";
import InputMovieForm from "./InputMovieForm";
import {Box, Button, Typography } from '@mui/material';
import MovieList from "./MovieList";
//create the movieapp
export default function MovieApp() {
  const [movies, setMovies] = useState([]);
//add movie to list
  const addMovie = movie => {
    setMovies([...movies, movie]);
};
//remove movie from list
const deleteMovie = title => {
    setMovies(movies.filter(movie => movie.title !== title));
};
//sort movies by title
  const sortAlphabetical = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
};
//sort movies by grade
const sortByGrade = () => {
    const sortedMovies = [...movies].sort((a, b) => b.grade - a.grade);
    setMovies(sortedMovies);
};
//return the movieapp
  return (
   <Box maxWidth="sm">
      <Typography variant="h2" sx={{mx: 1, mt:1}}>Min Filmlista</Typography>
      <InputMovieForm addMovie={movie => setMovies([...movies, movie])} />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
      <Button sx={{mt: 1, mx: 1}} variant="contained" onClick={sortAlphabetical}>Alfabetisk ordning</Button>
      <Button sx={{mt: 1, mx: 1}} variant="contained" onClick={sortByGrade}>Betygsordning</Button>
  </Box>
  );
}