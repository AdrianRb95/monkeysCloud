import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/main.scss';
import Store from './store';
import * as serviceWorker from './serviceWorker';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

ReactDOM.render(
  <>
    <NotificationContainer />
    <React.StrictMode>
      <Store>
        <App />
      </Store>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
