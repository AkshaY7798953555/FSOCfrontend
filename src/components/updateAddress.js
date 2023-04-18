import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,                                                    
} from "@mui/material";
import { updateaddress } from "../util/api";                          
const UpdateAddress = () => {
  const [user_id, setUser_id] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [current_location, setCurrentlocation] = useState("");

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
    if(current_location.length===0){
      alert("Please Enter Current Location");
      return;
    }
    let user = {
        "user_id" : user_id,
        "latitude"  : latitude,
        "longitude"   : longitude,
        "current_location"   :current_location
    }
    const data = await updateaddress(user);
    if(data.message ==="succesfully created"){
        alert("User address Successfullly updated!!");
    }
    console.log(data);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">User Address update</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: "20px" }}>
            <form onSubmit={handleRegistration}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Current Location"
                    name="current_location"
                    value={current_location}
                    onChange={(e) => setCurrentlocation(e.target.value)}
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
                    user address update
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

export default UpdateAddress