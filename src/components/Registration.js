import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { registerUser } from "../util/api";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate()
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    if(email.length===0 || !email.includes("@") || !email.includes(".com")){
        alert("Invalid Email format!!");
        return;
    }
    if(firstname.length===0){

      alert("Please Enter First Name");
      return;
    }
    if(lastname.length===0){
      alert("Please Enter Last Name");
      return;
    }
    if(password.length===0){
      alert("Please Create Password");
      return;
    }
    let user = {
        "first_name" : firstname,
        "last_name"  : lastname,
        "password"   : password,
        "email_id"   :email
    }
    const data = await registerUser(user);
    if(data.message ==="succesfully created"){
        alert("User Registration Success!!");
        navigate("/")
    }
  
    console.log(data);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">User Registration</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: "20px" }}>
            <form onSubmit={handleRegistration}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button type="submit" variant="contained" color="primary">
                    Register
                  </Button>
                  <a onClick={() =>navigate('/') }>Login</a>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Registration