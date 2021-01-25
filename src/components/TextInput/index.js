import React from 'react';

const TextInput = (props) => {
  const { id, label, onChange, inputRef } = props;
  return (
    <div id={id}>
      <label>{`${label}: `}</label>
      <input type='text' onChange={onChange} ref={inputRef} />
    </div>
  );
};

export default TextInput;
