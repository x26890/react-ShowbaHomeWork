import React from 'react';

function Welcome() {
  return (
    <>
      {/* 歡迎區塊 */}
      <div className="container my-5">
        <div className="welcome-section text-center p-5">
          <h2 className="fw-bold mb-3 text-warning">歡迎來到小北百貨建工店！</h2>
          <p className="text-white mb-4">
            有任何問題想詢問嗎？下方的 QR CODE 掃描加入我們：任何商品、尋人或是售後服務。
          </p>
          <button
            className="btn btn-warning fw-bold px-4 py-2"
            data-bs-toggle="modal"
            data-bs-target="#lineModal"
          >
            加入我們的LINE群組
          </button>
        </div>
      </div>

      {/* LINE QR Code 彈出視窗 (Modal) */}
      <div className="modal fade" id="lineModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-secondary">
              <h5 className="modal-title">掃描 QR Code 加入 LINE</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <img src="/image/QR.jpg" className="img-fluid rounded" alt="LINE QR Code" />
              <p className="mt-3">掃描上方 QR Code 即可聯繫我們</p>
            </div>
            <div className="modal-footer border-secondary">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;