import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  RouterProvider } from 'react-router-dom';
import { router } from './router/router.jsx'
import { Provider } from 'react-redux';
import { store } from './app/store';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
