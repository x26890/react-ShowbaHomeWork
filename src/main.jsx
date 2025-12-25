import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/all.scss'
// 核心：加上下面這一行引入
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
