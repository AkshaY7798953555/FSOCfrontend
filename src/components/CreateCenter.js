import React, { useState } from "react";
import { Link } from "react-router-dom"

import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,                                                    
} from "@mui/material";
import { CreateCenter } from "../util/api";                          
const CenterRegistration = () => {
  const [user_id, setUser_id] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [center, setcenter] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    if(user_id.length===0 ){
        alert("Invalid User Id format!!");
        return;
    }
    if(latitude.length===0){
      alert("Please Enter latitude");
      return;
    }
    if(longitude.length===0){
      alert("Please Enter longitude");
      return;
    }
    if(center.length===0){
      alert("Please Enter Current Location");
      return;
    }
    let user = {
        "user_id" : user_id,
        "latitude"  : latitude,
        "longitude"   : longitude,
        "current_location"   :center
    }
    const data = await CreateCenter(user);
    if(data.status){
        alert("Center Successfullly created!!");
    }
    console.log(data);
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Create center</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: "20px" }}>
            <form onSubmit={handleRegistration}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Center"
                    name="center"
                    value={center}
                    onChange={(e) => setcenter(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="User Id"
                    name="user_id"
                    value={user_id}
                    onChange={(e) => setUser_id(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Latitude"
                    name="latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Longitude"
                    type="longitude"
                    name="Longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button type="submit" variant="contained" color="primary">
                    Create Center
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CenterRegistration