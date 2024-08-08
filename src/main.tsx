import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the application
import App from './App'; // Import the main App component
import './index.css'; // Import global CSS styles
import { Toaster } from "react-hot-toast"; // Import Toaster for toast notifications
import { Provider } from "react-redux"; // Import Provider to connect Redux store to React
import rootReducer from './reducer'; // Import the rootReducer for Redux
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore to create the Redux store

// Create and configure the Redux store with the rootReducer
const store = configureStore({
  reducer: rootReducer,
});

import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for handling routing

// Render the React application
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}> {/* Provide the Redux store to the application */}
    <React.StrictMode> {/* Enable strict mode to help with identifying potential problems */}
      <BrowserRouter> {/* Set up routing for the application */}
        <App /> {/* Render the main App component */}
        <Toaster /> {/* Render Toaster for toast notifications */}
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
