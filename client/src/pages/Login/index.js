import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../utils/base";
import { AuthContext } from "../../utils/Auth";
import IfUnAuthed from '../../utils/google';
import IfUnAuthedFB from '../../utils/facebook';


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
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <p>Don't have an account yet?
            <a href="/signup">Signup</a>
        </p>

        <div>
        <IfUnAuthed />
        </div>
        <div>
        <IfUnAuthedFB />
        </div>
        <p>You do not need to sign up if you have a google or facebook account</p>
    </div>
    
  );
};

export default withRouter(Login);