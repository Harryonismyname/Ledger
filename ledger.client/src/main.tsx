import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
import Navbar from './Navbar.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>

        <script
            src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
            ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
            ></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
    <Navbar />
  </StrictMode>,
)

    //< App />
