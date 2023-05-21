import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BookInterface } from "../@types/book";
import Modal from "./Modal";
import { useStoreActions, useStoreState } from "../store/hooks";

interface BookProps extends BookInterface {
  handleRemoveBook: () => void;
}

const Book = ({
  id,
  title,
  author,
  isbn,
  year,
  handleRemoveBook
}: BookProps) => {
  const history = useHistory();
  const saveDeleteID = useStoreActions(actions => actions.saveDeleteID);
  const toggle = useStoreActions(actions => actions.toggle);

  const isModalVisible = useStoreState((state) => state.modalState);

  const deleteBook = () => {
    toggle();
    handleRemoveBook();
  };

  const onClickDelete = () => {
    saveDeleteID(id);
    toggle();
  };

  return (
    <>
      <div className="w-full">
        <Card
          className="book rounded overflow-hidden shadow-lg w-full"
        >
          <Card.Body>
            <Card.Title className="font-bold text-xl mb-2">{title}</Card.Title>
            <div className="book-details text-gray-700 text-base">
              <div>
                <span className="book-details font-semibold text-black text-base">
                  Book Author:
                </span>{" "}
                {author}
              </div>
              <div>
                <span className="book-details font-semibold text-black text-base">
                  Year of Publish:
                </span>{" "}
                {year}{" "}
              </div>
              <div>
                <span className="book-details font-semibold text-black text-base">
                  ISBN:
                </span>{" "}
                {isbn}
              </div>
            </div>
            <Button
              variant="primary"
              className="bg-snowWhite hover:bg-blue-500 hover:text-white text-blue-700 font-semibold border border-blue-500 hover:border-transparent rounded"
              onClick={() => history.push(`/edit/${id}`)}
            >
              Edit
            </Button>{" "}
            <Button
              variant="danger"
              className="bg-snowWhite hover:bg-red-600 hover:text-white text-red-600 font-semibold border border-red-600 hover:border-transparent rounded"
              onClick={onClickDelete}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Modal
          show={isModalVisible}
          delID={id}
          close={() => toggle()}
          deleteBook={deleteBook}
        ></Modal>
      </div>
    </>
  );
};

export default Book;
