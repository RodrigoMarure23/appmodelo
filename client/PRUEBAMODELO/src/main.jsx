import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//styles

import 'bootstrap/dist/css/bootstrap.min.css'
//rutas
import Paths from './routes'
//contexto
import { ProductsProvider } from './context/ProductsContext'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <React.StrictMode>
    <ProductsProvider> {/* contexto de productosvendidos */}
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </ProductsProvider>

  </React.StrictMode>,
)
