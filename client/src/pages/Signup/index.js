import { TextField, Typography, Button, Paper } from "@material-ui/core";
import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../utils/base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Paper style={{
      margin:"auto", 
      marginTop: "15px",
      padding:"15px", 
      width:"50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"}}>

      <Typography variant="h3">Sign Up</Typography>
      <br/>

      <form onSubmit={handleSignUp}>
          <TextField 
          name="email" 
          type="email" 
          placeholder="Required"
          required
          label="Email"
          variant="outlined" />

          <TextField 
          name="password" 
          type="password" 
          placeholder="Required" 
          required
          label="Password"
          variant="outlined"/>
          <br/>

        <Button 
        type="submit"
        variant="contained" 
        color="primary" 
        disableElevation
        style={{width:"100%", marginTop:"3px"}}
        >
          Sign Up</Button>
      </form>
      
        <Typography>Already have an account?
          <Button color="secondary" disableElevation href="/login" > Log In</Button>
        </Typography>

    </Paper>
  );
};

export default withRouter(SignUp);