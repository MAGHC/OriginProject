import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';

import { Cart, ProductDetail, ProductNew, Home } from './pages';
import ProtectedRouter from './pages/ProtectedRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/product/new',
        element: (
          <ProtectedRouter>
            <ProductNew></ProductNew>
          </ProtectedRouter>
        ),
      },
      {
        path: '/cart',
        element: (
          <ProtectedRouter>
            <Cart></Cart>
          </ProtectedRouter>
        ),
      },
      { path: '/product/:id', element: <ProductDetail></ProductDetail> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
