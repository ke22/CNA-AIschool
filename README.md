# 2026 中央社 AI 賦能學院

## 🚀 快速開始

### 本地開發

1. **安裝依賴**
```bash
npm install
```

2. **啟動開發伺服器**
```bash
npm run dev
```

瀏覽器會自動開啟 http://localhost:3000

### 構建生產版本

```bash
VITE_SITE_ORIGIN=https://你的正式網域 npm run build
cp -r img dist/
```

（若未設定 `VITE_SITE_ORIGIN`，生產建置會失敗；Netlify／Vercel 建置時通常會自動帶入網址。本地打包可執行 `./package.sh`，腳本內有預設本機網址。）

構建後的檔案會在 `dist` 資料夾中。

**社群／LINE 連結預覽（Open Graph）**：`index.html` 會在建置時把 `__SITE_ORIGIN__` 換成網站網址（請勿帶結尾斜線）。可設定環境變數 `VITE_SITE_ORIGIN=https://你的網域`，或在 Netlify／Vercel 建置時使用平台提供的 `URL`／`VERCEL_URL`。預覽用圖檔放在 `public/img/`（會一併輸出到 `dist/img/`）。詳見專案根目錄 `.env.example`。

### 預覽構建版本

```bash
npm run preview
```

---

## 📦 部署

### 上傳到伺服器

1. 構建項目：`VITE_SITE_ORIGIN=https://你的網域 npm run build`（或使用託管平台自動注入的網址）
2. 複製圖片：`cp -r img dist/`（若仍有僅存在於根目錄 `img/` 的素材）
3. 將 `dist` 文件夾內的所有內容上傳到伺服器根目錄

**重要**：確保 `index.html` 在網站根目錄，`assets` 和 `img` 文件夾在同一層級。

### 打包分享

運行 `./package.sh` 會自動構建並創建可分享的版本。

---

## 📁 專案結構

```
.
├── Index.tsx          # 主頁面組件
├── main.tsx           # 應用程式入口
├── index.html         # HTML 模板
├── components/        # 所有組件
├── img/               # 圖片資源
└── dist/              # 建置輸出（部署時使用）
```

---

## 🛠️ 技術棧

- **React 18** - UI 框架
- **TypeScript** - 類型安全
- **Vite** - 建置工具
- **Tailwind CSS** - 樣式框架

---

## 📝 部署檢查清單

- [ ] 確保所有圖片都在 `img/` 資料夾中
- [ ] 設定 `VITE_SITE_ORIGIN`（或確認託管平台在建置時會注入網址），以便預覽圖為絕對路徑
- [ ] 執行 `npm run build` 確認建置成功
- [ ] 測試本地預覽：`npm run preview`
- [ ] 檢查 `dist` 資料夾是否包含所有檔案
- [ ] 上傳後確認網站可以正常訪問
- [ ] 上線後用 [Facebook 分享除錯工具](https://developers.facebook.com/tools/debug/) 或實際在 LINE 貼連結確認預覽圖

---

## 💡 提示

- 使用 `npm run dev` 進行開發（熱更新）
- 使用 `npm run preview` 測試構建版本
- 上傳到伺服器前先本地測試
- 所有路徑都是相對路徑，可以在任何目錄下運行
