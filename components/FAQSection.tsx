import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ANIMATION_CLASSES } from '../utils/classNames';

const FAQS = [
  {
    question: "課程適合什麼程度的人參加？",
    answer: "本課程從入門到進階，適合所有對 AI 有興趣的學習者。"
  },
  {
    question: "需要準備什麼設備嗎？",
    answer: "建議攜帶筆記型電腦，以便進行實作練習。"
  },
  {
    question: "課程結束後會有學習證明嗎？",
    answer: "完成課程的學員將會獲得課程學習證明。"
  }
] as const;

export const FAQSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [faq1Ref, faq1Visible] = useScrollAnimation();
  const [faq2Ref, faq2Visible] = useScrollAnimation();
  const [faq3Ref, faq3Visible] = useScrollAnimation();

  const faqRefs = [faq1Ref, faq2Ref, faq3Ref];
  const faqVisibles = [faq1Visible, faq2Visible, faq3Visible];
  const delays = ['delay-100', 'delay-200', 'delay-300'];

  return (
    <section className="w-full py-12" aria-labelledby="faq-title" itemScope itemType="https://schema.org/FAQPage">
      <div className="text-center space-y-8">
        <h2 
          id="faq-title" 
          ref={titleRef}
          className={`text-5xl font-bold text-white mb-8 ${ANIMATION_CLASSES.fadeInUp(titleVisible)}`}
        >
          常見問題
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto text-left">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              ref={faqRefs[index]}
              className={`card-hover bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-6 transition-all duration-700 ${delays[index]} ${faqVisibles[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 className="text-2xl font-semibold text-white mb-2" itemProp="name">Q: {faq.question}</h3>
              <div itemScope itemType="https://schema.org/Answer">
                <p className="text-white/70 text-base" itemProp="text">A: {faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
