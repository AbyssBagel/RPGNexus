import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/root';
import NotFoundPage from './Routes/NotFound/notFoundPage';

import HomePage from './Components/Home/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'dashboard',
        element: <></>,
      },
      {
        path: 'about',
        element: <></>,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

function App() {
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
}

export default App;
