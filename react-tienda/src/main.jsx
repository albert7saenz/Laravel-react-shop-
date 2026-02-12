import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { TiendaProvider } from './context/TiendaProvider.jsx'
import router from './router.jsx'

import './index.css'

import Layout from './layouts/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TiendaProvider>
      <RouterProvider router={router}/>
    </TiendaProvider>
  </StrictMode>,
)
