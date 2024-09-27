import React, { useEffect } from "react";
import BookListItem from "../BookListItem";
import { withBookstoreService, compose } from "../hoc";
import { connect } from "react-redux";
import { bookAddedToCart, fetchBooks } from "../../actions";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import "./BookList.css";

const BookList = ({ books, onAddToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddToCart={() => onAddToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const BookListContainer = ({
  books,
  loading,
  error,
  fetchBooks,
  onAddToCart,
}) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <Spinner />;
  }

  return <BookList books={books} onAddToCart={onAddToCart} />;
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
