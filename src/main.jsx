import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import NeracaPage from './pages/NeracaPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/neraca" element={<NeracaPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)