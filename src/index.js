import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './dist/store';


sessionStorage.setItem('access-token',"204f63618da7bd1db92aa9d4f326b2d8");
sessionStorage.setItem('user-name',"Atshaya");
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
