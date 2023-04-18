import React, { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material";
import { loginUser } from '../util/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate()

  const handleSubmit = async (e) => {
    console.log("Submit...");
    e.preventDefault();
    try {
      let user = {
        "email_id":username,
        "password":password
    };
    
    


    const data = await loginUser(user);
    console.log(data);
    if(data.message ==="succefully login") 
    {
      alert("Successfully login")
      return navigate('/home')

    }
    else{
      
      return alert("user credential wrong")
    }
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
              label="Email Id"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            <a onClick={()=> navigate('/register')}>CreateUser</a>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;