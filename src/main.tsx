import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer:rootReducer,
});
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <Provider store={store}>
   <React.StrictMode>
    <BrowserRouter>
     <App/>
     <Toaster/>
    </BrowserRouter>
  </React.StrictMode>
 </Provider>
);
