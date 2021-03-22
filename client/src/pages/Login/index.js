import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../utils/base";
import { AuthContext } from "../../utils/Auth";
import IfUnAuthed from '../../utils/google';
import IfUnAuthedFB from '../../utils/facebook';
import Button from '@material-ui/core/Button';
import { TextField, Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl'


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
    <Card style={{margin:"30px", padding:"15px"}} >
      <h1>Log in</h1>
      <FormControl onSubmit={handleLogin}>
        <label>
          Email

          <TextField 
          name="email" 
          type="email" 
          placeholder="Email" 
          required
          //id="outlined-required"
          label="Required"
          variant="outlined">

          </TextField>
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
          variant="outlined">
          </TextField>
        </label>

        <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        disableElevation
        >
          Log in
        </Button>
      </FormControl>

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
    </Card>
    
  );
};

export default withRouter(Login);