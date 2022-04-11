import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

const App = () => {

  return (
    <div className="app">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
