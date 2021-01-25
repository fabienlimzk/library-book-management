export const ADD_NEW_BOOK = 'ADD_NEW_BOOK';
export const BORROW_BOOK = 'BORROW_BOOK';
export const RETURN_BOOK = 'RETURN_BOOK';

export const addNewBook = (book) => (dispatch) => {
  dispatch({
    type: ADD_NEW_BOOK,
    payload: book,
  });
};

export const borrowBook = (book) => (dispatch) => {
  dispatch({
    type: BORROW_BOOK,
    payload: book,
  });
};

export const returnBook = (book) => (dispatch) => {
  dispatch({
    type: RETURN_BOOK,
    payload: book,
  });
};
