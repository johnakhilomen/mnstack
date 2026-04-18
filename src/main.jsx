import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './i18n/index.js'
import './index.css'
import Landing from './pages/Landing'
import Manifesto from './pages/Manifesto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/manifesto" element={<Manifesto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
