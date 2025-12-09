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
          <p className="text-white mb-6 text-lg">
            報名成功後，將由主辦單位主動聯繫，提供繳費匯款帳號。
          </p>
          <a
            href={URLS.ACCUPASS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animated btn-pulse bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-medium inline-block shadow-lg hover:shadow-cyan-500/50 text-lg min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="前往 ACCUPASS 報名頁面，將在新視窗開啟"
          >
            前往 ACCUPASS 報名
          </a>
        </div>
      </div>
    </section>
  );
};
