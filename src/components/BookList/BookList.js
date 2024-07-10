import React, { useEffect } from "react";
import BookListItem from "../BookListItem";
import { withBookstoreService } from "../hoc";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as booksActions from "../../actions";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const BookList = ({
  books,
  loading,
  error,
  bookstoreService,
  booksLoaded,
  booksRequested,
  booksError,
}) => {
  useEffect(() => {
    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((e) => booksError(e));
  }, [bookstoreService, booksLoaded, booksRequested, booksError]);

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(booksActions, dispatch);
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);
