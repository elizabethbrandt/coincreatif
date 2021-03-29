import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../utils/base";
import { AuthContext } from "../../utils/Auth";
import IfUnAuthed from '../../utils/google';
import IfUnAuthedFB from '../../utils/facebook';
import { TextField, Typography, Button, Link, Paper } from "@material-ui/core";


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

  const { currentUser} = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }


  return (
    <Paper style={{
      margin:"auto", 
      marginTop: "15px",
      padding:"15px",
      width:"50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom:"100px"}} >
        
      <Typography variant="h3">Log In</Typography>
      <br/>
      
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
          <br/>
          
          <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          disableElevation
          style={{width:"100%", marginTop:"3px"}}
          >
            Log in
          </Button>
        
      </form> 

        <Typography>Don't have an account?
            <Link color="secondary" disableElevation href="/signup" > Sign Up</Link>
        </Typography>

        <div>
        <Button style={{margin:"3px"}}variant="contained" color="primary" disableElevation>
        <IfUnAuthed />
        </Button>
        <Button style={{margin:"3px"}}variant="contained" color="primary" disableElevation>
        <IfUnAuthedFB />
        </Button>
        </div>
        <br/>
        <Typography variant="subtitle2">You do not need to sign up if you have a Google or Facebook account</Typography>
    </Paper>
    
  );
};

export default withRouter(Login);