import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Christmas.css'; // 聖誕節特別樣式
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Welcome from './components/Welcome';
import Activity from './components/Activity';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import MonthlyDM from './pages/MonthlyDM'; // 引入您新建立的每月DM組件
import Contact from './pages/Contact';

// --- 首頁組件：完全保留您原本的所有邏輯與內容 ---
function Home() {
  return (
    <div className="index_all">
      <Navbar />
      <Carousel />
      <Welcome />

      {/* LINE QR Code 彈出視窗 */}
      <div className="modal fade" id="lineModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-secondary">
              <h5 className="modal-title">掃描 QR Code 加入 LINE</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img src="./image/QR.jpg" className="img-fluid rounded" alt="LINE QR Code" />
              <p className="mt-3">掃描上方 QR Code 即可聯繫我們</p>
            </div>
            <div className="modal-footer border-secondary">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>

      {/* 速報美化區塊 */}
      <div className="container my-5">
        <div className="news-flash-card p-4 text-center">
          <div className="d-flex justify-content-center align-items-center mb-2">
            <span className="badge rounded-pill bg-danger me-2 animate-pulse">HOT</span>
            <h2 className="text-warning fw-bold mb-0">速報！！</h2>
          </div>
          <div className="news-date mb-3">
            <span className="text-white fs-5 fw-bold">📅 114/12/25 ~ 115/1/1</span>
          </div>
          <div className="news-content p-3">
            <p className="text-white fs-4 mb-0">
              將舉辦消費 <span className="text-warning fw-bold fs-2">$399</span> 元
              即可參加一次 <span className="text-info fw-bold">抽抽樂</span> 🎁
            </p>
            {/* 這裡新增了備註 */}
            <p className="text-light mb-0" style={{ fontSize: '0.9rem' }}>
              <small className="opacity-75">* 本活動消費金額不含菸酒 *</small>
            </p>

            <p className="text-light mt-2 fs-5">
              獎品多樣化，快來買~ <span className="badge bg-primary">不買可惜喔！</span>
            </p>
          </div>
        </div>
      </div>

      <Activity />
      <Footer />

      {/* 活動 Modal 1, 2, 3 */}
      {[1, 2, 3].map((num) => (
        <div key={num} className="modal fade" id={`activityModal_${num}`} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0 text-center">
                <button type="button" className="btn-close btn-close-white float-end mb-2" data-bs-dismiss="modal"></button>
                <img src={`./image/news/activity${num}.jpg`} className="img-fluid rounded shadow-lg" alt="原圖" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Footer QR Code 專用 Modal */}
      <div className="modal fade" id="footerQRModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-body p-0 text-center">
              <button type="button" className="btn-close btn-close-white float-end mb-2" data-bs-dismiss="modal"></button>
              <img src="./image/QR.jpg" className="img-fluid rounded shadow-lg" alt="QR原圖" />
              <p className="text-white mt-2 fw-bold">建工店 LINE 群組 QR Code</p>
            </div>
          </div>
        </div>
      </div>

      <GoTop />
    </div>
  );
}

// --- App 組件：主路由控管 ---
function App() {
  return (
    <Routes>
      {/* 根目錄顯示首頁內容 */}
      <Route path="/" element={<Home />} />

      {/* /monthly-dm 顯示每月DM內容 */}
      <Route path="/monthly-dm" element={<MonthlyDM />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;