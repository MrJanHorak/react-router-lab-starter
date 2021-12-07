import React from "react";
import{ Link, Outlet, NavLink } from 'react-router-dom'
import './App.css';
const App = () => {
    return (
        <div>
          <nav>        
            <NavLink to="/">Go to Home Page</NavLink>
            <NavLink to="/procedures">See Our Procedures</NavLink>
            <NavLink to="/contact">Contact Us!</NavLink>
          </nav>
          <Outlet />
          </div>
    );
}

export default App;
