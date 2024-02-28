import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import User from "../../Users/User.jsx";
import Contact from "./Contact";

export default function Menu() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/User">User</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/User" component={<User />} />
          <Route exact path="/Contact" component={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
