import * as Yup from "yup";

export const formValidation = Yup.object({
  title: Yup.string()
    .required("Please enter book title")
    .min(2, "Title should be atleast 2 characters long")
    .max(30, "Title cannot be longer than 30 characters"),
  author: Yup.string()
    .required("Please enter author of book")
    .min(2, "Author name should be atleast 2 characters long")
    .max(30, "Author name cannot be longer than 30 characters"),
  year: Yup.number()
    .required("Please enter year of publish")
    .min(1200)
    .max(2023),
  isbn: Yup.string()
    .required("Please enter ISBN")
    .min(2, "ISBN should be atleast 2 characters long")
    .max(10, "ISBN cannot be longer than 10 characters")
});

export const formConfig = [
  {
    type: "text",
    valueKey: "title",
    fieldProps: {
      label: "Enter title of book",
      fullWidth: true,
      required: true
    }
  },
  {
    type: "text",
    valueKey: "author",
    fieldProps: {
      label: "Enter author of book",
      fullWidth: true,
      required: true
    }
  },
  {
    type: "text",
    valueKey: "year",
    fieldProps: {
      label: "Enter year of publishing",
      fullWidth: true,
      required: true
    }
  },
  {
    type: "text",
    valueKey: "isbn",
    fieldProps: {
      label: "Enter ISBN",
      fullWidth: true,
      required: true
    }
  }
];
