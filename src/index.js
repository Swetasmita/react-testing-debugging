import React from 'react';
import ReactDOM from 'react-dom/client'; // updated import
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root')); // updated method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: If you're using service workers, make sure they're compatible
// with React 18. You can keep this as is or unregister:
serviceWorker.unregister();
