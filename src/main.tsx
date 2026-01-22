import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Board from '../src/routes/board.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage />, // Obsługa błędów
    children: [
      {
        index: true,
        element: <Board />,
      },
      // {
      //   path: "/add-task",
      //   element: <AddTask />,
      // }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)