import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { OpcionesProvider } from './context/opcionesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
      <OpcionesProvider>
       <App />
      </OpcionesProvider>
     
    </React.StrictMode>
,
)
