#!/bin/bash

# 打包腳本 - 生成可分享的網站包

echo "=========================================="
echo "開始打包網站..."
echo "=========================================="

# 步驟 1：構建生產版本
echo ""
echo "📦 步驟 1：構建生產版本..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 構建失敗！請檢查錯誤訊息"
    exit 1
fi

# 步驟 2：複製圖片資源
echo ""
echo "🖼️  步驟 2：複製圖片資源..."
cp -r img dist/

if [ $? -ne 0 ]; then
    echo "⚠️  圖片複製失敗，但繼續打包"
fi

# 步驟 3：創建啟動腳本
echo ""
echo "📝 步驟 3：創建啟動腳本..."

# Mac/Linux 啟動腳本
cat > dist/start-server.sh << 'EOF'
#!/bin/bash
echo "啟動本地服務器..."
echo ""
echo "服務器將在以下地址運行："
echo "   http://localhost:8000"
echo ""
echo "按 Ctrl+C 停止服務器"
echo ""
python3 -m http.server 8000
EOF

chmod +x dist/start-server.sh

# Windows 啟動腳本
cat > dist/start-server.bat << 'EOF'
@echo off
echo 啟動本地服務器...
echo.
echo 服務器將在以下地址運行：
echo    http://localhost:8000
echo.
echo 按 Ctrl+C 停止服務器
echo.
python -m http.server 8000
EOF

# 創建說明文件
cat > dist/README.txt << 'EOF'
網站使用說明
============

⚠️ 重要：不能直接雙擊 index.html 打開！

✅ 正確的使用方式：

方法 1：使用提供的啟動腳本（推薦）
---------------------------------
Mac/Linux:
  雙擊 start-server.sh 或在終端機運行：
  ./start-server.sh

Windows:
  雙擊 start-server.bat

然後在瀏覽器打開：http://localhost:8000

方法 2：手動啟動服務器
---------------------
在終端機進入此文件夾，然後：

Mac/Linux:
  python3 -m http.server 8000

Windows:
  python -m http.server 8000

然後在瀏覽器打開：http://localhost:8000

方法 3：上傳到伺服器
--------------------
將此文件夾內的所有內容上傳到您的網站伺服器
（確保 index.html 在網站根目錄）

📁 文件說明：
-----------
- index.html       主頁面
- assets/          JavaScript 和 CSS 文件
- img/            圖片資源
- start-server.sh  Mac/Linux 啟動腳本
- start-server.bat Windows 啟動腳本
- README.txt       本說明文件

❓ 常見問題：
-----------
Q: 為什麼不能直接打開 index.html？
A: 因為網站使用現代 JavaScript 模組，必須通過 HTTP 服務器運行。

Q: 沒有 Python 怎麼辦？
A: 可以下載安裝 Python，或使用其他 HTTP 服務器工具。

Q: 如何分享給其他人？
A: 將整個文件夾壓縮成 ZIP，發送給對方即可。
   對方解壓後按照上述說明啟動服務器即可查看。
EOF

# 步驟 4：檢查文件
echo ""
echo "🔍 步驟 4：檢查打包文件..."
if [ -f "dist/index.html" ]; then
    echo "✅ index.html 存在"
else
    echo "❌ index.html 不存在"
fi

if [ -d "dist/assets" ]; then
    FILE_COUNT=$(ls dist/assets | wc -l)
    echo "✅ assets 文件夾存在（包含 $FILE_COUNT 個文件）"
else
    echo "❌ assets 文件夾不存在"
fi

if [ -d "dist/img" ]; then
    IMG_COUNT=$(ls dist/img 2>/dev/null | wc -l)
    echo "✅ img 文件夾存在（包含 $IMG_COUNT 個文件）"
else
    echo "❌ img 文件夾不存在"
fi

# 步驟 5：計算大小
echo ""
echo "📊 文件夾大小："
du -sh dist/

echo ""
echo "=========================================="
echo "✅ 打包完成！"
echo "=========================================="
echo ""
echo "📁 打包文件夾：dist/"
echo ""
echo "📤 分享方式："
echo "1. 將 dist 文件夾壓縮成 ZIP"
echo "2. 發送 ZIP 文件給其他人"
echo "3. 對方解壓後按照 README.txt 說明啟動服務器"
echo ""
echo "💡 提示："
echo "- 可以將 dist 文件夾重命名為「網站」或「2026_AI_網站」"
echo "- 確保包含所有文件：index.html, assets/, img/, 啟動腳本"
echo ""

