import React from 'react'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import App from './App'


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/create' element={<Create />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default Router