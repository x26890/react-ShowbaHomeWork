# React + Vite

# 小北百貨建工店 - 聖誕主題網頁 (React 練習專案) #

1. 響應式導覽與路由 (Routing)
    多頁面結構：使用 react-router-dom 的 HashRouter 實作單頁。

    首頁：定義在 App.jsx 的 Home 組件中。

    每月 DM：對應檔案 MonthlyDM.jsx。

    聯絡我們：對應檔案 Contact.jsx。

    智慧導覽列：具備響應式折疊功能的 Navbar.jsx，並使用 Link 元件確保頁面切換流暢。

2. 互動式 DM 瀏覽系統
    分類切換：在 MonthlyDM.jsx 中提供側邊欄分類，點擊可切換展示的 DM 圖片。

    燈箱放大功能：利用 Bootstrap Modal 實作，使用者點擊 DM 圖片即可彈出放大視窗。

3. 關於我們與門市導航
    視覺化特色介紹：透過 AboutSection.jsx 展示「物美價廉」、「全年無休」、「商品齊全」等核心價值。

    整合地圖資訊：MapSection.jsx 提供了店鋪周邊交通資訊（如紅28、168西公車路線），並內嵌 Google 地圖。

4. 節慶氛圍與用戶體驗 (UX)
    聖誕視覺樣式：整合 Christmas.css 為網頁增添節日氛圍。

    便利功能：

    GoTop 按鈕：結合 GoTop.jsx 元件 與自定義 useScrollTop.jsx Hook，偵測滾動高度後顯示「回頂部」按鈕。

    LINE 群組串接：透過首頁 Welcome.jsx 與頁尾 Footer.jsx 的 Modal 視窗引導使用者掃描 QR Code。

    最新活動公告：在 Activity.jsx 中以卡片形式展示最新消息與活動。

============================================================================  
# 關鍵技術 #

前端框架：React

路由管理：React Router DOM (HashRouter)

樣式與架構：Bootstrap 5, CSS

狀態管理：React Hooks (useState, useEffect)

圖示：Bootstrap Icons