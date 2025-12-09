export const DonationCTA = () => {
  return (
    <section id="schedule" className="w-full py-12">
      <div className="text-center space-y-8">
        <div className="bg-white/5 backdrop-blur-md border border-cyan-300/20 rounded-xl p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl">📅</span>
              <span className="text-2xl text-white font-semibold">2026.01.05 - 01.30</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl">📍</span>
              <span className="text-xl text-white">台北市松江路209號8樓</span>
            </div>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-medium shadow-lg"
              >
                立即報名
              </a>
            </div>
          </div>
        </div>
        <p className="text-white/50 text-sm">
          講師視實際安排為主，主辦單位保留課程內容調整及授課講師異動之權利。
        </p>
      </div>
    </section>
  );
};
