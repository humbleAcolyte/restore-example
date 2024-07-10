import React, { useEffect } from "react";
import BookListItem from "../BookListItem";
import { withBookstoreService, compose } from "../hoc";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};

const BookListContainer = ({ books, loading, error, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <Spinner />;
  }

  return <BookList books={books} />;
};

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
