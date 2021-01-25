import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import AddNewBook from '../pages/AddNewBook/index';
import AllBooks from '../pages/AllBooks';

import * as Labels from '../constants/Labels';
import * as Paths from './index';

const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <h1>{Labels.APP_NAME}</h1>
        <ul>
          <li>
            <NavLink to={Paths.ALL_BOOKS}>{Labels.ALL_BOOKS}</NavLink>
          </li>
          <li>
            <NavLink to={Paths.ADD_NEW_BOOK}>{Labels.ADD_NEW_BOOK}</NavLink>
          </li>
        </ul>
        <div>
          <Route exact path={Paths.ALL_BOOKS} component={AllBooks} />
          <Route path={Paths.ADD_NEW_BOOK} component={AddNewBook} />
        </div>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
