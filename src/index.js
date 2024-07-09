import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App/App";
import ErrorBoundry from "./components/ErrorBoundry";
import { BookstoreService } from "./services";
import { BookstoreServiceProvider } from "./components/BookstoreServiceContext";

import store from "./store";

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
);
