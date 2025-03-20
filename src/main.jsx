import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import VistaPrincipal from './pages/VistaPrincipal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VistaPrincipal />
  </StrictMode>,
)
