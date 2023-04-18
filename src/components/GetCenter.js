import React, { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material";
import { getcenter } from '../util/api';

const GetCenterDetails = () => {
  const [username, setUsername] = useState('');
  

  const handleSubmit = async (e) => {
    console.log("Submit...");
    e.preventDefault();
    try {
      let user = {
        "user_id":username,
       
    };
   
    const data = await getcenter(user);
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
              label="User Id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Get center
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default GetCenterDetails;