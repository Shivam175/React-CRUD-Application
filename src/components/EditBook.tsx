import React from "react";
import BookForm from "./BookForm";
import { useHistory, useParams } from "react-router-dom";
import { BookInterface } from "../@types/book";
import { RouteComponentProps } from "react-router-dom";
import { useStoreActions, useStoreState } from "../store/hooks";

interface EditBookComponentProps extends RouteComponentProps<any> {}

const EditBook: React.FunctionComponent<EditBookComponentProps> = () => {
  const history = useHistory();
  const { id } = useParams();
  const books = useStoreState(state => state.books);
  const bookToEdit = books.find((book: BookInterface) => book.id === id);
  const updateBook = useStoreActions(actions => actions.updateBook);

  const handleUpdateBook = (book: BookInterface) => {
    updateBook(book);
    history.push("/");
  };

  return <BookForm book={bookToEdit} handleOnSubmit={handleUpdateBook} />;
};

export default EditBook;
