import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { URLS } from '../constants/urls';
import { ANIMATION_CLASSES } from '../utils/classNames';

const SCHEDULE = [
  { week: '第一週', advanced: { date: '1/5 (一)', title: '搜尋新生態戰略轉移' }, basic: { date: '1/9 (五)', title: 'AI 時代生存術' } },
  { week: '第二週', advanced: { date: '1/12 (一)', title: '內容重塑與 E-E-A-T' }, basic: { date: '1/16 (五)', title: '文件與資料效率革命' } },
  { week: '第三週', advanced: { date: '1/19 (一)', title: '技術佈局與轉換策略' }, basic: { date: '1/23 (五)', title: '行銷與說服力強化' } },
  { week: '第四週', advanced: { date: '1/26 (一)', title: '私域與長期內容護城河' }, basic: { date: '1/30 (五)', title: 'AI 簡報影音製作' } },
] as const;

export const CourseContent = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [basicCardRef, basicCardVisible] = useScrollAnimation();
  const [advancedCardRef, advancedCardVisible] = useScrollAnimation();
  const [scheduleRef, scheduleVisible] = useScrollAnimation();

  return (
    <section id="content" className="w-full py-12" aria-labelledby="course-content-title">
      <div className="text-center space-y-12">
        <div ref={titleRef} className={ANIMATION_CLASSES.fadeInUp(titleVisible)}>
          <h2 id="course-content-title" className="text-5xl font-bold text-white mb-4">課程內容</h2>
          <p className="text-white/80 text-xl">兩大系列課程</p>
          <p className="text-white/70 text-lg">無論你是新手或專業工作者，都能在短時間內建立 AI 時代的核心競爭力</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {/* 入門班 */}
          <article 
            ref={basicCardRef}
            className={`card-hover-3d bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-8 transition-all duration-700 delay-200 flex flex-col h-full ${basicCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            aria-labelledby="basic-course-title" 
            itemScope 
            itemType="https://schema.org/Course"
          >
            <div className="text-left space-y-6 flex-grow">
              <div>
                <span className="inline-block bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-base font-medium mb-3 icon-bounce" aria-label="入門班標籤">
                  入門班
                </span>
                <h3 id="basic-course-title" className="text-3xl font-bold text-white mb-2" itemProp="name">上班族賦能課程</h3>
                <p className="text-white/80 text-lg" itemProp="description">職場效率全面升級</p>
                <meta itemProp="courseCode" content="BASIC-2026" />
                <meta itemProp="educationalLevel" content="入門" />
              </div>

              <div className="flex items-baseline gap-3" aria-label="課程價格" itemScope itemType="https://schema.org/Offer">
                <span className="text-4xl font-bold text-white" itemProp="price">NT$ 9,500</span>
                <meta itemProp="priceCurrency" content="TWD" />
                <span className="text-xl text-white/50 line-through" aria-label="原價">NT$ 11,000</span>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-300/30 rounded-lg p-3 text-base text-white animate-pulse-slow" role="alert" aria-label="早鳥優惠">
                🎉 12/20 前報名享早鳥價
              </div>

              <div className="space-y-3 text-white/80 text-lg" role="list">
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">📅</span>
                  <time itemProp="startDate" dateTime="2026-01-09T19:00:00+08:00">每週五 1/9、1/16、1/23、1/30</time>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">⏰</span>
                  <span>19:00 - 21:15</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">📚</span>
                  <span itemProp="timeRequired">4堂（共8小時）</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">👥</span>
                  <span>適合新手入門</span>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-300/20">
                <h4 className="text-white font-semibold mb-3 text-xl">適合對象</h4>
                <p className="text-white/70 text-base" itemProp="audience">上班族、行政人員、人資、企劃、行銷、業務、主管、AI 初學者</p>
              </div>

              <div className="pt-4 border-t border-cyan-300/20">
                <h4 className="text-white font-semibold mb-3 text-xl">課程內容</h4>
                <ul className="space-y-2 text-white/70 text-base" role="list" itemProp="teaches">
                  <li>• AI 時代生存術：AI 基礎觀念、AI 工具 (Gemini 3 Pro、Veo3、Nano Banana Pro...)、資安原則、AI 搜尋與手機應用</li>
                  <li>• 文件與資料效率革命：長文摘要、合約快篩、會議紀錄與數據整理</li>
                  <li>• 行銷與說服力強化：文案生成、社群語氣切換、談判模擬</li>
                  <li>• AI 簡報影音製作：簡報自動生成、圖片處理、虛擬主播</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-cyan-300/20">
                <h4 className="text-white font-semibold mb-2 text-xl">課程目標</h4>
                <p className="text-white/70 text-base" itemProp="learningResourceType">建立 AI 職場生存力，用 AI 解決日常工作、提升效率、強化產出。</p>
              </div>
            </div>

            <a
              href={URLS.ACCUPASS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animated block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-medium text-center shadow-lg mt-6 text-lg min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="立即報名入門班課程"
              itemProp="url"
            >
              立即報名
            </a>
          </article>

          {/* 進階班 */}
          <article 
            ref={advancedCardRef}
            className={`card-hover-3d bg-white/5 backdrop-blur-md border-2 border-cyan-400/40 rounded-xl p-8 transition-all duration-700 delay-300 relative flex flex-col h-full ${advancedCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            aria-labelledby="advanced-course-title" 
            itemScope 
            itemType="https://schema.org/Course"
          >
            <div className="absolute -top-4 right-6">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-base font-medium shadow-lg animate-pulse-slow" aria-label="熱門推薦標籤">
                熱門推薦
              </span>
            </div>
            
            <div className="text-left space-y-6 flex-grow">
              <div>
                <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-base font-medium mb-3 icon-bounce" aria-label="進階班標籤">
                  進階班
                </span>
                <h3 id="advanced-course-title" className="text-3xl font-bold text-white mb-2" itemProp="name">從 SEO、AIO 到 GEO</h3>
                <p className="text-white/80 text-lg" itemProp="description">AI 搜尋時代的網站經營轉型實戰</p>
                <meta itemProp="courseCode" content="ADVANCED-2026" />
                <meta itemProp="educationalLevel" content="進階" />
              </div>

              <div className="flex items-baseline gap-3" aria-label="課程價格" itemScope itemType="https://schema.org/Offer">
                <span className="text-4xl font-bold text-white" itemProp="price">NT$ 15,000</span>
                <meta itemProp="priceCurrency" content="TWD" />
              </div>

              {/* 分隔線 */}
              <div className="border-t border-cyan-300/30 my-4"></div>

              <div className="space-y-3 text-white/80 text-lg" role="list">
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">📅</span>
                  <time itemProp="startDate" dateTime="2026-01-05T19:00:00+08:00">每週一 1/5、1/12、1/19、1/26</time>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">⏰</span>
                  <span>19:00 - 21:15</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">📚</span>
                  <span itemProp="timeRequired">4堂（共8小時）</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">👥</span>
                  <span>已有基礎概念</span>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-300/20">
                <h4 className="text-white font-semibold mb-3 text-xl">適合對象</h4>
                <p className="text-white/70 text-base" itemProp="audience">內容編輯、行銷、公關、PM、自媒體經營者、SEO 專員、企業主管</p>
              </div>

              <div className="pt-4 border-t border-cyan-300/20">
                <h4 className="text-white font-semibold mb-3 text-xl">課程內容</h4>
                <ul className="space-y-2 text-white/70 text-base" role="list" itemProp="teaches">
                  <li>• 搜尋新生態戰略轉移：零點擊搜尋、SEO/AIO/GEO 差異與佈局</li>
                  <li>• 內容重塑與 E-E-A-T：打造 AI 友善內容、Q&A 模組</li>
                  <li>• 技術佈局與轉換策略：Schema、GEO 技術、Landing Page 與 CRO</li>
                  <li>• 私域與長期內容護城河：名單吸引、Email 自動化、多平台策略</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-cyan-300/20">
                <h4 className="text-white font-semibold mb-2 text-xl">課程目標</h4>
                <p className="text-white/70 text-base" itemProp="learningResourceType">掌握 AI 搜尋時代的內容策略，建立可被 AI 主動引用的高權威內容與網站。</p>
              </div>
            </div>

            <a
              href={URLS.ACCUPASS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animated block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-medium text-center shadow-lg mt-6 text-lg min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="立即報名進階班課程"
              itemProp="url"
            >
              立即報名
            </a>
          </article>
        </div>

        {/* 課程時間表 */}
        <div 
          id="schedule"
          ref={scheduleRef}
          className={`mt-16 ${ANIMATION_CLASSES.fadeInUp(scheduleVisible, 'delay-400')}`}
        >
          <div>
            <h3 className="text-4xl font-bold text-white mb-4">課程時間表</h3>
            <p className="text-white/80 text-xl">2026 年 1 月課程表</p>
            <p className="text-white/70 text-base">每堂課上課時間 19:00 - 21:15｜實體課程</p>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-8 overflow-x-auto card-hover">
              <table className="w-full text-left" role="table" aria-label="2026年1月課程時間表">
                <thead>
                  <tr className="border-b border-cyan-300/20">
                    <th className="pb-4 text-white font-semibold text-xl" scope="col">週次</th>
                    <th className="pb-4 text-white font-semibold text-xl" scope="col">入門班</th>
                    <th className="pb-4 text-white font-semibold text-xl" scope="col">進階班</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((item, index) => (
                    <tr key={index} className="border-b border-cyan-300/10">
                      <th className="py-4 text-white font-medium text-lg" scope="row">{item.week}</th>
                      <td className="py-4">
                        <div className="text-cyan-300 font-medium text-lg">{item.basic.date}</div>
                        <div className="text-white/70 text-base">{item.basic.title}</div>
                      </td>
                      <td className="py-4">
                        <div className="text-cyan-300 font-medium text-lg">{item.advanced.date}</div>
                        <div className="text-white/70 text-base">{item.advanced.title}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="text-white/50 text-base mt-8">
          講師視實際安排為主，主辦單位保留課程內容調整及授課講師異動之權利。
        </p>
      </div>
    </section>
  );
};
