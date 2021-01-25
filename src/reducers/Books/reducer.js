import { ADD_NEW_BOOK, BORROW_BOOK, RETURN_BOOK } from './actions';

const initialState = {
  allBooks: [
    {
      id: 0,
      title: 'How to Train a Dragon?',
      description: 'asdasdasdasdasdasdasdasd',
    },
    {
      id: 1,
      title: 'How to Train a Dragon again?',
      description: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
    },
    {
      id: 2,
      title: 'How to Train a Dragon again and again?',
      description:
        'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
    },
    {
      id: 3,
      title: 'How to Train a Dragon again and again and again?',
      description:
        'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd',
    },
  ],
  borrowedBooks: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_BOOK:
      return {
        allBooks: [...state.allBooks, action.payload],
        borrowedBooks: [...state.borrowedBooks],
      };
    case BORROW_BOOK:
      return {
        borrowedBooks: [...state.borrowedBooks, action.payload],
        allBooks: [...state.allBooks.filter((book) => book !== action.payload)],
      };
    case RETURN_BOOK:
      return {
        borrowedBooks: [
          ...state.borrowedBooks.filter((book) => book !== action.payload),
        ],
        allBooks: [...state.allBooks, action.payload],
      };
    default:
      return state;
  }
};

export default booksReducer;
