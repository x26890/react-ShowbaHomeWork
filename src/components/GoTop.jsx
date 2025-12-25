import React from 'react';
import { useScrollTop } from '../hooks/useScrollTop';

function GoTop() {
  const { showGoTop, scrollToTop } = useScrollTop(300);

  if (!showGoTop) return null;

  return (
    <div className="go-top-btn" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
      <span>▲ UP</span>
    </div>
  );
}

export default GoTop;