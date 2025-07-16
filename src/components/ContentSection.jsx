import React from 'react';
import { Target, Users, BookOpen, Lightbulb } from 'lucide-react';

const ContentSection = () => {
  return (
    <section id="content" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* 概念與宗旨區塊 */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* 概念區塊 */}
          <div className="slide-in-left">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 glow-effect">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">協會的概念</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                隨著108課綱推行，高中生課業壓力與學習歷程需求皆大增。新課綱下正課堂數減少，學生需額外自行討論才能吸收新知；在如此情況下，「自主學習時間」難以兼顧興趣與成長。
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                本平台旨在提供零門檻的活動與資源，讓全台高中生能同時吸收新知、互相交流、共同成長。
              </p>
            </div>
          </div>

          {/* 宗旨區塊 */}
          <div className="slide-in-right">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 glow-effect">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">協會的宗旨</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                我們致力於透過多元活動，幫助高中生在繁重學業之餘，多向發展興趣，並結識更多志同道合的夥伴。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-gray-800 border border-blue-200/50">
                  多元發展
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium text-gray-800 border border-purple-200/50">
                  興趣探索
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full text-sm font-medium text-gray-800 border border-pink-200/50">
                  夥伴連結
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 特色功能區塊 */}
        <div className="fade-in">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            我們提供的服務
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 活動專區 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">活動專區</h3>
              <p className="text-gray-600 leading-relaxed">
                定期舉辦各類學習活動，包括工作坊、講座、交流會等，讓學生在實作中學習成長。
              </p>
            </div>

            {/* 精選作品 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">精選作品</h3>
              <p className="text-gray-600 leading-relaxed">
                展示學員優秀作品與學習成果，包括文章、專案、創作等，激發更多創意靈感。
              </p>
            </div>

            {/* 學習資源 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">學習資源</h3>
              <p className="text-gray-600 leading-relaxed">
                提供豐富的學習資料與工具，協助學生在自主學習時間中找到方向與動力。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

