import React, { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material";
import { Calculate } from '../util/api';
import { Link } from 'react-router-dom';

const  CalculateDistance = () => {
  const [username, setUsername] = useState('');
  const [calculatedistance, setcalculatedistance] =useState('');
  const [data,setdata] =useState([])
  

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
    const data = await Calculate(user);
    let set = ""
    data.data.forEach(element => {
      set +=element.Location+' - ' +Math.floor(element.DistanceFromCurrentLocation)+"\n"
    });
    setcalculatedistance(set)
    
    console.log(data);
    setdata(data.data)
   
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div> 
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/home">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/CalculateDistance">Create Calculate Distance</Link>
        </li>
        <li class="nav-item">
        <Link to="/CreateCenter">Create Center</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
              Calculate distance
            </Button>

          </Grid>
        </Grid>
      </form>
      <div>
        {
          data.map((item) => 
           <div>
            <h3> Location:{item.Location}</h3>
            <h3> DistanceFromCurrentLocation:{item.DistanceFromCurrentLocation}</h3>
           </div>)
        }

      </div>
 

      
      
          
    </Grid>
    </div>
  );
};

export default CalculateDistance;