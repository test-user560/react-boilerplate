import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // ── JavaScript 로직을 쓰는 곳 ───────────────────────────────────────
  // import 아래, return 위에는 상태(useState), 함수, 계산, API 요청처럼
  // "무슨 일을 할지"를 작성합니다. 이 예제에서는 count 값을 관리합니다.
  // count는 현재 버튼을 누른 횟수이고, setCount는 그 값을 바꾸는 함수입니다.
  // 화면에서 바뀌는 값은 일반 변수 대신 useState로 관리해야 React가 화면을 다시 그립니다.
  const [count, setCount] = useState(0)

  // ── JSX(화면 구조)를 쓰는 곳 ─────────────────────────────────────────
  // return (...) 안에는 브라우저에 보여 줄 HTML과 비슷한 JSX를 작성합니다.
  // className으로 CSS를 연결하고, onClick처럼 사용자의 동작도 여기서 연결합니다.
  return (
    <>
      {/* 화면의 첫 번째 영역: 로고, 제목, 실습 버튼을 보여 줍니다. */}
      <section id="center">
        <div className="hero">
          {/* 장식용 이미지는 빈 alt를 사용해 화면 읽기 도구가 건너뜁니다. */}
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          // 버튼을 누르면 직전 횟수에 1을 더해 상태를 업데이트합니다.
          // 그러면 아래의 {count} 부분만 최신 숫자로 다시 표시됩니다.
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      {/* 화면의 두 번째 영역: React와 Vite를 더 알아볼 수 있는 외부 링크입니다. */}
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      {/* 아래 여백과 구분선은 화면의 마무리 균형을 위한 장식입니다. */}
      <section id="spacer"></section>
    </>
  )
}

export default App
