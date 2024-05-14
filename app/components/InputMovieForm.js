"use client";

import { useState } from "react";
import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";

export default function InputMovieForm({addMovie}) {
  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState('');
//handle submit
  const handleSubmit = e => {
    e.preventDefault();
    //check if title is valid
    if (!title) {
      alert('Fyll i titel på filmen!');
      return;
    }
    //check if grade is valid
    if (!grade || grade < 1 || grade > 5) {
      alert('Fyll i ett giltigt betyg på filmen!');
      return;
    }
    //adds the movie
    addMovie({title, grade});
    setTitle('');
    setGrade('');
};
//return the inputmovieform
  return (
    <Box>
      <Typography variant="h4" sx={{mx: 1}}>Lägg till en film</Typography>
      <hr style={{marginTop: 5}}/>
      <form onSubmit={handleSubmit}>
        <div>
        <Typography variant="h6" sx={{mt: 2, mx: 1, fontWeight: 'bold'}}>Titel</Typography> 
        <TextField
          sx = {{mt: 1, mx: 1, width: '90%'}}
          label="Titel"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        </div>
        <div>
         <Typography variant="h6" sx={{mt: 2, mx: 1, fontWeight: 'bold'}}>Betyg</Typography> 
        <TextField
          sx = {{mt: 1, mx: 1, width: '90%'}}
          label="Betyg"
          value={grade}
          onChange={e => setGrade(e.target.value)}
          select
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </TextField>
        </div>
        <Button type="submit" variant="contained" sx={{mt: 1, mx: 1, backgroundColor: 'green'}}>Lägg till film</Button>
      </form>
      <hr style={{marginTop: 10}}/>
    </Box>
);

}