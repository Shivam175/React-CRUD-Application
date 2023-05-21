import * as React from "react";
import BookForm from "./BookForm";
import { BookInterface } from "../@types/book";
import { RouteComponentProps } from "react-router-dom";
import { useStoreActions } from "../store/hooks";

interface AddBookComponentProps extends RouteComponentProps<any> {}

const AddBook: React.FunctionComponent<AddBookComponentProps> = () => {
  const addBook = useStoreActions(actions => actions.addBook);

  const handleOnSubmit = (book: BookInterface) => addBook(book);

  return <BookForm handleOnSubmit={handleOnSubmit} />;
};

export default AddBook;
