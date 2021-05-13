import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-white p-4">
      <Link to="/">
        <img
          src="/logo.png"
          alt="Pelco 1 Logo"
          className="w-16 h-16 rounded-full"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
