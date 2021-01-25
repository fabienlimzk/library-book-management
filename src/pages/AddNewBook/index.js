import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { addNewBook } from '../../reducers/Books/actions';
import * as Labels from '../../constants/Labels';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const AddNewBook = (props) => {
  const [values, setValues] = useState({
    id: 0,
    title: '',
    description: '',
  });

  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleIdChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      id: event.target.value,
    }));
  };

  const handleTitleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      title: event.target.value,
    }));
  };

  const handleDescriptionChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      description: event.target.value,
    }));
  };

  const handleSubmitButton = () => {
    props.addNewBook(values);
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <div>
        <TextInput
          label={Labels.ID}
          onChange={handleIdChange}
          inputRef={inputEl}
          name='id'
          value={values.id}
        />
        <TextInput
          label={Labels.TITLE}
          onChange={handleTitleChange}
          inputRef={inputEl}
          name='title'
          value={values.title}
        />
        <TextInput
          label={Labels.DESCRIPTION}
          onChange={handleDescriptionChange}
          inputRef={inputEl}
          name='description'
          value={values.description}
        />
      </div>
      <div>
        <Button name={Labels.SUBMIT} onClick={handleSubmitButton} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allBooks: state.booksReducer.allBooks,
});

const mapDispatchToProps = (dispatch) => ({
  addNewBook: (book) => dispatch(addNewBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewBook);
