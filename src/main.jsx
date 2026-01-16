import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/all.scss'
// 1. 改成引入 HashRouter
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. 使用 HashRouter。注意：HashRouter 不需要設定 basename！ */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)