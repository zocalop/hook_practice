import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './Components/HookPractice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter />
  </StrictMode>,
)
