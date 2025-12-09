import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { URLS } from '../constants/urls';
import { ANIMATION_CLASSES } from '../utils/classNames';

export const HeroSection = () => {
  const [bannerRef, bannerVisible] = useScrollAnimation();
  const [titleRef, titleVisible] = useScrollAnimation();
  const [subtitleRef, subtitleVisible] = useScrollAnimation();
  const [descRef, descVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  return (
    <section className="w-full relative flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-6 min-h-screen" aria-labelledby="hero-title">
      <div className="relative z-10 w-full max-w-4xl text-center space-y-4 sm:space-y-6">
        {/* Announcement Banner */}
        <div 
          ref={bannerRef}
          className={`inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-md border border-cyan-300/50 shadow-lg ${ANIMATION_CLASSES.fadeInDown(bannerVisible)}`}
          role="status" 
          aria-live="polite"
        >
          <span className="text-white icon-bounce" aria-hidden="true">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 3 5 14h6l-1 7 9-11h-6l1-7Z" />
            </svg>
          </span>
          <span className="text-white text-sm sm:text-lg md:text-xl font-medium whitespace-nowrap">2026 年度課程正式開放報名</span>
        </div>

        {/* Main Title */}
        <h1 
          id="hero-title" 
          ref={titleRef}
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight ${ANIMATION_CLASSES.fadeInUp(titleVisible, 'delay-100')}`}
        >
          AI 時代生存術！大師開課囉！
        </h1>

        {/* Subtitle - Hidden */}
        <p 
          ref={subtitleRef}
          className={`hidden text-2xl sm:text-3xl md:text-4xl font-bold ${ANIMATION_CLASSES.fadeInUp(subtitleVisible, 'delay-200')}`}
        >
          <span className="text-white">中央社</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">AI 賦能學院</span>
        </p>

        {/* Description */}
        <div 
          ref={descRef}
          className={`text-white space-y-2 max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4 ${ANIMATION_CLASSES.fadeInUp(descVisible, 'delay-300')}`}
        >
          <p className="text-balance">從入門到進階，一次打造你的 AI 專業競爭力。</p>
          <p className="text-balance">掌握 AI 工具應用與搜尋生態策略，迎向職涯新高峰。</p>
        </div>

        {/* Info Blocks */}
        <div 
          ref={infoRef}
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-6 sm:mt-8 px-4 ${ANIMATION_CLASSES.fadeInUp(infoVisible, 'delay-400')}`}
          role="list"
        >
          <div className="flex items-center justify-center gap-3 text-white text-base sm:text-lg md:text-xl" role="listitem">
            <span className="text-2xl sm:text-3xl icon-bounce" aria-hidden="true">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="5" width="16" height="14" rx="2" />
                <path d="M8 3v4M16 3v4M4 9h16" />
              </svg>
            </span>
            <time dateTime="2026-01-05/2026-01-30">2026.01.05 - 01.30</time>
          </div>
          <div className="flex items-center justify-center gap-3 text-white text-base sm:text-lg md:text-xl" role="listitem">
            <span className="text-2xl sm:text-3xl icon-bounce" aria-hidden="true">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10Z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </span>
            <address className="not-italic">台北市松江路209號8樓</address>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          ref={ctaRef}
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12 px-4 ${ANIMATION_CLASSES.fadeInUp(ctaVisible, 'delay-500')}`}
        >
          <a
            href={URLS.ACCUPASS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animated btn-pulse bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-medium shadow-lg hover:shadow-cyan-500/50 text-base sm:text-lg md:text-xl text-center min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="立即報名課程，將在新視窗開啟 ACCUPASS 報名頁面"
          >
            立即報名課程
          </a>
          <a
            href="#content"
            className="btn-animated bg-white/10 backdrop-blur-md border-2 border-cyan-300/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-cyan-300/20 transition font-medium text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="了解課程內容"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse-slow" aria-hidden="true"></span>
            了解課程內容
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 sm:mt-12 flex justify-center" aria-hidden="true">
          <div className="w-10 h-10 rounded-full border-2 border-cyan-400/50 flex items-center justify-center animate-bounce animate-float">
            <span className="text-cyan-300 text-xl sm:text-2xl">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
