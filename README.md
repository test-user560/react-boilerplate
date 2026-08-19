# React 시작 화면

React와 Vite로 만든 연습용 시작 화면입니다. 화면의 버튼을 누르면 숫자가 하나씩 늘어나며, React의 **상태(state)** 와 클릭 이벤트를 가장 작게 경험할 수 있습니다.

## VS Code 확장 프로그램

아래 도구를 설치하면 코드를 저장할 때 정리하고, React 화면을 살펴보기 편해집니다.

- **OXC** (`oxc.oxc-vscode`, 필수) — 이 프로젝트의 코드 정리와 규칙 검사를 담당합니다. 설치한 뒤 파일을 저장하면 JSX, CSS, JSON이 자동으로 정리됩니다.
- **React Developer Tools** (선택, 브라우저 확장) — 브라우저 개발자 도구에서 React 컴포넌트와 `count` 같은 상태 값을 확인할 수 있습니다.
- **Error Lens** (선택) — 코드의 오류와 경고를 해당 줄에 바로 표시합니다.

Prettier와 ESLint는 이 프로젝트에서 사용하지 않습니다. 여러 포매터를 함께 켜면 저장할 때 코드 모양이 예기치 않게 바뀔 수 있으니 OXC만 사용하세요.

## 처음에는 이 순서로 보세요

1. `src/main.jsx` — 브라우저의 `#root` 영역에 React 화면을 연결하는 시작점입니다.
2. `src/App.jsx` — 실제 화면 내용과 버튼을 눌렀을 때의 동작이 있습니다.
3. `src/App.css` — `App.jsx`에 있는 화면 요소의 위치와 모양을 정합니다.
4. `src/index.css` — 글꼴, 색상, 화면 전체 크기처럼 공통으로 쓰는 스타일을 정합니다.

각 파일에는 코드 바로 위에 “왜 필요한지”와 “무엇을 바꾸면 되는지”를 설명하는 주석을 넣었습니다. 모르는 문법이 나오면 먼저 주석을 읽고, 그 아래 한 덩어리의 코드를 함께 보세요.

## 화면, 로직, CSS는 어디에 쓰나요?

React에서는 HTML과 아주 비슷한 문법을 **JSX**라고 부릅니다. 파일 역할을 아래처럼 나누면 처음에도 길을 잃지 않습니다.

| 하고 싶은 일 | 작성할 파일과 위치 | 현재 예시 |
| --- | --- | --- |
| 화면에 제목·버튼·문장 보여 주기 | `src/App.jsx`의 `return (...)` 안 | `<h1>`, `<button>`, `<p>` |
| 버튼을 눌렀을 때 값 바꾸기 | `src/App.jsx`에서 `return` 위에 상태·함수를 만들고, JSX에 `onClick` 연결 | `useState`, `setCount`, `onClick` |
| 버튼 색·크기·간격 바꾸기 | `src/App.css`에서 해당 `className` 선택자 수정 | `.counter` |
| 글꼴·배경처럼 모든 화면에 공통 적용 | `src/index.css` | `:root`, `body`, `h1` |
| React 앱을 브라우저에 처음 연결 | `src/main.jsx` | `createRoot(...).render(...)` |

새 기능을 만들 때는 이 순서로 작업해 보세요.

1. `App.jsx`의 `return (...)`에 먼저 화면을 만듭니다.
2. 클릭, 입력, 계산이 필요하면 같은 파일의 `return` 위에 상태와 함수를 만듭니다.
3. JSX의 `className`을 `App.css`에서 찾아 모양을 정합니다.
4. 저장하고 브라우저에서 직접 눌러 기대한 동작인지 확인합니다.

## 막혔을 때 검색하기

검색은 한국어 설명으로 시작하고, 이해한 뒤 공식 문서로 정확한 사용법을 확인해 보세요.

| 하고 싶은 일 | 먼저 검색할 한국어 문장 | 공식 참고 자료 |
| --- | --- | --- |
| 버튼을 누르면 숫자 바꾸기 | `React useState 버튼 클릭 상태 변경` | [React: State](https://react.dev/learn/state-a-components-memory) |
| 입력한 글자를 화면에 보이기 | `React input 입력값 useState` | [React: Adding Interactivity](https://react.dev/learn/adding-interactivity) |
| 조건에 따라 다른 문구 보여 주기 | `React 조건부 렌더링 if 삼항연산자` | [React: Conditional Rendering](https://react.dev/learn/conditional-rendering) |
| 목록을 화면에 반복해서 보여 주기 | `React map 배열 목록 렌더링 key` | [React: Rendering Lists](https://react.dev/learn/rendering-lists) |
| HTML 태그와 속성 뜻 확인하기 | `MDN HTML button input 설명` | [MDN: HTML 구조](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) |
| JavaScript 문법 확인하기 | `MDN JavaScript 함수 배열 조건문` | [MDN: JavaScript 시작하기](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) |

## Codex에게 요청하는 방법

Codex에게 코드 수정을 부탁할 때는 “무엇을 만들지”만 말하기보다, 관련 파일을 `@`로 함께 지정하고 확인 방법까지 알려 주세요. 코드를 통째로 복사하는 대신 `@src/App.jsx`처럼 파일을 걸면, Codex가 그 파일을 기준으로 작업 범위를 이해합니다.


```text

오류가 날 때는 오류 문구 전체와 관련 파일을 함께 지정하세요.

```text
@src/App.jsx @src/App.css

버튼을 누르면 화면이 바뀌지 않아. 브라우저 콘솔 오류는 아래와 같아.
[여기에 오류 문구 전체 붙여넣기]

먼저 원인을 설명하고, 가장 작은 수정으로 고쳐 줘.
수정 뒤에는 어떤 버튼 동작을 확인하면 되는지도 알려 줘.
```

“안 돼요”라고만 쓰는 것보다 오류 문구와 파일을 함께 주면 원인을 훨씬 빨리 좁힐 수 있습니다.

## 실행하기

처음 한 번만 필요한 패키지를 설치합니다.

```bash
npm install
```

개발 서버를 실행합니다.

```bash
npm run dev
```

터미널에 나온 주소(보통 `http://localhost:5173`)를 브라우저에서 엽니다. 파일을 저장하면 화면이 자동으로 새로고침됩니다.

## 직접 바꿔 보기

`src/App.jsx`에서 아래 두 곳부터 바꿔 보세요.

- `<h1>Get started</h1>`의 글자를 원하는 제목으로 바꿉니다.
- `Count is {count}`의 문구를 바꾸고, 버튼을 눌러 숫자가 계속 증가하는지 확인합니다.

그다음에는 `src/App.css`의 `.counter`에서 `background`와 `color` 값을 바꿔 버튼의 분위기를 바꿔 볼 수 있습니다.

## 폴더 구조

```text
src/
├── main.jsx    # React 앱을 브라우저에 연결
├── App.jsx     # 화면 내용과 클릭 동작
├── App.css     # 화면 영역별 스타일
└── index.css   # 전체 화면의 공통 스타일과 색상 변수
```
