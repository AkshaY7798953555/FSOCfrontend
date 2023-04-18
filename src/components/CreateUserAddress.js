import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,                                                    
} from "@mui/material";
import { useraddress } from "../util/api";                          
import { Navigate } from "react-router-dom";
const CreateUserAddress = () => {
  const [user_id, setUser_id] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [current_location, setCurrentlocation] = useState("");
  const navigate = useNavigate()

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
    const data = await useraddress(user);
    if(data.status){
        alert("User address Successfullly created!!");
        navigate('/CreateCenter')
    }
    else{
      return alert("Address not found")
    }
    console.log(data);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">User Address Registration</Typography>
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
                    Create User Address
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

export default CreateUserAddress