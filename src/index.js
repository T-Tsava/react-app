import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Login from "./routes/login";
import Registration from "./routes/registration";
import Profile from "./routes/profile";
import UserProfile from "./routes/userProfile";
import Home from "./routes/home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="profile" element={<Profile />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>No user Profile Selected</p>
              </main>
            }
          />
          <Route path=":profileId" element={<UserProfile />}/>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Page not found!</p>
            </main>
          }
        />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
