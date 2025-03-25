const 디스플레이입력받는곳 = document.querySelector(".display");
let 현재계산식 = "0";
let 화면초기화필요 = false;
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

  // % 연산자 처리
  if (식.includes("%")) {
    식 = 퍼센트처리(식);
  }

  // 0으로 나누기 검사
  if (식.includes("/0")) {
    alert("0으로 나눌 수 없습니다!");
  }

  // 계산 실행
  const 결과 = eval(식);

  // 결과가 유효한지 확인
  if (!isFinite(결과)) {
    throw new Error("계산 결과가 유효하지 않습니다.");
  }

  현재계산식 = 결과.toString();
  화면업데이트();
}

// % 연산자 처리 함수
function 퍼센트처리(식) {
  // 간단한 % 처리 (a % b를 a를 b로 나눈 나머지로 계산)
  return 식.replace(/(\d+)%(\d+)/g, function (match, p1, p2) {
    return (parseInt(p1) % parseInt(p2)).toString();
  });
}

// 연산자 확인 함수
function 연산자인지확인(문자) {
  return ["+", "-", "×", "÷", "%"].includes(문자);
}

// 화면 업데이트 함수
function 화면업데이트() {
  디스플레이입력받는곳.value = 현재계산식;
}

// 숫자 버튼 이벤트 처리
const 숫자버튼들 = document.querySelectorAll(".number");
for (let i = 0; i < 숫자버튼들.length; i++) {
  숫자버튼들[i].addEventListener("click", () => {
    const 숫자 = 숫자버튼들[i].textContent;

    if (화면초기화필요) {
      현재계산식 = 숫자;
      화면초기화필요 = false;
    } else if (현재계산식 === "0") {
      현재계산식 = 숫자;
    } else {
      현재계산식 += 숫자;
    }

    마지막입력이연산자 = false;
    화면업데이트();
  });
}

// // 연산자 버튼 이벤트 처리
// document.querySelectorAll('.operator').forEach(버튼 => {
//     버튼.addEventListener('click', () => {
//         const 연산자 = 버튼.textContent;

//         // 연속된 연산자 입력 방지
//         if (마지막입력이연산자) {
//             // 마지막 연산자를 새 연산자로 교체
//             현재계산식 = 현재계산식.slice(0, -1) + 연산자;
//         } else {
//             현재계산식 += 연산자;
//         }

//         마지막입력이연산자 = true;
//         화면초기화필요 = false;
//         화면업데이트();
//     });
// });

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
    화면초기화필요 = false;
    화면업데이트();
  });
}

// 등호 버튼 이벤트 처리
document.querySelector(".equals").addEventListener("click", () => {
  // 마지막 입력이 연산자면 제거
  if (마지막입력이연산자) {
    현재계산식 = 현재계산식.slice(0, -1);
  }

  계산();
  마지막입력이연산자 = false;
  화면초기화필요 = true;
});

// 초기화(C) 버튼 이벤트 처리
document.querySelector(".clear").addEventListener("click", () => {
  현재계산식 = "0";
  마지막입력이연산자 = false;
  화면초기화필요 = false;
  화면업데이트();
});

// 삭제(<-) 버튼 이벤트 처리
document.querySelector(".delete").addEventListener("click", () => {
  if (현재계산식.length > 1) {
    // 마지막 문자 삭제
    현재계산식 = 현재계산식.slice(0, -1);
    // 마지막 문자가 연산자인지 확인
    마지막입력이연산자 = 연산자인지확인(현재계산식.slice(-1));
  } else {
    현재계산식 = "0";
    마지막입력이연산자 = false;
  }
  화면업데이트();
});
