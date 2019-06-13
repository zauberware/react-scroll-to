import React from 'react';
import ReactDOM from 'react-dom';

import { ScrollToProvider } from '@zauberware/react-scroll-to';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ScrollToProvider>
      <App />
    </ScrollToProvider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
