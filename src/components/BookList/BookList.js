import React, { useEffect } from "react";
import BookListItem from "../BookListItem";
import { withBookstoreService } from "../hoc";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { booksLoaded, booksRequested } from "../../actions";
import Spinner from "../Spinner";

const BookList = ({
  books,
  loading,
  bookstoreService,
  booksLoaded,
  booksRequested,
}) => {
  useEffect(() => {
    booksRequested();
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }, [bookstoreService, booksLoaded, booksRequested]);

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
  return bindActionCreators({ booksLoaded, booksRequested }, dispatch);
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);
