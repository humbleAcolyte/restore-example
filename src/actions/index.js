const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

const fetchBooks = (bookstoreService, dispatch) => {
  return () => {
    dispatch(booksRequested());
    bookstoreService
      .getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((e) => dispatch(booksError(e)));
  };
};

export const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId,
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: bookId,
  };
};

export const bookDeletedFromCart = (bookId) => {
  return {
    type: "BOOK_DELETED_FROM_CART",
    payload: bookId,
  };
};

export { fetchBooks };
