import React, { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material";
import { getuser } from '../util/api';


const GetUserDetails = () => {
  const [username, setUsername] = useState('');
  

  const handleSubmit = async (e) => {
    console.log("Submit...");
    e.preventDefault();
    if(username.length===0){
      alert("Please Enter User Id");
      return;
    }
    try {
    
    const data = await getuser(username);
    console.log(data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    
    <Grid container justify="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="username"
              label="Usser Id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Get User Details
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
    </div>
  );
};

export default GetUserDetails;