import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main application component
import './index.css'; // Global CSS styles
import { Toaster } from "react-hot-toast"; // Toast notifications component
import { Provider } from "react-redux"; // Provider component for Redux store
import rootReducer from './reducer'; // Root reducer for Redux store
import { configureStore } from '@reduxjs/toolkit'; // Function to configure the Redux store

// Configure the Redux store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

import { BrowserRouter } from 'react-router-dom'; // BrowserRouter component for routing

// Render the application
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}> {/* Provide the Redux store to the application */}
    <React.StrictMode> {/* StrictMode helps identify potential problems in the application */}
      <BrowserRouter> {/* Router component to handle routing in the application */}
        <App /> {/* Main application component */}
        <Toaster /> {/* Toast notifications component */}
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
