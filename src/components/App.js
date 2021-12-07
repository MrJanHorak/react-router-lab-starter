import React from "react";
import Home from "./Home";
import{ Link, Outlet, NavLink } from 'react-router-dom'

const App = () => {
    return (
        <div>
          <nav         style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: "flex",
          gap: "15px",
          fontSize: "20px",

        }}>
            <NavLink to="/">Go to Home Page</NavLink>
            <NavLink to="/procedures">See Our Procedures</NavLink>
            <NavLink to="/contact">Contact Us!</NavLink>
          </nav>
          <Outlet />
          </div>
    );
}

export default App;
