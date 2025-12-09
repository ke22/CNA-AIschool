#!/bin/bash

# 構建可以直接雙擊打開的版本（使用 IIFE 格式）

echo "=========================================="
echo "構建可直接打開的版本"
echo "=========================================="
echo ""

# 構建
echo "📦 正在構建（IIFE 格式）..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 構建失敗！"
    exit 1
fi

# 複製圖片
echo "🖼️  正在複製圖片..."
cp -r img dist/ 2>/dev/null

# 修改 index.html，移除 type="module" 和 crossorigin
echo "🔧 修改 index.html..."
cd dist

# 移除 type="module" 和 crossorigin 屬性
# Mac
sed -i '' 's/type="module" //g' index.html 2>/dev/null
sed -i '' 's/ crossorigin//g' index.html 2>/dev/null
sed -i '' 's/rel="modulepreload" //g' index.html 2>/dev/null
# Linux
sed -i 's/type="module" //g' index.html 2>/dev/null
sed -i 's/ crossorigin//g' index.html 2>/dev/null
sed -i 's/rel="modulepreload" //g' index.html 2>/dev/null

# 將 script 標籤移到 body 底部（確保 DOM 已載入）
# Mac
sed -i '' 's|</head>|</head>|' index.html 2>/dev/null
sed -i '' 's|<script src="./assets/index.js"></script>||' index.html 2>/dev/null
sed -i '' 's|<div id="root"></div>|<div id="root"></div>\n    <script src="./assets/index.js"></script>|' index.html 2>/dev/null
# Linux
sed -i 's|</head>|</head>|' index.html 2>/dev/null
sed -i 's|<script src="./assets/index.js"></script>||' index.html 2>/dev/null
sed -i 's|<div id="root"></div>|<div id="root"></div>\n    <script src="./assets/index.js"></script>|' index.html 2>/dev/null

cd ..

echo ""
echo "✅ 構建完成！"
echo ""
echo "📝 現在可以："
echo "   1. 直接雙擊 dist/index.html 打開"
echo "   2. 或使用 npm run preview"
echo ""
echo "💡 提示："
echo "   - 所有資源都使用相對路徑"
echo "   - 可以在任何位置直接打開"
echo ""
