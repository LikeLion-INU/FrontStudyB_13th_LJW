const 디스플레이입력받는곳 = document.querySelector(".display");
let 현재계산식 = "0";
let 마지막입력이연산자 = false;
// 계산 함수
function 계산() {
  // 연산자 변환 (×, ÷)
  let 식 = "";
  for (let i = 0; i < 현재계산식.length; i++) {
    switch (현재계산식[i]) {
      case "×":
        식 += "*";
        break;
      case "÷":
        식 += "/";
        break;
      default:
        식 += 현재계산식[i];
        break;
    }
  }

  // 0으로 나누기 검사
  if (식.includes("/0")) {
    alert("0으로 나눌 수 없습니다!");
    식 = "0";
  }

  // 계산 실행
  const 결과 = eval(식);

  현재계산식 = 결과.toString();
  화면업데이트();
}

// 숫자 버튼 이벤트 처리
const 숫자버튼들 = document.querySelectorAll(".number");
for (let i = 0; i < 숫자버튼들.length; i++) {
  숫자버튼들[i].addEventListener("click", () => {
    const 숫자 = 숫자버튼들[i].textContent;

    if (현재계산식 === "0") {
      현재계산식 = 숫자;
    } else {
      현재계산식 += 숫자;
    }

    마지막입력이연산자 = false;
    화면업데이트();
  });
}

// 연산자 버튼 이벤트 처리
const 연산자버튼들 = document.querySelectorAll(".operator");
for (let i = 0; i < 연산자버튼들.length; i++) {
  연산자버튼들[i].addEventListener("click", () => {
    const 연산자 = 연산자버튼들[i].textContent;

    // 연속된 연산자 입력 방지
    if (마지막입력이연산자) {
      // 마지막 연산자를 새 연산자로 교체
      현재계산식 = 현재계산식.slice(0, -1) + 연산자;
    } else {
      현재계산식 += 연산자;
    }

    마지막입력이연산자 = true;
    화면업데이트();
  });
}

// 화면 업데이트 함수
function 화면업데이트() {
  디스플레이입력받는곳.value = 현재계산식;
}
// 등호 버튼 이벤트 처리
document.querySelector(".equals").addEventListener("click", () => {
  // 마지막 입력이 연산자면 제거
  if (마지막입력이연산자) {
    현재계산식 = 현재계산식.slice(0, -1);
  }

  계산();
  마지막입력이연산자 = false;
});

// 초기화(C) 버튼 이벤트 처리
document.querySelector(".clear").addEventListener("click", () => {
  현재계산식 = "0";
  마지막입력이연산자 = false;
  화면업데이트();
});

// 삭제(<-) 버튼 이벤트 처리
document.querySelector(".delete").addEventListener("click", () => {
  if (현재계산식.length > 1) {
    // 마지막 문자 삭제
    현재계산식 = 현재계산식.slice(0, -1);
  } else {
    현재계산식 = "0";
    마지막입력이연산자 = false;
  }
  화면업데이트();
});
