import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar.jsx'
import Slider from './components/slider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Slider />
  </StrictMode>,
)
