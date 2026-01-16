import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';
import '../App.css';
import '../Christmas.css';

function MonthlyDM() {
  const dmCategories = [
    { id: 1, title: '會員點數30倍送一匙靈系列專區', imgSrc: './image/DM/DM_5.jpg' }, 
    { id: 2, title: '居家生活百貨', imgSrc: './image/DM/DM_2.jpg' },
    { id: 3, title: '衛生紙、寵物食品專區', imgSrc: './image/DM/DM_3.jpg' },
    { id: 4, title: '得意系列商品專區', imgSrc: './image/DM/DM_4.jpg' },
    { id: 5, title: '一匙靈系列專區', imgSrc: './image/DM/DM_1.jpg' },
    { id: 6, title: '舒潔商品優惠專區', imgSrc: './image/DM/DM_6.jpg' },
  ];

  const [currentDM, setCurrentDM] = useState(dmCategories[0].imgSrc);
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="index_all">
      <Navbar />

      <div className="container my-5">
        <div className="row">
          {/* 左側：商品分類項目 */}
          <div className="col-md-3 mb-4">
            <div className="list-group shadow-sm sticky-top" style={{ top: '120px', zIndex: 10 }}>
              <div 
                className="list-group-item text-white fw-bold border-0" 
                style={{ backgroundColor: '#d4af37' }}
              >
                🎁 DM 分類項目
              </div>
              {dmCategories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`list-group-item list-group-item-action ${
                    activeId === item.id ? 'active' : ''
                  }`}
                  style={activeId === item.id ? { backgroundColor: '#3a0d0d', borderColor: '#d4af37', color: '#fff' } : {}}
                  onClick={() => {
                    setCurrentDM(item.imgSrc);
                    setActiveId(item.id);
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* 右側：圖片展示區 */}
          <div className="col-md-9">
            <div className="card shadow-sm border-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)' }}>
              <div className="card-body p-2 text-center">
                {/* 加上 cursor pointer 提示使用者可點擊，並綁定 Bootstrap Modal */}
                <img
                  src={currentDM}
                  className="img-fluid rounded shadow"
                  alt="Monthly DM Content"
                  style={{ width: '100%', transition: 'all 0.3s ease', cursor: 'zoom-in' }}
                  data-bs-toggle="modal"
                  data-bs-target="#dmZoomModal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 彈出原圖的 Modal 視窗 */}
      <div className="modal fade" id="dmZoomModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-body p-0 text-center">
              <button type="button" className="btn-close btn-close-white float-end mb-2" data-bs-dismiss="modal" aria-label="Close"></button>
              <img 
                src={currentDM} 
                className="img-fluid rounded shadow-lg" 
                alt="Original DM" 
                style={{ maxHeight: '90vh' }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <GoTop />
    </div>
  );
}

export default MonthlyDM;