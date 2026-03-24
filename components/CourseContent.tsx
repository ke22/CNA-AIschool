import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { URLS } from '../constants/urls';
import { ANIMATION_CLASSES } from '../utils/classNames';

const SCHEDULE = [
  {
    week: '第一週',
    basic: { date: '4/22 (三)', title: 'AI 時代新思維：ChatGPT 與 LLM 基礎' },
    advanced: { date: '5/20 (三)', title: 'AI 數據大師：AI 與試算表的協作' },
  },
  {
    week: '第二週',
    basic: { date: '4/29 (三)', title: 'AI 效率大師：文件處理與會議記錄' },
    advanced: { date: '5/27 (三)', title: 'AI 外掛大師：瀏覽器 AI 自動化實戰' },
  },
  {
    week: '第三週',
    basic: { date: '5/6 (三)', title: 'AI 簡報大師：高品質會議簡報快速製作' },
    advanced: { date: '6/3 (三)', title: 'AI 搜尋大師：高效情報獲取與事實查核' },
  },
  {
    week: '第四週',
    basic: { date: '5/13 (三)', title: 'AI 設計大師：無版權費要求的高品質設計' },
    advanced: { date: '6/10 (三)', title: 'AI 客製大師：打造個人專屬的 AI 助理' },
  },
] as const;

export const CourseContent = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [basicCardRef, basicCardVisible] = useScrollAnimation();
  const [advancedCardRef, advancedCardVisible] = useScrollAnimation();
  const [scheduleRef, scheduleVisible] = useScrollAnimation();

  return (
    <section id="content" className="w-full py-12 scroll-mt-24" aria-labelledby="course-content-title">
      <div className="text-center space-y-12">
        <div ref={titleRef} className={ANIMATION_CLASSES.fadeInUp(titleVisible)}>
          <h2 id="course-content-title" className="text-5xl font-bold text-white mb-4">
            課程內容
          </h2>
          
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
                <h3
                  id="basic-course-title"
                  className="text-3xl font-bold text-white mb-1"
                  itemProp="name"
                >
                  入門班
                </h3>
                <meta itemProp="courseCode" content="BASIC-2026" />
                <meta itemProp="educationalLevel" content="入門" />
              </div>

              <div className="flex items-baseline gap-3 mt-2" aria-label="課程價格" itemScope itemType="https://schema.org/Offer">
                <span className="text-4xl font-bold text-white" itemProp="price">
                  NT$ 8,000
                </span>
                <meta itemProp="priceCurrency" content="TWD" />
              </div>

              <div className="space-y-3 text-white/80 text-lg mt-4" role="list">
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">
                    <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="5" width="16" height="14" rx="2" />
                      <path d="M8 3v4M16 3v4M4 9h16" />
                    </svg>
                  </span>
                  <time itemProp="startDate" dateTime="2026-04-22T19:00:00+08:00">每週三 4/22、4/29、5/6、5/13</time>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">
                    <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <span>19:00 - 21:15</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">
                    <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5c1-.67 2-1 3-1h11V5H7c-1 0-2 .33-3 1v13.5Z" />
                      <path d="M4 6v13.5" />
                      <path d="M7 6v13.5" />
                    </svg>
                  </span>
                  <span itemProp="timeRequired">4堂（共8小時）</span>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-300/20 mt-4 text-left">
                <h4 className="text-white font-semibold mb-2 text-xl">適合對象</h4>
                <p className="text-white/70 text-base">
                  上班族、行政庶務、人資財務、行銷企劃、公關 PM、媒體編輯、企業主管、自媒體經營者、專案決策者
                </p>

                <h4 className="text-white font-semibold mb-2 text-xl mt-4">課程內容</h4>
                <ul className="space-y-2 text-white/70 text-base list-disc list-inside">
                  <li>
                    <strong>AI 時代新思維：</strong>
                    ChatGPT 與 LLM 基礎。AI 能做與不能做的，常見的 AI 模型 ChatGPT / Claude / Gemini / Perplexity 比較、
                    提示詞 PROMPT、學會撰寫精準指令。
                  </li>
                  <li>
                    <strong>AI 效率大師：</strong>
                    文件處理與會議記錄。NotebookLM / ChatPDF / Claude PDF 長文件摘要。AI 文件重點整理、AI 會議記錄整理、
                    自動化生成大綱，3 分鐘內讀完 20 頁報告，並自動生成簡報初稿。
                  </li>
                  <li>
                    <strong>AI 簡報大師：</strong>
                    高品質會議簡報快速製作。NotebookLM / Google Slides / Gemini Canvas / Gamma。AI 投影片製作，
                    快速完成投影片的製作，提升工作效率。
                  </li>
                  <li>
                    <strong>AI 設計大師：</strong>
                    無版權費要求的高品質設計。Canva AI / Veo3 / Nano Banana Pro。AI 繪圖與素材生成、解決版權素材搜尋問題，
                    製作專業的海報、文案圖片、短影片。
                  </li>
                </ul>
              </div>
            </div>

            <a
              href={URLS.ACCUPASS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animated block w-full bg-gradient-to-r from-[#FE5D13] to-[#FE5D13] text-white px-6 py-4 rounded-lg hover:from-[#ff7a33] hover:to-[#ff7a33] transition font-medium text-center shadow-lg mt-6 text-lg min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FE5D13] focus:ring-offset-2 focus:ring-offset-slate-900"
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
            <div className="text-left space-y-6 flex-grow">
              <div>
                <h3 id="advanced-course-title" className="text-3xl font-bold text-white mb-2" itemProp="name">進階班</h3>
                <meta itemProp="courseCode" content="ADVANCED-2026" />
                <meta itemProp="educationalLevel" content="進階" />
              </div>

              <div className="flex items-baseline gap-3 mt-2" aria-label="課程價格" itemScope itemType="https://schema.org/Offer">
                <span className="text-4xl font-bold text-white" itemProp="price">NT$ 10,000</span>
                <meta itemProp="priceCurrency" content="TWD" />
              </div>

              <div className="space-y-3 text-white/80 text-lg mt-4" role="list">
              
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">
                    <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="5" width="16" height="14" rx="2" />
                      <path d="M8 3v4M16 3v4M4 9h16" />
                    </svg>
                  </span>
                  <time itemProp="startDate" dateTime="2026-05-20T19:00:00+08:00">每週三 5/20、5/27、6/3、6/10</time>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">
                    <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <span>19:00 - 21:15</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span className="w-6 text-center icon-bounce" aria-hidden="true">
                    <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5c1-.67 2-1 3-1h11V5H7c-1 0-2 .33-3 1v13.5Z" />
                      <path d="M4 6v13.5" />
                      <path d="M7 6v13.5" />
                    </svg>
                  </span>
                  <span itemProp="timeRequired">4堂（共8小時）</span>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-300/20 mt-4 text-left">
                <h4 className="text-white font-semibold mb-2 text-xl">適合對象</h4>
                <p className="text-white/70 text-base">
                  上班族、行政庶務、人資財務、行銷企劃、公關 PM、媒體編輯、企業主管、自媒體經營者、專案決策者
                </p>

                <h4 className="text-white font-semibold mb-2 text-xl mt-4">課程內容</h4>
                <ul className="space-y-2 text-white/70 text-base list-disc list-inside">
                  <li>
                    <strong>AI 數據大師：</strong>
                    AI 與試算表的協作。用 AI 清理試算表資料、用 AI 下 Excel 指令、各種用於 Excel 的 AI 工具，
                    以及 Google Spreadsheet Gemini 工具，並說明 AI 數據分析的雷區。
                  </li>
                  <li>
                    <strong>AI 外掛大師：</strong>
                    瀏覽器 AI 自動化實戰。Microsoft Copilot / Harpa AI / Merlin。AI 網頁與 YouTube 即時摘要、
                    網頁數據一鍵提取與自動化監控、智慧信件回覆與語氣校正，讓 AI 無縫嵌入日常辦公網頁。
                  </li>
                  <li>
                    <strong>AI 搜尋大師：</strong>
                    高效情報獲取與事實查核。Perplexity / SearchGPT。AI 聯網搜尋與深度研究報告，
                    進行競品分析與產業趨勢調查，並學會如何識別假新聞與驗證 AI 回答的準確性。
                  </li>
                  <li>
                    <strong>AI 客製大師：</strong>
                    打造個人專屬的 AI 助理。ChatGPT GPTs。無程式碼 AI Agent 開發，不需寫程式也能打造專屬機器人，
                    餵入個人文件，讓 AI 成為最懂你業務流程的數位員工。
                  </li>
                </ul>
              </div>
            </div>

            <a
              href={URLS.ACCUPASS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animated block w-full bg-gradient-to-r from-[#FE5D13] to-[#FE5D13] text-white px-6 py-4 rounded-lg hover:from-[#ff7a33] hover:to-[#ff7a33] transition font-medium text-center shadow-lg mt-6 text-lg min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FE5D13] focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="立即報名進階班課程"
              itemProp="url"
            >
              立即報名
            </a>
          </article>
        </div>

        <p
          className="text-base sm:text-lg font-semibold mt-8 max-w-6xl mx-auto text-center"
          style={{ color: 'rgb(103 232 249)' }}
        >
          本期新生若欲報名入門班+進階班的課程，課程費用可折抵NT$2000。
          <br />
          【AI 賦能學院】舊生報名本期課程可折抵NT$2000。
        </p>

        <section
          id="schedule"
          ref={scheduleRef}
          className={`mt-16 scroll-mt-24 ${ANIMATION_CLASSES.fadeInUp(scheduleVisible, 'delay-400')}`}
        >

          <div>
            <h3 className="text-4xl font-bold text-white mb-4">課程時間表</h3>
            
            <p className="text-white/70 text-base">每堂課上課時間 19:00 - 21:15｜實體課程</p>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-8 overflow-x-auto card-hover">
              <table className="w-full text-left" role="table" aria-label="2026年1月課程時間表">
                <thead>
                  <tr className="border-b border-cyan-300/20">
                    <th className="pb-4 text-white font-semibold text-xl" scope="col">
                      週次
                    </th>
                    <th className="pb-4 text-white font-semibold text-xl" scope="col">
                      入門班
                    </th>
                    <th className="pb-4 text-white font-semibold text-xl" scope="col">
                      進階班
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((item, index) => (
                    <tr key={index} className="border-b border-cyan-300/10">
                      <th className="py-4 text-white font-medium text-lg" scope="row">
                        {item.week}
                      </th>
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

          <p className="text-white/60 text-sm mt-6">
            講師視實際安排為主，主辦單位保留課程內容調整及授課講師異動之權利。
          </p>
        </section>
      </div>
    </section>
  );
};
