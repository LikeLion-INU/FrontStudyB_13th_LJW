let 시작시간;
let 경과시간 = 0;
let 인터벌;
let 실행중 = false;

function 시간업데이트() {
  경과시간 += 10; // 10밀리초씩 증가

  const 밀리초 = Math.floor((경과시간 % 1000) / 10);
  const 초 = Math.floor((경과시간 / 1000) % 60);
  const 분 = Math.floor((경과시간 / (1000 * 60)) % 60);
  const 시간 = Math.floor(경과시간 / (1000 * 60 * 60));

  const 형식화된시간 =
    (시간 < 10 ? "0" + 시간 : 시간) +
    ":" +
    (분 < 10 ? "0" + 분 : 분) +
    ":" +
    (초 < 10 ? "0" + 초 : 초) +
    "." +
    (밀리초 < 10 ? "0" + 밀리초 : 밀리초);

  document.querySelector(".time").textContent = 형식화된시간;
}

document.querySelector(".start").addEventListener("click", () => {
  if (!실행중) {
    인터벌 = setInterval(시간업데이트, 10);
    실행중 = true;

    document.querySelector(".start").disabled = true;
    document.querySelector(".stop").disabled = false;
  }
});

document.querySelector(".stop").addEventListener("click", () => {
  if (실행중) {
    clearInterval(인터벌);
    실행중 = false;

    document.querySelector(".start").disabled = false;
    document.querySelector(".stop").disabled = true;
  }
});

document.querySelector(".reset").addEventListener("click", () => {
  clearInterval(인터벌);
  경과시간 = 0;
  실행중 = false;
  document.querySelector(".time").textContent = "00:00:00.00";

  document.querySelector(".start").disabled = false;
  document.querySelector(".stop").disabled = false;
});

document.querySelector(".stop").disabled = true;
