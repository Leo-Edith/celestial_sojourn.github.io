import React, { useEffect, useState } from 'react';

const MeteorAnimation = ({ onComplete }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 延遲一點時間開始動畫
    const startTimer = setTimeout(() => {
      setIsActive(true);
    }, 500);

    // 動畫完成後的回調
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 4000); // 3秒動畫 + 1秒緩衝

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`meteor-animation ${isActive ? 'active' : ''}`}>
      <div className="relative w-full h-full">
        {/* 流星核心 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-sm"></div>
        
        {/* 流星尾巴 */}
        <div className="absolute -top-2 -left-2 w-24 h-2 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full opacity-80 rotate-45"></div>
        <div className="absolute -top-4 -left-4 w-32 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full opacity-60 rotate-45"></div>
        
        {/* 光暈效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-full scale-150 blur-lg"></div>
      </div>
    </div>
  );
};

export default MeteorAnimation;

