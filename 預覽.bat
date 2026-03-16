@echo off
echo ==========================================
echo 一鍵預覽網站
echo ==========================================
echo.

REM 檢查是否已構建
if not exist "dist\index.html" (
    echo 正在構建網站...
    call npm run build
    
    if errorlevel 1 (
        echo 構建失敗！
        pause
        exit /b 1
    )
    
    echo 正在複製圖片...
    xcopy img dist\img\ /E /I /Y >nul 2>&1
    echo 構建完成！
    echo.
)

echo 啟動預覽服務器...
echo.
echo 網站將在以下地址自動打開：
echo    http://localhost:4173
echo.
echo 按 Ctrl+C 停止服務器
echo ==========================================
echo.

REM 使用 Vite 的 preview 命令
call npm run preview



