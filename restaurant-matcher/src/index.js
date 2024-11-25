import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import './index.css'; // Import styles
import App from './App'; // Import the main App component
import { Provider } from 'react-redux'; // Import Provider for Redux
import store from './redux/store'; // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

