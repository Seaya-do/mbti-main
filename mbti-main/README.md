# ☑️ MBTI TEST
HTML, CSS, JavaScript로 간단한 MBTI TEST 만들기

## 1. HTML
* start.html
  >시작하기 버튼에 `onclick` 이벤트로 다음 페이지로 이동
  ```
  <button class="start" type="button" onclick="start()">시작하기</button>
  ```
* test.html

## 2. CSS
* 모바일 사이트 기준으로 작성
* 미디어 쿼리로 반응형 웹
* 다크모드

## 3. JavaScript
* start.js
  >시작하기 버튼에 연결한 `start()`함수
  ```
  function start() {
    location.href = 'test.html';
  }
  ```
