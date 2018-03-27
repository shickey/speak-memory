import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">
      <h1>Speak Memory</h1>
    </Link>
  </div>
);

export default Navbar;
