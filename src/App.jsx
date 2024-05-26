import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from '@/Routes/root'
import NotFoundPage from '@/Routes/NotFound/notFoundPage'
import CharacterCreation from '@/Routes/Characters/CharacterCreation'
import UsersLogin from '@/Routes/Users/UsersLogin'

import HomePage from '@/Components/Home/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'users',
        children: [
          {
            path: 'login',
            element: <UsersLogin />,
          },
        ],
      },
      {
        path: 'characters',
        children: [
          {
            path: 'builder',
            children: [
              {
                path: 'dnd',
                element: <CharacterCreation />,
              },
            ],
          },
          {
            path: 'list',
            element: <></>,
          },
        ],
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
])

function Router() {
  return <RouterProvider router={router}></RouterProvider>
}

function App() {
  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  )
}

export default App
