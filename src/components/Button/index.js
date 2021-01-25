import React from 'react';

const Button = (props) => {
  const { id, name, onClick } = props;
  return (
    <button id={id} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
