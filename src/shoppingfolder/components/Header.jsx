import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  return (
    <div className='headerSection'>

      <div className="left">
        <div className="title">
          <h2>SHOPPING MALL</h2>
        </div>
      </div>

      <div className="center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/men">Men</Link></li>
        </ul>
      </div>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="right">
        <div className="signin">
          <Link to="/signin">Signin</Link> / <Link to="/signup">Signup</Link>
        </div>
        <div className="cart">
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
