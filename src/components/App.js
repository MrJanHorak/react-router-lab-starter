import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <div>
      <nav>
        <NavLink
          style={({ isActive }) => {
            return {

              color: isActive ? "red" : "",
            };
          }}
          to="/"
        >
          Go to Home Page
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {

              color: isActive ? "red" : "",
            };
          }}
          to="/procedures"
        >
          See Our Procedures
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "",
            };
          }}
          to="/contact"
        >
          Contact Us!
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
