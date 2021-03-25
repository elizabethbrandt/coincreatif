import React, { useEffect, useState } from "react";
import app from "./base";
import CircularIndeterminate from './loadingGif';
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      //current user
      //console.log(user);
       setCurrentUser(user)
       setPending(false)

      // if (!currentUser.loggedIn) {
      //   console.log("User is logged In!");
      // //setPending(false)
      // } else {
      // console.log(" User is logged OUT!");
      // //setCurrentUser(user)
      //}
    });
  }, []);

  if(pending){
    return <><CircularIndeterminate/></>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}

    >
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider;