var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  speed: 800,
  effect: 'slide',

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
})

var mySwiper = new Swiper('.swiper-container', {
  keyboard: {
    enabled: true,
  },
});