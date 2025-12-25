import React from 'react';

function Carousel() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className='container mt-4 mb-5'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* 指示器 */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* 圖片內容 */}
        <div className="carousel-inner">
          {images.map((num, index) => (
            <div key={num} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img 
                src={`./image/banner/banner${num}.jpg`} 
                className="d-block w-100" 
                alt={`廣告${num}`} 
              />
            </div>
          ))}
        </div>

        {/* 左右控制鈕 */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;