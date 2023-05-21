import React from "react";
import _ from "lodash";
import Book from "./Book";
import { BookInterface } from "../@types/book";
import { useStoreActions, useStoreState } from "../store/hooks";
import { useStoreRehydrated } from "easy-peasy";
import { Card } from "react-bootstrap";

const BooksList = () => {
  const deleteBook = useStoreActions(actions => actions.deleteBook);
  const books = useStoreState(state => state.books);

  const isRehydrated = useStoreRehydrated();

  return (
    <>
      {isRehydrated ? (
        <div className="book-list">
          {!_.isEmpty(books) ? (
            books.map((book: BookInterface) => (
              <Book
                key={book.id}
                {...book}
                handleRemoveBook={() => deleteBook()}
              />
            ))
          ) : (
            <Card className="book rounded overflow-hidden shadow-lg w-full">
              <Card.Body>
                <Card.Title className="font-bold text-xl mb-2">
                  No books available. Please add some books.
                </Card.Title>
              </Card.Body>
            </Card>
          )}
        </div>
      ) : (
        <div className="row justify-content-md-center">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default BooksList;
