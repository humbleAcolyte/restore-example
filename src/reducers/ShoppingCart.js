const initialState = {
  cartItems: [],
  orderTotal: 500,
};

const updateCartItems = (cartItems, item, indx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, indx), ...cartItems.slice(indx + 1)];
  }
  if (indx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, indx), item, ...cartItems.slice(indx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + book.price * quantity,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const book = books.find((book) => book.id === bookId);
  const itemIndx = cartItems.findIndex((item) => item.id === bookId);
  const item = cartItems[itemIndx];
  const newItem = updateCartItem(book, item, quantity);
  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndx),
    orderTotal: 0,
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);
    case "BOOK_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);
    case "BOOK_DELETED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        (item) => item.id === action.payload,
      );
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
