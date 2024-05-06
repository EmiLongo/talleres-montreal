import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/navBar/NavBar.jsx'
import Hero from './components/hero/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Hero />
  </React.StrictMode>,
)
