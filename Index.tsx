import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhySection } from "@/components/WhySection";
import { CourseContent } from "@/components/CourseContent";
import { FAQSection } from "@/components/FAQSection";
import { PreFooterNav } from "@/components/PreFooterNav";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="skip-to-main">
        跳至主要內容
      </a>

      {/* Background Image - Shutterstock */}
      <div className="fixed inset-0 w-screen h-full z-0 overflow-hidden" aria-hidden="true" style={{ width: '100vw', maxWidth: '100vw' }}>
        <img 
          src="./img/shutterstock_2030588951 [Converted].jpg" 
          alt="" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          aria-hidden="true"
        />
        {/* Subtle overlay to maintain readability with pulse animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/50 to-purple-900/60 animate-overlay-pulse"></div>
        {/* Grid pattern overlay - matching Lovable design */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          aria-hidden="true"
        ></div>
      </div>
      
      <Header />
      <main id="main-content" className="w-full max-w-full flex flex-col items-center relative z-10 overflow-x-hidden pt-24 md:pt-24">
        {/* Hero on top */}
        <HeroSection />

        {/* Centered wrapper containing the sections - matching Lovable structure */}
        <div
          className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8"
          style={{
            maxWidth: 1400,
            padding: '0 20px 40px 20px',
            gap: 40,
          }}
        >
          <div className="w-full border-t border-cyan-300/20" aria-hidden="true"></div>
          <WhySection />
          <div className="w-full border-t border-cyan-300/20" aria-hidden="true"></div>
          <CourseContent />
          <div className="w-full border-t border-cyan-300/20" aria-hidden="true"></div>
          <FAQSection />
          <div className="w-full border-t border-cyan-300/20" aria-hidden="true"></div>
          <PreFooterNav />
              <div className="w-full border-t border-cyan-300/20" aria-hidden="true"></div>
              {/* Contact Info */}
              <section className="w-full" aria-labelledby="contact-title">
                <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-2xl p-6 sm:p-8 shadow-lg">
                  <h3 id="contact-title" className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                    <span aria-hidden="true" className="text-white">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 3h3l1 5-2 1a11 11 0 0 0 6 6l1-2 5 1v3a2 2 0 0 1-2.2 2A15 15 0 0 1 4 6.2 2 2 0 0 1 6.5 3Z" />
                      </svg>
                    </span>
                    聯絡資訊
                  </h3>
                  <div className="space-y-3 text-white/80 text-lg">
                    <p>洽詢電話：02-2505-1180 分機795(王先生)、分機792(張小姐)</p>
                    <p>電子信箱：cnamarketvideo3@gws.cna.com.tw</p>
                    <p>服務時間：週一至週五(不含國定假日) 09:30 ~ 18:00</p>
                  </div>
                </div>
              </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
