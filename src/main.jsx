import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import MainPage from './pages/MainPage.jsx'
import Team from './pages/Team.jsx'
import Membership from './pages/Membership.jsx'
import About from './pages/About.jsx'
import App from './layout/App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index element={ <MainPage /> } />
      <Route path='our team' element={ <Team /> } />
      <Route path='membership' element={ <Membership /> } />
      <Route path='about us' element={ <About /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
