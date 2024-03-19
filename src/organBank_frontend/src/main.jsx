import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import './index.css'
import Router from './Router';
import { Provider } from 'react-redux';
import store from './features/navSlice'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/home' element={<App />} />
        {/* <Route path='/create' element={<Create />} /> */}

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

