import React from "react";

export default function BookListItem({ book }) {
  const { title, author } = book;

  return (
    <>
      <span>{title}</span>
      <span>{author}</span>
    </>
  );
}
