import { TextField, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../utils/base";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

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
      margin:"30px", 
      padding:"15px", 
      display: "flex",
      flexDirection: "column",
      alignItems: "center"}}>

      <h1>Sign up</h1>

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

        <Button 
        type="submit"
        variant="contained" 
        color="primary" 
        disableElevation
        >
          Sign Up</Button>
      </form>

        <Typography>Already have an account yet?
          <Link href="/login">Login</Link>
        </Typography>

    </Paper>
  );
};

export default withRouter(SignUp);