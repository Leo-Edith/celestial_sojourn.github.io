import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 主標題區域 */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="stardust-logo text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
            星途
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4">
            Celestial Sojourn
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            青年發展協會 - 為高中生提供零門檻的自主學習活動與資源
          </p>
        </div>

        {/* 向下箭頭 */}
        <div className="fade-in" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={scrollToContent}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 group"
            aria-label="向下滾動"
          >
            <ArrowDown className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors animate-bounce" />
          </button>
        </div>
      </div>

      {/* 裝飾性元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 浮動的光點 */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;

