const swiper = new Swiper(".navbar3 .area-con", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 슬라이더 할당한 swiper로 슬라이더 제어
$(".auto-start").on("click", function () {
  // 기본 설정으로 autoplay 시작
  swiper.autoplay.start();
});

$(".auto-stop").on("click", function () {
  swiper.autoplay.stop();
});
