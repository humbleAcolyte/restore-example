import React from "react";
import { connect } from "react-redux";
import {
  bookAddedToCart,
  bookDeletedFromCart,
  bookRemovedFromCart,
} from "../../actions";

import "./ShoppingCartTable.css";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, indx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{indx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button onClick={() => onIncrease(id)}>Add</button>
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => onDecrease(id)}>Remove</button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Tottal: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDelete: bookDeletedFromCart,
  onDecrease: bookRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
