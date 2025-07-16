import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import MeteorAnimation from './components/MeteorAnimation';
import './App.css';

function App() {
  const [showMeteor, setShowMeteor] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleMeteorComplete = () => {
    setShowMeteor(false);
    setShowContent(true);
  };

  return (
    <div className="stardust-bg">
      {/* 流星動畫 */}
      {showMeteor && <MeteorAnimation onComplete={handleMeteorComplete} />}
      
      {/* 主要內容 */}
      {showContent && (
        <>
          <Header />
          <main>
            <Hero />
            <ContentSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
