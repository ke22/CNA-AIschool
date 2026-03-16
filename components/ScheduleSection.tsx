export const ScheduleSection = () => {
  const schedule = [
    { week: '第一週', advanced: { date: '1/5 (一)', title: '搜尋新生態戰略轉移' }, basic: { date: '1/9 (五)', title: 'AI 時代生存術' } },
    { week: '第二週', advanced: { date: '1/12 (一)', title: '內容重塑與 E-E-A-T' }, basic: { date: '1/16 (五)', title: '文件與資料效率革命' } },
    { week: '第三週', advanced: { date: '1/19 (一)', title: '技術佈局與轉換策略' }, basic: { date: '1/23 (五)', title: '行銷與說服力強化' } },
    { week: '第四週', advanced: { date: '1/26 (一)', title: '私域與長期內容護城河' }, basic: { date: '1/30 (五)', title: 'AI 簡報影音製作' } },
  ];

  return (
    <section id="schedule" className="w-full py-12">
      <div className="text-center space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">課程時間表</h2>
          <p className="text-white/80 text-lg">2026 年 1 月課程表</p>
          <p className="text-white/70 text-sm">每堂課上課時間 19:00 - 21:15｜實體課程</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-8 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-cyan-300/20">
                  <th className="pb-4 text-white font-semibold">週次</th>
                  <th className="pb-4 text-white font-semibold">進階班</th>
                  <th className="pb-4 text-white font-semibold">入門班</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} className="border-b border-cyan-300/10">
                    <td className="py-4 text-white font-medium">{item.week}</td>
                    <td className="py-4">
                      <div className="text-cyan-300 font-medium">{item.advanced.date}</div>
                      <div className="text-white/70 text-sm">{item.advanced.title}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-cyan-300 font-medium">{item.basic.date}</div>
                      <div className="text-white/70 text-sm">{item.basic.title}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};



