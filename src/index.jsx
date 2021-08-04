import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { Provider } from 'react-redux';
import App from './App';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import store from './store';

dayjs.locale('ru');
WebFontLoader.load({ google: { families: ['Open Sans:300,400,700'] } });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
