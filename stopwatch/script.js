// 스톱워치 상태 변수들
let 시작시간; // 스톱워치 시작 시간
let 경과시간 = 0; // 총 경과 시간 (밀리초)
let 인터벌; // setInterval 함수의 ID를 저장
let 실행중 = false; // 스톱워치 실행 여부 상태

/**
 * 시간을 업데이트하고 화면에 표시하는 함수
 * 10밀리초마다 호출됨
 */
function 시간업데이트() {
  경과시간 += 10; // 10밀리초씩 증가

  // 시간 단위별로 계산
  const 밀리초 = Math.floor((경과시간 % 1000) / 10); // 밀리초 부분 (10밀리초 단위)
  const 초 = Math.floor((경과시간 / 1000) % 60); // 초 부분 (0-59)
  const 분 = Math.floor((경과시간 / (1000 * 60)) % 60); // 분 부분 (0-59)
  const 시간 = Math.floor(경과시간 / (1000 * 60 * 60)); // 시간 부분

  // 시간을 00:00:00.00 형식으로 포맷팅
  const 형식화된시간 =
    (시간 < 10 ? "0" + 시간 : 시간) +
    ":" +
    (분 < 10 ? "0" + 분 : 분) +
    ":" +
    (초 < 10 ? "0" + 초 : 초) +
    "." +
    (밀리초 < 10 ? "0" + 밀리초 : 밀리초);

  // 화면에 표시
  document.querySelector(".time").textContent = 형식화된시간;
}

// 시작 버튼 클릭 이벤트 처리
document.querySelector(".start").addEventListener("click", () => {
  if (!실행중) {
    인터벌 = setInterval(시간업데이트, 10); // 10밀리초마다 시간 업데이트
    실행중 = true;

    // 버튼 상태 업데이트
    document.querySelector(".start").disabled = true; // 시작 버튼 비활성화
    document.querySelector(".stop").disabled = false; // 정지 버튼 활성화
  }
});

// 정지 버튼 클릭 이벤트 처리
document.querySelector(".stop").addEventListener("click", () => {
  if (실행중) {
    clearInterval(인터벌); // 타이머 중지
    실행중 = false;

    // 버튼 상태 업데이트
    document.querySelector(".start").disabled = false; // 시작 버튼 활성화
    document.querySelector(".stop").disabled = true; // 정지 버튼 비활성화
  }
});

// 리셋 버튼 클릭 이벤트 처리
document.querySelector(".reset").addEventListener("click", () => {
  clearInterval(인터벌); // 타이머 중지
  경과시간 = 0; // 경과 시간 초기화
  실행중 = false; // 실행 상태 초기화
  document.querySelector(".time").textContent = "00:00:00.00"; // 화면 표시 초기화

  // 버튼 상태 초기화
  document.querySelector(".start").disabled = false;
  document.querySelector(".stop").disabled = false;
});

// 초기 상태에서는 정지 버튼 비활성화
document.querySelector(".stop").disabled = true;
