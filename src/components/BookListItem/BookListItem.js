import React from "react";

import "./BookListItem.css";

export default function BookListItem({ book, onAddToCart }) {
  const { title, author, price, coverImage } = book;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}
