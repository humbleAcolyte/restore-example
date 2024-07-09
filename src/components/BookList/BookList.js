import React, { useEffect } from "react";
import BookListItem from "../BookListItem";
import { withBookstoreService } from "../hoc";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { booksLoaded } from "../../actions";

const BookList = ({ books, bookstoreService, booksLoaded }) => {
  useEffect(() => {
    const books = bookstoreService.getBooks();
    booksLoaded(books);
  }, [bookstoreService, booksLoaded]);

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

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ booksLoaded }, dispatch);
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList),
);
