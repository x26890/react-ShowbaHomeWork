import React from 'react';

function Footer() {
  return (
    <>
      <footer className="py-5 bg-dark text-light mt-5">
        <div className="container border-bottom">
          <div className="row gy-4">
            {/* 快速連結 */}
            <div className="col-lg-4 col-md-4 col-12 mb-4 text-start">
              <h4 className="text-info h5 border-start border-3 border-info ps-2 mb-3">QUICK LINKS</h4>
              <ul className="list-unstyled ps-2">
                <li className="pb-3"><a href="#" className="link-secondary text-decoration-none">首頁</a></li>
                <li className="pb-3"><a href="#" className="link-secondary text-decoration-none">最新消息</a></li>
                <li className="pb-3"><a href="hero.html" className="link-secondary text-decoration-none">門市資訊</a></li>
                <li className="pb-3"><a href="#" className="link-secondary text-decoration-none">每月DM</a></li>
              </ul>
            </div>

            {/* 資訊區 */}
            <div className="col-lg-4 col-md-4 col-12 mb-4 text-start">
              <h4 className="text-info h5 border-start border-3 border-info ps-2 mb-3 pe-lg-4">INFORMATION</h4>
              <ul className="list-unstyled ps-2">
                <li className="pb-3">
                  <span className="text-secondary border-2 border-end pe-3 d-inline-block">小北總部</span><br />
                  <a href="#" className="text-info text-decoration-none">台南市安南區科技公園大道15號</a>
                </li>
                <li className="pb-3">
                  <span className="text-secondary border-2 border-end pe-3 d-inline-block">客服專線</span><br />
                  <a href="tel:0800002198" className="text-info text-decoration-none">0800-002-198</a>
                </li>
                <li className="pb-3">
                  <span className="text-secondary border-2 border-end pe-3 d-inline-block">服務時間</span><br />
                  <p className="text-info m-0 small">週一至週五｜08:00-12:00；13:00-17:00</p>
                </li>
              </ul>
            </div>

            {/* QR Code 區 */}
            <div className="col-lg-4 col-md-4 col-12 ps-lg-5 mt-md-4 mt-3 text-start">
              <h4 className="text-info h5 border-start border-3 border-info ps-2 mb-3">建工店小北百貨群組</h4>
              <div style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#footerQRModal">
                <img src="./image/QR.jpg" alt="LINE群組QR碼" className="img-fluid w-50 mb-5 rounded shadow" />
              </div>
            </div>
          </div>
        </div>
        
        {/* 版權聲明 */}
        <div className="text-center mt-5">
          <p className="text-light small m-0 px-3">copyright © 2025 小北百貨建工店, 版權所有。本網站僅用於網頁製作練習，無任何商業行為。</p>
        </div>
      </footer>

      {/* Footer 專用 QR Modal */}
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
    </>
  );
}

export default Footer;