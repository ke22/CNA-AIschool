import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ANIMATION_CLASSES } from '../utils/classNames';

const FEATURES = [
  {
    title: '權威級產學專家親授',
    description: '國立中興大學企管博士、國立大學資管教授親授，結合學術深度與實務脈絡，帶領您從技術邏輯到社群操作，全方位掌握 AI 核心應用。',
  },
  {
    title: '高效實戰成果產出',
    description: '強調「即學即用」的產出導向，每堂課皆能完成帶得走的成果：自動化會議記錄、長文摘要報告、高品質專業簡報以及無版權疑慮的視覺影像。',
  },
  {
    title: '直覺化零門檻學習',
    description: '無須程式基礎或設計背景，透過教授獨創的結構化指令心法，僅憑電腦即可跨越技術門檻，讓科技工具成為您直覺操作的數位大腦。',
  },
  {
    title: '培養跨產業全方位賦能',
    description: '廣泛適用於商務決策、行銷公關、行政庶務、教育研究及各級管理者，協助專業人士在 AI 浪潮中實現數位轉型，精準定義下一個職涯高峰。',
  },
] as const;

export const WhySection = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [descRef, descVisible] = useScrollAnimation();
  const [card1Ref, card1Visible] = useScrollAnimation();
  const [card2Ref, card2Visible] = useScrollAnimation();
  const [card3Ref, card3Visible] = useScrollAnimation();
  const [card4Ref, card4Visible] = useScrollAnimation();
  const [quoteRef, quoteVisible] = useScrollAnimation();

  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];
  const cardVisibles = [card1Visible, card2Visible, card3Visible, card4Visible];
  const delays = ['delay-200', 'delay-300', 'delay-400', 'delay-500'];

  return (
    <section id="why" className="w-full py-8 sm:py-12 px-4 sm:px-0 scroll-mt-24" aria-labelledby="why-title">
      <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
        <h2 
          id="why-title" 
          ref={titleRef}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 ${ANIMATION_CLASSES.fadeInUp(titleVisible)}`}
        >
          為什麼你不能錯過這門課？
        </h2>
        <p 
          ref={descRef}
          className={`text-white/90 text-base sm:text-lg md:text-xl leading-relaxed px-4  ${ANIMATION_CLASSES.fadeInUp(descVisible, 'delay-100')}`}
        >
          AI 正在全面重寫職場的生存法則。工作效率不再取決於體力堆疊，資訊價值也不再僅限於搜尋與整理。從精準指令到智慧自動化，從數據分析到事實查核，生成式 AI 正在引領一場知識與決策的全面革命——您準備好掌握這股賦能浪潮了嗎？
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {FEATURES.map((feature, index) => (
            <article 
              key={index}
              ref={cardRefs[index]}
              className={`card-hover-3d bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-5 sm:p-6 text-left transition-all duration-700 ${delays[index]} ${cardVisibles[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 text-sm sm:text-base">{feature.description}</p>
            </article>
          ))}
        </div>
        
        {/* 突出設計的引用區塊 */}
        <div 
          ref={quoteRef}
          className={`mt-12 sm:mt-16 relative ${ANIMATION_CLASSES.scaleIn(quoteVisible, 'delay-600')}`}
        >
          {/* 背景光暈效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-3xl rounded-3xl animate-pulse-slow" aria-hidden="true"></div>
          
          {/* 主引用區塊 */}
          <blockquote className="relative bg-gradient-to-br from-cyan-500/30 via-blue-600/30 to-purple-600/30 backdrop-blur-xl border-2 border-cyan-300/50 rounded-2xl p-8 sm:p-12 shadow-2xl animate-glow-spread">
            {/* 左側裝飾引號 */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-cyan-300/30 text-6xl sm:text-8xl font-serif leading-none animate-float" aria-hidden="true">
              "
            </div>
            
            {/* 引用內容 */}
            <div className="relative z-10">
              <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed mb-6 italic">
                AI 不會取代人，但會取代不懂得善用 AI 的人。
              </p>
              
              <p className="text-cyan-200 text-lg sm:text-xl md:text-2xl font-semibold">
                這是你在 2026 年最值得投資的技能。
              </p>
            </div>
            
            {/* 右側裝飾引號 */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-cyan-300/30 text-6xl sm:text-8xl font-serif leading-none rotate-180 animate-float" style={{ animationDelay: '1s' }} aria-hidden="true">
              "
            </div>
            
            {/* 底部裝飾線 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" aria-hidden="true"></div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
