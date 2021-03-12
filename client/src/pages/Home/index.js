import React from "react";

//We could turn this into a Navbar or link it?
//Handles logout function

//////////
//Link the logout function to the nav bar//
//////////
function Home({ handleLogOut }) {
  return (
    <div className="home">
      <div className="login-divider">
        <button className="logout-button" onClick={handleLogOut}>
          Logout
        </button>

        <h1>Coin Creatif</h1>
        
      </div>
      <div>
      <p>Welcome...</p>

      </div>
    </div>
  );
}

export default Home;
