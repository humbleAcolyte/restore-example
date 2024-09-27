import React from "react";
import { Link } from "react-router-dom";

import "./ShopHeader.css";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link to="/">
        <div className="logo">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="cart">
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
