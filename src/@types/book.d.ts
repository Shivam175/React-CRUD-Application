export interface BookInterface {
  id: string;
  title: string;
  author: string;
  year: number;
  isbn: string;
}

export type FormBook = {
  title: string;
  author: string;
  year: number;
  isbn: string;
};

export interface AppState {
  books: BookInterface[];
  modalState: boolean;
  deleteID: string;
}
