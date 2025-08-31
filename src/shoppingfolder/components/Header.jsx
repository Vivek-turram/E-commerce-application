import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // icons for hamburger & close

const Header = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // calculate total quantity
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="headerSection">

      {/* Left Side - Logo */}
      <div className="left">
        <h2>SHOPPING MALL</h2>
      </div>

      {/* Hamburger Icon (visible only on mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Center - Menu Bar */}
      <div className={`menuBar ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/men" onClick={() => setMenuOpen(false)}>Men</Link></li>
          <li><Link to="/women" onClick={() => setMenuOpen(false)}>Women</Link></li>
          <li><Link to="/signin" onClick={() => setMenuOpen(false)}>Signin</Link></li>
          <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link></li>
        </ul>
      </div>

      {/* Right Side - Cart */}
      <div className="right">
        <div className="cart">
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
