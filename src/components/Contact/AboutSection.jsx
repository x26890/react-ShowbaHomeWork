import React from 'react';

const FeatureCard = ({ title, icon, colorClass, children }) => (
  <div className="col-12 col-md-6">
    <div className={`card h-100 border-${colorClass} bg-transparent text-white shadow`} style={{ border: '1px solid' }}>
      <div className="card-body text-center p-4">
        <div className={`bg-${colorClass} rounded-circle p-3 d-inline-block mb-3`}>
          <i className={`bi bi-${icon} fs-2 text-dark`}></i>
        </div>
        <h3 className="card-title mb-3">{title}</h3>
        {children}
      </div>
    </div>
  </div>
);

function AboutSection() {
  return (
    <div className="p-5 bg-dark bg-gradient rounded-4 shadow-lg mb-5" style={{ backdropFilter: 'blur(10px)', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
      <h2 className="display-4 text-center text-warning mb-5 fw-bold">
        <i className="bi bi-shop-window me-3"></i>關於我們
      </h2>
      <p className="lead text-center text-white mb-5 px-md-5 border-start border-end border-3 border-warning py-3">
        源自台南的<span className="text-warning fw-bold"> 24小時生活補給站</span>，自1994年創立以來<br />
        全台門市網絡，提供<span className="text-info"> 10大品類</span>、超過<span className="text-info"> 30,000種商品</span>
      </p>

      <div className="row g-4 text-white">
        <FeatureCard title="物美價廉" icon="tag" colorClass="warning">
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-arrow-right-circle me-2 text-warning"></i>每月300+促銷商品</li>
            <li className="mb-2"><i className="bi bi-arrow-right-circle me-2 text-warning"></i>買貴退差價保證</li>
            <li><i className="bi bi-arrow-right-circle me-2 text-warning"></i>全台聯合特賣</li>
          </ul>
        </FeatureCard>

        <FeatureCard title="全年無休" icon="clock" colorClass="info">
          <div className="d-grid gap-2">
            <span className="badge bg-warning text-dark mb-2">24H緊急供應</span>
            <span className="badge bg-info text-dark mb-2">颱風天照常營業</span>
          </div>
        </FeatureCard>

        <FeatureCard title="商品齊全" icon="box-seam" colorClass="success">
          <div className="row g-2 text-start">
            {['五金工具', '寵物用品', '廚房器具', '汽車精品'].map(item => (
              <div key={item} className="col-6"><div className="alert alert-success py-1 mb-0 small text-center">{item}</div></div>
            ))}
          </div>
        </FeatureCard>

        <FeatureCard title="服務宗旨" icon="heart" colorClass="danger">
          <div className="btn-group-vertical w-100">
            <button className="btn btn-outline-light mb-2 text-start"><i className="bi bi-credit-card me-2"></i>15+支付方式</button>
            <button className="btn btn-outline-light mb-2 text-start"><i className="bi bi-truck me-2"></i>大宗商品運送</button>
            <button className="btn btn-outline-light text-start"><i className="bi bi-chat-dots me-2"></i>24H客服</button>
          </div>
        </FeatureCard>
      </div>
    </div>
  );
}

export default AboutSection;