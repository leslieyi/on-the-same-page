import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
      <NavLink className="nav-link" style={{ marginRight: "20px" }} to="/profiles">
        Profiles
      </NavLink>


      <NavLink className="nav-link" style={{ marginRight: "20px" }} to="/">
        Home
      </NavLink>

      
      <NavLink className="nav-link" style={{ marginRight: "20px" }} to="/clubs">
        Clubs
      </NavLink>
    </div>
  );
}

export default NavBar;