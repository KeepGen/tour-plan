var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  speed: 800,
  effect: 'coverflow',

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
})