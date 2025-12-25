import React from 'react';
import { Link } from 'react-router-dom'; // 引入 Link 代替 a 標籤

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark my-nav-bg sticky-top">
      <div className="container flex-column">
        {/* 標題區塊 */}
        <div className="text-center my-3">
          <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
            🎄 小北百貨建工店 <span className="text-warning">(聖誕月促銷!)</span> ❄️
          </Link>
        </div>

        {/* 手機版選單按鈕 */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 選單連結 */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <Link className="nav-link" to="/">首頁</Link>
            </li>
            {/* <li className="nav-item px-3">
              <Link className="nav-link" to="/catalog">最新消息</Link>
            </li> */}
            <li className="nav-item px-3">
              {/* 重點：這裡的路徑必須跟 App.jsx 的 Route path 一致 */}
              <Link className="nav-link" to="/monthly-dm">每月DM</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/contact">聯絡我們</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;