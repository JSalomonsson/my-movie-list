"use client";

import { Box, Typography, Paper } from "@mui/material";

export default function MovieList ({movies, deleteMovie}) {
//display stars based on the grade
  const displayStars = (grade) => {
    let stars = [];
    for (let i = 0; i < grade; i++) {
      stars.push('⭐');
    }
    return stars;
  };

//return the MovieList
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 2, mx: 1, textAlign: 'left' }}>Inlagda filmer</Typography>
      {movies.map((movie, index) => (
        <Paper key={index} sx={{ mt: 2, mx: 1, p: 2, width: '90%', backgroundColor: '#bdbdbd' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>  
            <Typography sx={{ ml: 1, fontWeight: 'bold' }}>{movie.title}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {displayStars(movie.grade)}
            <button onClick={() => deleteMovie(movie.title)}>❌</button>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}