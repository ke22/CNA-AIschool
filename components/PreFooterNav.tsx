import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { URLS } from '../constants/urls';
import { ANIMATION_CLASSES } from '../utils/classNames';

export const PreFooterNav = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section id="info" className="w-full py-12" aria-labelledby="registration-title">
      <div className="text-center space-y-8">
        <h2 
          id="registration-title" 
          ref={titleRef}
          className={`text-5xl font-bold text-white mb-8 ${ANIMATION_CLASSES.fadeInUp(titleVisible)}`}
        >
          立即報名，迎向你的 AI 進階之路！
        </h2>
        <div 
          ref={contentRef}
          className={`bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-8 max-w-2xl mx-auto ${ANIMATION_CLASSES.scaleIn(contentVisible, 'delay-200')}`}
        >
          
          <a
            href={URLS.ACCUPASS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animated btn-pulse bg-gradient-to-r from-[#FE5D13] to-[#FE5D13] text-white px-8 py-4 rounded-lg hover:from-[#ff7a33] hover:to-[#ff7a33] transition font-medium inline-block shadow-lg hover:shadow-[#FE5D13]/50 text-lg min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FE5D13] focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="前往 ACCUPASS 報名頁面，將在新視窗開啟"
          >
            前往 ACCUPASS 報名
          </a>
        </div>
      </div>
    </section>
  );
};
