import React from 'react';

function MapSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.2590212046465!2d120.30873437590203!3d22.644158930335044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04df77227d89%3A0xc682910795493414!2z5bCP5YyX5百貨LeW7uuefpeW6lw!5e0!3m2!1szh-TW!2stw!4v1700000000000!5m2!1szh-TW!2stw";
  const googleMapLink = "https://maps.app.goo.gl/9Zp7M6V6vW5wG6Xy8";

  return (
    <section className="position-relative overflow-hidden pt-5 mb-5 rounded-4 shadow-lg" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container-fluid p-4">
        <div className="row align-items-center gx-5">
          <div className="col-lg-7 col-12 mb-5 mb-lg-0 text-white">
            <div className="p-4 p-xl-5 bg-dark bg-opacity-50 rounded-4 shadow-lg backdrop-blur">
              <div className="d-flex align-items-center mb-4 justify-content-center">
                <div className="bg-primary bg-gradient p-3 rounded-circle me-3">
                  <i className="bi bi-geo-alt-fill fs-2"></i>
                </div>
                <h1 className="display-5 fw-bold mb-0">小北建工店</h1>
              </div>

              <div className="bg-white text-dark p-4 rounded-3 shadow-sm">
                <h3 className="h5 text-primary mb-3"><i className="bi bi-signpost-split me-2"></i>交通與周邊</h3>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-hospital text-info me-3 fs-4"></i>
                    <div><span className="d-block fw-bold">高雄醫學大學附設醫院</span><small className="text-muted">步行約8分鐘</small></div>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-cart text-success me-3 fs-4"></i>
                    <div><span className="d-block fw-bold">全聯福利中心</span><small className="text-muted">建工門市(50公尺)</small></div>
                  </li>
                </ul>
                <h4 className="h6 text-secondary mb-3"><i className="bi bi-bus-front me-2"></i>公車路線</h4>
                <div className="row g-2">
                  <div className="col-12 col-xl-6">
                    <div className="d-flex align-items-center p-2 bg-primary bg-opacity-10 rounded">
                      <span className="badge bg-primary me-2">紅28</span><span>高醫大站</span>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="d-flex align-items-center p-2 bg-info bg-opacity-10 rounded">
                      <span className="badge bg-info me-2">168西</span><span>三民市場站</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12">
            <div className="rounded-4 overflow-hidden shadow-lg border border-light-10 bg-dark p-3">
              <h4 className="text-info mb-3"><i className="bi bi-compass me-2"></i>門市定位導航</h4>
              <div className="ratio ratio-4x3 rounded-3 overflow-hidden">
                <iframe src={mapUrl} style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
              <div className="mt-3 text-end">
                <a href={googleMapLink} target="_blank" rel="noreferrer" className="btn btn-info text-white">
                  <i className="bi bi-box-arrow-up-right me-2"></i>開啟 Google 地圖
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;