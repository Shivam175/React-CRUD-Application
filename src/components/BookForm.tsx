import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import BooksList from "./BooksList";
import { BookInterface, FormBook } from "../@types/book";
import { ReactForm } from "react-forms-lite";
import { formValidation, formConfig } from "./constants";
import clsx from "clsx";

type BookFormProps = {
  book?: BookInterface;
  handleOnSubmit: (book: BookInterface) => void;
};

const BookForm: React.FC<BookFormProps> = ({ book, handleOnSubmit }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", e => setMatches(e.matches));
  }, []);

  const initialValues = {
    title: book?.title ?? "",
    author: book?.author ?? "",
    year: book?.year ?? "",
    isbn: book?.isbn ?? ""
  };

  const handleOnSubmitForm = (object: FormBook, resetFormFunction: any) => {
    const values = [object.title, object.author, object.year, object.isbn];
    const allFieldsFilled = values.every(field => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const inputBook: BookInterface = {
        id: book?.id ?? uuidv4(),
        ...object,
        year: Number(object.year)
      };
      handleOnSubmit(inputBook);
      resetFormFunction(initialValues);
    }
  };

  const inputFormBody = (
    <ReactForm
      formId="Input Form"
      config={formConfig}
      initialValues={initialValues}
      validationSchema={formValidation}
      enableReinitialize={true}
      onSubmit={(values: FormBook, { resetForm }: any) =>
        handleOnSubmitForm(values, resetForm)
      }
      actionConfig={{
        actionContent: (
          <>
            <br />
            <Button
              variant="primary"
              type="submit"
              onClick={() => {}}
              className="bg-snowWhite hover:bg-blue-500 hover:text-white text-blue-700 font-semibold border border-blue-500 hover:border-transparent rounded"
            >
              {book ? "Save Changes" : "Submit"}
            </Button>
          </>
        )
      }}
    />
  );

  const cls = !matches ? { padding: "20px" } : { padding: "32px" };

  return (
    <div>
      <div className="row justify-content-md-center">
        <div className={clsx("col-md-5", { ["col-md-6"]: !matches })}>
          {matches ? <BooksList /> : null}
        </div>
        <div className={clsx("col-md-7", { ["col-md-6"]: !matches })}>
          <div className="row justify-content-md-center">
            <Card className="book rounded overflow-hidden shadow-lg w-full">
              <Card.Body style={cls}>
                <Card.Title className="font-bold text-xl mb-2">
                  {book ? "Edit " : "Create "} Book
                </Card.Title>
                <div className="book-details text-gray-700 text-base">
                  <hr />
                  <div className="mx-3">
                    <div>{inputFormBody}</div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
        <div className={clsx("col-md-5", { ["col-md-6"]: !matches })}>
          {!matches ? <BooksList /> : null}
        </div>
      </div>
    </div>
  );
};

export default BookForm;
