export const InfoBlock = () => {
  return (
    <section id="highlights" className="w-full py-12">
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-bold text-white mb-8">課程亮點</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-6 hover:border-cyan-300/40 transition">
            <h3 className="text-xl font-semibold text-white mb-4">實戰導向</h3>
            <p className="text-white/70">從實際案例出發，學習 AI 工具的應用技巧</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-6 hover:border-cyan-300/40 transition">
            <h3 className="text-xl font-semibold text-white mb-4">大師授課</h3>
            <p className="text-white/70">業界頂尖講師親授，分享第一手經驗</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-6 hover:border-cyan-300/40 transition">
            <h3 className="text-xl font-semibold text-white mb-4">完整學習</h3>
            <p className="text-white/70">從入門到進階，建立完整的 AI 知識體系</p>
          </div>
        </div>
      </div>
    </section>
  );
};
