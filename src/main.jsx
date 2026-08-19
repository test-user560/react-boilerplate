import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 이 파일은 앱을 시작만 합니다. 화면을 직접 만들거나 버튼 로직을 쓰는 곳은 App.jsx입니다.
// index.html의 <div id="root">를 찾아 React가 화면을 그릴 출발점을 만듭니다.
// App 컴포넌트가 실제로 보일 화면이고, StrictMode는 개발 중 실수를 더 잘 찾도록 돕습니다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
