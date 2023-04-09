import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'

import App from './App';
import ContextWheaterProvider from './context/ContextWheaterProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextWheaterProvider>
        <App />
      </ContextWheaterProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
