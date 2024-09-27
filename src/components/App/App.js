import React from "react";
import { Routes, Route } from "react-router-dom";
import ShopHeader from "../ShopHeader";

import { withBookstoreService } from "../hoc";
import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <>
    <ShopHeader numItems={5} total={210} />
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    </>
  );
};

export default withBookstoreService()(App);
