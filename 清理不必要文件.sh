#!/bin/bash

# 清理不必要的文件，只保留必要內容

echo "=========================================="
echo "清理不必要的文件"
echo "=========================================="
echo ""

# 創建備份
echo "📦 創建清理前備份..."
BACKUP_NAME="backup_before_cleanup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "../backups"
tar -czf "../backups/$BACKUP_NAME.tar.gz" . 2>/dev/null
echo "✅ 備份已創建：../backups/$BACKUP_NAME.tar.gz"
echo ""

# 1. 移除重複的說明文件（只保留 README.md）
echo "📝 移除重複的說明文件..."
KEEP_FILES=("README.md" "部署說明.md")
for file in *.md *.txt; do
    if [ -f "$file" ]; then
        KEEP=0
        for keep in "${KEEP_FILES[@]}"; do
            if [ "$file" == "$keep" ]; then
                KEEP=1
                break
            fi
        done
        if [ $KEEP -eq 0 ]; then
            echo "  移除: $file"
            rm -f "$file"
        fi
    fi
done

# 2. 移除重複的腳本文件（只保留必要的）
echo ""
echo "🔧 整理腳本文件..."
# 保留：package.sh（打包腳本）
# 移除其他重複的腳本
rm -f 創建可直接打開版本.sh 2>/dev/null
rm -f 如何開啟網站.txt 2>/dev/null

# 3. 移除不必要的部署配置（如果不需要）
echo ""
echo "⚙️  清理部署配置..."
# 如果不需要這些平台，可以移除
# rm -f netlify.toml vercel.json 2>/dev/null

# 4. 清理 dist 中的重複圖片
echo ""
echo "🖼️  清理 dist 中的重複文件..."
if [ -d "dist/img" ]; then
    rm -f "dist/img/shutterstock_2030588951_optimized.jpg" 2>/dev/null
    echo "  ✅ 已清理"
fi

# 5. 移除 public 文件夾（如果與 dist 重複）
echo ""
echo "📁 檢查重複文件夾..."
if [ -d "public" ] && [ -f "dist/robots.txt" ]; then
    echo "  public/robots.txt 已複製到 dist，可以移除 public"
    # rm -rf public 2>/dev/null
fi

echo ""
echo "=========================================="
echo "✅ 清理完成！"
echo "=========================================="
echo ""
echo "📊 當前大小："
echo "  項目總大小：$(du -sh . | awk '{print $1}')"
echo "  （不包括 node_modules）"
echo ""

