import React, { useEffect } from "react";
import BookListItem from "../BookListItem";
import { withBookstoreService, compose } from "../hoc";
import { connect } from "react-redux";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const BookList = ({ books, loading, error, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <Spinner />;
  }

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

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((e) => dispatch(booksError(e)));
    },
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookList);
