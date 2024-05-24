import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/root';
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
