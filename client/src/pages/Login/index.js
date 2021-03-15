import React from "react";
//import "./login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;


  return (
    
    //React Fragment
    //onClick in span = toggle
    <section className="login">
      <div className="loginContainer">
      <div className="btnContainer">
          {hasAccount ? (
            <>
              <h1 className="loginTitle" onClick={handleLogin}>Sign In</h1>
            </>
          ) : (
            <>
              <h1 className="loginTitle" onClick={handleLogin}>Sign up</h1>
            </>
          )}
        </div>

        <label>Email</label>
        <input
          type="text"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>

              <p>
                Don't have a account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
              <p>
                HERE WILL BE GOOGLE/FB LOGIN
              </p>
              
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              
              <p>
                Have and account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>

              <p>
                HERE WILL BE GOOGLE/FB LOGIN
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
