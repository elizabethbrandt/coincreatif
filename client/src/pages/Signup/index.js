import { FormControl, TextField, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../utils/base";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';

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
    <Card style={{margin:"30px", padding:"15px"}}>
      <h1>Sign up</h1>
      <FormControl onSubmit={handleSignUp}>
        <label>
          Email

          <TextField 
          name="email" 
          type="email" 
          placeholder="Email"
          required
          //id="outlined-required"
          label="Required"
          variant="outlined" />
        </label>

        <label>
          Password

          <TextField 
          name="password" 
          type="password" 
          placeholder="Password" 
          required
          //id="outlined-required"
          label="Required"
          variant="outlined"/>
        </label>

        <Button 
        type="submit"
        variant="contained" 
        color="primary" 
        disableElevation
        >
          Sign Up</Button>
      </FormControl>

        <Typography>Already have an account yet?
          <Link href="/login">Login</Link>
        </Typography>

    </Card>
  );
};

export default withRouter(SignUp);