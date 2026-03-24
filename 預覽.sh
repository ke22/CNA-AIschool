#!/usr/bin/env bash
set -euo pipefail

echo "=========================================="
echo "一鍵預覽網站"
echo "=========================================="
echo ""

# Ensure dependencies exist
if [ ! -d "node_modules" ]; then
  echo "尚未安裝依賴，正在執行 npm install..."
  npm install
  echo ""
fi

# Build if dist missing
if [ ! -f "dist/index.html" ]; then
  echo "正在構建網站..."
  export VITE_SITE_ORIGIN="${VITE_SITE_ORIGIN:-http://127.0.0.1:4173}"
  npm run build

  echo ""
  echo "正在複製圖片..."
  rm -rf "dist/img" 2>/dev/null || true
  cp -R "img" "dist/"

  echo "構建完成！"
  echo ""
fi

echo "啟動預覽服務器..."
echo ""
echo "網站將在以下地址自動打開："
echo "   http://localhost:4173"
echo ""
echo "按 Ctrl+C 停止服務器"
echo "=========================================="
echo ""

# Use Vite preview
npm run preview
