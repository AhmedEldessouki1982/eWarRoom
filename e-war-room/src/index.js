import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
//react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//importing app pages
import Register from './pages/Register';
import Login from './pages/Login';
import AppProvider from './hooks/AppProvider ';

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <AppProvider> <App/> </AppProvider>
  },
  {
    path: "/login",
    element: <AppProvider> <Login /> </AppProvider>
  },
  {
    path: "/register",
    element: <Register />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
  );
