import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store/configureStore.dev';
import routes from './routes';
import './index.css';
import {loadProduct} from './actions/productActions';
import App from './components/App';

const store = configureStore();
//store.dispatch(loadProduct());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
