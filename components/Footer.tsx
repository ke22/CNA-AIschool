import { URLS } from '../constants/urls';

export const Footer = () => {
  return (
    <footer className="w-full py-8 sm:py-12 px-4 sm:px-6 border-t border-cyan-300/20 mt-16 bg-slate-900/30 backdrop-blur-sm" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img 
            src="./img/logo.svg" 
            alt="中央通訊社 Logo" 
            className="h-8 w-8 sm:h-10 sm:w-10"
            width="40"
            height="40"
            loading="lazy"
            itemProp="logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <h3 className="text-white text-xl sm:text-2xl font-bold" itemProp="name">中央社 AI 賦能學院</h3>
        </div>
        <meta itemProp="url" content={URLS.ACCUPASS} />

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 text-base" aria-label="頁尾導航">
          <a href="#why" className="text-white/70 hover:text-cyan-300 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2">
            課程亮點
          </a>
          <a href="#content" className="text-white/70 hover:text-cyan-300 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2">
            課程內容
          </a>
          <a href="#schedule" className="text-white/70 hover:text-cyan-300 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2">
            課程時間
          </a>
          <a href="#info" className="text-white/70 hover:text-cyan-300 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2">
            報名資訊
          </a>
        </nav>

        {/* Divider */}
        <div className="border-t border-cyan-300/20 my-6" aria-hidden="true"></div>

        {/* Organizer Info */}
        <div className="text-center mb-4">
          <p className="text-white/60 text-sm sm:text-base">
            主辦單位：<span itemProp="parentOrganization" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">中央通訊社</span>
            </span>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/50 text-sm sm:text-base">
          <p>© 2026 <span itemProp="name">中央通訊社</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
