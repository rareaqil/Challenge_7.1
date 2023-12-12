import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPages from './pages/user/home.tsx'
import CariMobil from './pages/user/searchCar.tsx'
import DashboardAdmin from './pages/dashboard/admin.tsx'

import DashboardCars from './pages/dashboard/cars.tsx'
import DashboardLayoutAdmin from './layouts/admin.tsx'

import "./assets/lbd.css"
import "./assets/animate.min.css"
import "./assets/demo.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPages />,
  },
  {
    path: '/cars',
    element: <CariMobil />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayoutAdmin />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardAdmin />
      },
      {
        path: '/dashboard/cars',
        element: <DashboardCars />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
