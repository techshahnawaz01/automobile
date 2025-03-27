import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css';
// import './assets/css/bootstrap.min.css';
import './assets/css/fontawesome.min.css';
import './assets/css/animate.css';
import './assets/css/slick.min.css';
import './assets/css/odometer.css';
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
