import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,                                                    
} from "@mui/material";
import { AddCenter } from "../util/api";                          
const Addcenter = () => {
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
      alert("Please Enter Center");
      return;
    }
    let user = {
        "user_id" : user_id,
        "latitude"  : latitude,
        "longitude"   : longitude,
        "current_location"   :center
    }
    const data = await AddCenter(user);
    if(data.message ==="succesfully created"){
        alert("Center Successfullly created!!");
    }
    console.log(data);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">Add Center</Typography>
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
                    Add Center
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

export default Addcenter