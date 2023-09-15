// 프로모션 수평 슬라이드 기능
new Swiper('.main-bg .swiper', {
  direction: 'horizontal', // 수평 슬라이드, 기본값이 'horizontal' 이라 안줘도 됨
  loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4-> 다시 1
  autoplay: { // 자동 재생 여부
    delay: 5000, // 5초마다 슬라이드 바뀜(기본값: 3000)
    },
  pagination: { // 페이지 번호 사용
    el: '.main-bg .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true
  }
});

