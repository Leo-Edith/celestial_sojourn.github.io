import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-sm border-t border-white/20 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 品牌資訊 */}
          <div>
            <div className="stardust-logo text-2xl font-bold mb-4">
              星途
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              青年發展協會致力於為高中生提供零門檻的自主學習活動與資源，讓全台高中生能同時吸收新知、互相交流、共同成長。
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center">
                  <span>首頁</span>
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center">
                  <span>活動專區</span>
                </a>
              </li>
              <li>
                <a href="#featured" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center">
                  <span>精選作品</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center">
                  <span>常見 Q&A</span>
                </a>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">聯絡我們</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@teens-dev-assoc.org"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                contact@teens-dev-assoc.org
              </a>
              <p className="text-gray-600 text-sm">
                遇到問題嗎？歡迎加入我們的社群與我們聯繫！
              </p>
            </div>
          </div>
        </div>

        {/* 社群媒體 */}
        <div className="border-t border-gray-200/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-600 font-medium">關注我們：</span>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/teens_dev_assoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-600 group-hover:text-pink-600" />
                </a>
                <a
                  href="https://facebook.com/teens_dev_assoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </a>
                <a
                  href="https://threads.net/@teens_dev_assoc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-colors group"
                  aria-label="Threads"
                >
                  <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                </a>
              </div>
              <span className="text-sm text-gray-500">@teens_dev_assoc</span>
            </div>

            <div className="text-sm text-gray-500">
              © 2024 星途 - 青年發展協會. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

