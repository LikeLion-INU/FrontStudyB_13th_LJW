// Postman Mock Server에서 이미지 데이터 가져오기
async function fetchImages() {
  // 로딩 메시지 표시
  const gallery = document.getElementById("imageGallery");
  gallery.innerHTML =
    '<div class="message">이미지를 불러오는 중입니다...</div>';

  try {
    // Postman Mock Server URL 설정
    const MOCK_SERVER_URL =
      "https://d5fec527-8cdb-49a6-953d-640adc44d65b.mock.pstmn.io";

    // API 호출
    const response = await axios.get(`${MOCK_SERVER_URL}/api/images`);
    console.log("서버 응답:", response.data);

    // 응답 데이터 확인
    if (
      response.data &&
      response.data.images &&
      response.data.images.length > 0
    ) {
      displayImages(response.data.images);
    } else {
      gallery.innerHTML =
        '<div class="message error">이미지 데이터가 없습니다.</div>';
    }
  } catch (error) {
    console.error("이미지 가져오기 오류:", error);
    gallery.innerHTML = `
      <div class="message error">
        <p>이미지를 불러오는 중 오류가 발생했습니다.</p>
        <p>오류 메시지: ${error.message}</p>
      </div>
    `;
  }
}

// 이미지 데이터를 화면에 표시
function displayImages(images) {
  const gallery = document.getElementById("imageGallery");

  // 이미지 카드 생성
  const imageCards = images
    .map(
      (image) => `
    <div class="image-card">
      <img src="${image.url}" alt="${image.title}">
      <div class="image-info">
        <h3>${image.title}</h3>
        <p>ID: ${image.id}</p>
      </div>
    </div>
  `
    )
    .join("");

  // 갤러리에 추가
  gallery.innerHTML = imageCards;
}

// 이벤트 리스너 설정
document.addEventListener("DOMContentLoaded", () => {
  const loadButton = document.getElementById("loadImagesBtn");

  // 버튼 클릭 시 이미지 불러오기
  loadButton.addEventListener("click", fetchImages);
});
