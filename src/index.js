import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import './styles/normalize.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { forbiddentWordsMiddleWare } from './middlewares/forbiddenWords.middleware';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, forbiddentWordsMiddleWare)
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
