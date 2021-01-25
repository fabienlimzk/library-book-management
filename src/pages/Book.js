import React from 'react';
import Button from '../components/Button/index';
import * as Labels from '../constants/Labels';

const Book = (props) => {
  return (
    <div>
      <ul>
        <li>
          <div>
            {Labels.TITLE}: {props.title}
          </div>
          <div>
            {Labels.DESCRIPTION}: {props.description}
          </div>
          <Button name={props.btnLabel} onClick={props.btnClicked} />
          <br />
          <br />
        </li>
      </ul>
    </div>
  );
};

export default Book;
