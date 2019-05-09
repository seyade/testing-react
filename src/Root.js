import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
// import reduxPromise from 'redux-promise';

import reducers from 'reducers';

export default ({ children, inititialState = {} }) => {
  const store = createStore(
    reducers,
    inititialState,
    applyMiddleware(async, stateValidator)
  );

  return <Provider store={store}>{children}</Provider>;
};
