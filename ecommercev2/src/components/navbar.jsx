import React from "react";
import { Link } from "react-router-dom";

// import { ShoppingCart } from "phosphor-react";

export const Nav = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          Cart
          {/* <ShoppingCart size={32} /> */}
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
