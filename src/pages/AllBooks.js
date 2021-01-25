import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import { borrowBook, returnBook } from '../reducers/Books/actions';
import * as Labels from '../constants/Labels';

const AllBooks = (props) => {
  const handleBorrowButton = (book) => {
    props.borrowBook(book);
  };

  const handleReturnButton = (book) => {
    props.returnBook(book);
  };

  return (
    <div>
      <h2>All Books</h2>
      <div>
        <h3>Available</h3>
        {props.allBooks.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            description={book.description}
            btnClicked={() => handleBorrowButton(book)}
            btnLabel={Labels.BORROW}
          />
        ))}
      </div>
      <div>
        <h3>Not Available</h3>
        {props.borrowedBooks &&
          props.borrowedBooks.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              description={book.description}
              btnClicked={() => handleReturnButton(book)}
              btnLabel={Labels.RETURN}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allBooks: state.booksReducer.allBooks,
  borrowedBooks: state.booksReducer.borrowedBooks,
});

const mapDispatchToProps = (dispatch) => ({
  borrowBook: (book) => dispatch(borrowBook(book)),
  returnBook: (book) => dispatch(returnBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks);
