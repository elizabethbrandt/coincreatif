import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../utils/base";
import { AuthContext } from "../../utils/Auth";
import IfUnAuthed from '../../utils/google';
import IfUnAuthedFB from '../../utils/facebook';
import Button from '@material-ui/core/Button';
import { TextField, Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
//import FormControl from '@material-ui/core/FormControl'


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Paper style={{
      margin:"30px", 
      padding:"15px",  
      display: "flex",
      flexDirection: "column",
      alignItems: "center"}} >
        
      <h1>Log in</h1>

      <form onSubmit={handleLogin}>

          <TextField 
          name="email" 
          type="email" 
          placeholder="Required" 
          required
          //id="outlined-required"
          label="Email"
          variant="outlined">

          </TextField>

          <TextField 
          name="password" 
          type="password" 
          placeholder="Required" 
          required
          //id="outlined-required"
          label="Password"
          variant="outlined">
          </TextField>

        <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        disableElevation
        >
          Log in
        </Button>
      </form>

        <Typography>Don't have an account yet?
            <Link href="/signup">Signup</Link>
        </Typography>

        <Button variant="contained" color="primary" disableElevation>
        <IfUnAuthed />
        </Button>

        <Button variant="contained" color="primary" disableElevation>
        <IfUnAuthedFB />
        </Button>

        <p>You do not need to sign up if you have a google or facebook account</p>
    </Paper>
    
  );
};

export default withRouter(Login);