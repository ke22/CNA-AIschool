import { useState } from 'react';
import { URLS } from '../constants/urls';
import { COMMON_CLASSES } from '../utils/classNames';

const NAV_ITEMS = [
  { href: '#why', label: '課程亮點', ariaLabel: '前往課程亮點區塊' },
  { href: '#content', label: '課程內容', ariaLabel: '前往課程內容區塊' },
  { href: '#schedule', label: '課程時間', ariaLabel: '前往課程時間表' },
] as const;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 h-[72px] w-screen max-w-none flex items-center justify-between px-4 sm:px-6 py-3 md:py-4 bg-slate-900/95 z-[100] backdrop-blur-lg overflow-x-hidden shadow-md"
        role="navigation" 
        aria-label="主要導航"
        style={{ width: '100vw', maxWidth: '100vw' }}
      >
        <div className="flex items-center gap-3">
          {/* Logo */}
          <a 
            href={URLS.CNA_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            aria-label="前往中央通訊社首頁"
          >
            <img 
              src="./img/logo.svg" 
              alt="中央通訊社 Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
              width="40"
              height="40"
              loading="eager"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </a>
          <a 
            href="#" 
            className="text-white text-xl sm:text-2xl font-bold whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded flex items-center" 
            aria-label="回到首頁"
          >
            中央社 AI 賦能學院
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 flex-wrap justify-end">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className={COMMON_CLASSES.navLink}
              aria-label={item.ariaLabel}
            >
              {item.label}
            </a>
          ))}
          <a
            href={URLS.ACCUPASS}
            target="_blank"
            rel="noopener noreferrer"
            className={COMMON_CLASSES.ctaButton}
            aria-label="前往 ACCUPASS 報名頁面，將在新視窗開啟"
          >
            立即報名
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 hover:text-cyan-300 transition min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
          aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - fixed, independent of nav, opens below header */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed left-0 right-0 top-[72px] bg-slate-900/95 backdrop-blur-md border-t border-b border-cyan-300/20 shadow-2xl z-[90]"
          role="menu"
          aria-label="行動選單"
        >
          <div className="flex flex-col px-4 py-4 space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMenuClose}
                className={COMMON_CLASSES.mobileMenuItem}
                role="menuitem"
                aria-label={item.ariaLabel}
              >
                {item.label}
              </a>
            ))}
            <a
              href={URLS.ACCUPASS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMenuClose}
              className={`${COMMON_CLASSES.ctaButton} py-3`}
              role="menuitem"
              aria-label="前往 ACCUPASS 報名頁面，將在新視窗開啟"
            >
              立即報名
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

