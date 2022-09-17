// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import store from './store';
//
import App from './App';
import * as serviceWorker from './serviceWorker';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();
