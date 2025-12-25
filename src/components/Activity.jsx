import React from 'react';

// 定義單個卡片元件，使用 props 接收資料
function ActivityCard({ id, badge, badgeColor, imgSrc, title }) {
  return (
    <div className="col-12 col-md-4">
      <div 
        className="activity-card bg-white p-3 shadow-sm h-100" 
        style={{ cursor: 'pointer' }} 
        data-bs-toggle="modal" 
        data-bs-target={`#activityModal_${id}`}
      >
        <span className={`badge ${badgeColor} mb-2 text-white`}>{badge}</span>
        <img src={imgSrc} className="img-fluid rounded" alt={title} />
        <h5 className="mt-3 text-dark fw-bold">{title}</h5>
      </div>
    </div>
  );
}

function Activity() {
  // 將資料整理成陣列，方便管理
  const activities = [
    { id: 1, badge: "最新消息", badgeColor: "bg-info", imgSrc: "./image/news/activity1.jpg", title: "小北會員福利大升級～" },
    { id: 2, badge: "熱門預購", badgeColor: "bg-info", imgSrc: "./image/news/activity2.jpg", title: "美味年菜預購中～" },
    { id: 3, badge: "感謝祭", badgeColor: "bg-info", imgSrc: "./image/news/activity3.jpg", title: "小北歲末感謝祭大回饋～" },
  ];

  return (
    <>
      <div className="container my-5 text-center">
        <h2 className="text-white fw-bold mb-4">最新活動 / 消息公告</h2>
        <div className="row g-4">
          {activities.map((item) => (
            <ActivityCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* 活動原圖 Modal 區域 */}
      {activities.map((item) => (
        <div key={item.id} className="modal fade" id={`activityModal_${item.id}`} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0">
              <div className="modal-body p-0 text-center">
                <button type="button" className="btn-close btn-close-white float-end mb-2" data-bs-dismiss="modal"></button>
                <img src={item.imgSrc} className="img-fluid rounded shadow-lg" alt="原圖" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Activity;