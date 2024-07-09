import React from "react";
import { Routes, Route } from "react-router-dom";

import { withBookstoreService } from "../hoc";
import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default withBookstoreService()(App);
