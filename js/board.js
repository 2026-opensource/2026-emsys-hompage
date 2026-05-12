// 게시판 기능. 게시글 목록, 검색, 글 작성, 상세보기, 댓글
const likeButton = document.querySelector(".like-btn");
const dislikeButton = document.querySelector(".dislike-btn");

/* 좋아요 클릭 */
likeButton.addEventListener("click", () => {

  // 싫어요가 눌려있으면 막기
  if (dislikeButton.classList.contains("active")) {
    return;
  }

  // 자기 자신 토글
  likeButton.classList.toggle("active");
});

/* 싫어요 클릭 */
dislikeButton.addEventListener("click", () => {

  // 좋아요가 눌려있으면 막기
  if (likeButton.classList.contains("active")) {
    return;
  }

  // 자기 자신 토글
  dislikeButton.classList.toggle("active");
});