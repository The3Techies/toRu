import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MyProvider } from "./State/MyContext";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyProvider >
      <App />
    </MyProvider>
  </React.StrictMode>,
)
