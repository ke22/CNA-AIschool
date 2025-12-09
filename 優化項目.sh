#!/bin/bash

# 優化項目大小，保留必要內容

echo "=========================================="
echo "優化項目大小"
echo "=========================================="
echo ""

# 1. 優化圖片：使用優化版本，刪除原始大文件
echo "🖼️  步驟 1：優化圖片..."
cd img

# 檢查並替換大圖片
if [ -f "shutterstock_2030588951_optimized.jpg" ] && [ -f "shutterstock_2030588951 [Converted].jpg" ]; then
    ORIGINAL_SIZE=$(du -h "shutterstock_2030588951 [Converted].jpg" | awk '{print $1}')
    OPTIMIZED_SIZE=$(du -h "shutterstock_2030588951_optimized.jpg" | awk '{print $1}')
    echo "  原始文件：$ORIGINAL_SIZE"
    echo "  優化文件：$OPTIMIZED_SIZE"
    
    # 備份原始文件（可選）
    # mv "shutterstock_2030588951 [Converted].jpg" "shutterstock_2030588951 [Converted].jpg.backup"
    
    # 使用優化版本替換
    cp "shutterstock_2030588951_optimized.jpg" "shutterstock_2030588951 [Converted].jpg"
    echo "  ✅ 已使用優化版本"
fi

cd ..

# 2. 移除重複的說明文件，只保留一個主要的
echo ""
echo "📝 步驟 2：整理說明文件..."
# 保留 README.md，移除其他重複的說明文件
# 可以選擇保留最重要的，這裡先不移除，讓用戶決定

# 3. 移除不必要的配置文件（如果不需要部署到這些平台）
echo ""
echo "⚙️  步驟 3：清理配置文件..."
# 如果不需要 Netlify 和 Vercel，可以移除
# rm -f netlify.toml vercel.json 2>/dev/null

# 4. 清理構建輸出中的重複文件
echo ""
echo "🧹 步驟 4：清理構建輸出..."
if [ -d "dist/img" ]; then
    # 移除 dist 中的優化版本（如果原始版本已替換）
    rm -f "dist/img/shutterstock_2030588951_optimized.jpg" 2>/dev/null
    echo "  ✅ 已清理 dist/img 中的重複文件"
fi

# 5. 移除臨時文件和系統文件
echo ""
echo "🗑️  步驟 5：清理臨時文件..."
find . -name ".DS_Store" -delete 2>/dev/null
find . -name "*.log" -delete 2>/dev/null
find . -name "*.tmp" -delete 2>/dev/null
echo "  ✅ 已清理臨時文件"

# 6. 重新構建以應用優化
echo ""
echo "📦 步驟 6：重新構建..."
npm run build
cp -r img dist/ 2>/dev/null

echo ""
echo "=========================================="
echo "✅ 優化完成！"
echo "=========================================="
echo ""
echo "📊 優化結果："
echo "  項目總大小：$(du -sh . | awk '{print $1}')"
echo "  img 文件夾：$(du -sh img | awk '{print $1}')"
echo "  dist 文件夾：$(du -sh dist | awk '{print $1}')"
echo ""
echo "💡 提示："
echo "  - 已使用優化的圖片版本"
echo "  - 已清理臨時文件"
echo "  - 已重新構建"
echo ""

