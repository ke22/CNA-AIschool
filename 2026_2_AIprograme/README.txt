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
