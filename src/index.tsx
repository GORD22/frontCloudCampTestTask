import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/style/index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HashRouter basename='/start'>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </BrowserRouter>
  </React.StrictMode>
);
