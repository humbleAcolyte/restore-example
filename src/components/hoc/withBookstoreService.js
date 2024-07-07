import React from "react";

import { BookstoreServiceConsumer } from "../BookstoreServiceContext";

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(service) => {
          return <Wrapped {...props} bookstoreService={service} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
