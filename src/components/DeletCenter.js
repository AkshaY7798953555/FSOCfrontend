import React, { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material";
import { deleteCenter } from '../util/api';

const DeletCenter = () => {
  const [username, setUsername] = useState('');
  

  const handleSubmit = async (e) => {
    console.log("Submit...");
    e.preventDefault();
    try {
      let user = {
        "user_id":username,
       
    };
    if(username.length===0){
        alert("Please Enter User Id");
        return;
      }
    const data = await deleteCenter(user);
    console.log(data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="username"
              label="UserId"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Delet Center
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default DeletCenter;