import React, { useEffect } from "react";
import BookListItem from "../BookListItem";
import { withBookstoreService } from "../hoc";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { booksLoaded } from "../../actions";
import Spinner from "../Spinner";

const BookList = ({ books, loading, bookstoreService, booksLoaded }) => {
  useEffect(() => {
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }, [bookstoreService, booksLoaded]);

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

const mapStateToProps = ({ books, loading }) => {
  return {
    books,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ booksLoaded }, dispatch);
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);
