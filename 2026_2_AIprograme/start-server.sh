#!/bin/bash
echo "啟動本地服務器..."
echo ""
echo "服務器將在以下地址運行："
echo "   http://localhost:8000"
echo ""
echo "按 Ctrl+C 停止服務器"
echo ""
python3 -m http.server 8000
