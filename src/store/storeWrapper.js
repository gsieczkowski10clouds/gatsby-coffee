import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducesrs';

let enhancer = applyMiddleware(reduxThunk);
if( process.env.NODE_ENV === 'development' ){
  enhancer = composeWithDevTools(enhancer);
}

const store = createStore(reducer, enhancer);

export default ({ element }) => {
  return (
    <Provider store={store}>{element}</Provider>
  )
}