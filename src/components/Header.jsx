import React, { useState } from 'react';
import { Menu, X, Home, Calendar, Award, HelpCircle, Instagram, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="stardust-logo text-2xl md:text-3xl font-bold">
            星途
          </div>
        </div>

        {/* Menu Button */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="menu-dots p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
            aria-label="選單"
          >
            <div className="menu-dot"></div>
            <div className="menu-dot"></div>
            <div className="menu-dot"></div>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 overflow-hidden">
              <div className="p-2">
                <a
                  href="#home"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100/50 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                  <span className="text-gray-800 group-hover:text-purple-600">首頁</span>
                </a>
                
                <div className="relative group">
                  <a
                    href="#activities"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100/50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Calendar className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                    <span className="text-gray-800 group-hover:text-purple-600">活動專區</span>
                  </a>
                </div>

                <div className="relative group">
                  <a
                    href="#featured"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100/50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Award className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                    <span className="text-gray-800 group-hover:text-purple-600">精選作品</span>
                  </a>
                </div>

                <a
                  href="#faq"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100/50 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <HelpCircle className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                  <span className="text-gray-800 group-hover:text-purple-600">常見 Q&A</span>
                </a>

                <div className="border-t border-gray-200/50 mt-2 pt-2">
                  <div className="flex items-center justify-center space-x-4 py-3">
                    <a
                      href="https://instagram.com/teens_dev_assoc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-gray-600 group-hover:text-pink-600" />
                    </a>
                    <a
                      href="https://facebook.com/teens_dev_assoc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors group"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                    </a>
                  </div>
                  <div className="text-center text-sm text-gray-500 pb-2">
                    @teens_dev_assoc
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

