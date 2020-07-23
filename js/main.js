var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  speed: 800,
  effect: 'slide',

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
})
// Keyboard navigation
var hotelSlider = new Swiper('.hotel-slider', {
  keyboard: {
    enabled: true,
  },
});

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  speed: 800,
  effect: 'slide',

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

// Покдлючение Параллакс
$('.parallax-window').parallax({
  imageSrc: 'img/newsletter-bg.jpg'
});

// Подключение Карты Яндекс по API
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.890703, 98.294204],
    zoom: 16,
  });

  // Метка с текстом
  var placemark3 = new ymaps.Placemark([7.890703, 98.294709], {
    iconContent: '<strong>DoubleTree</strong> by Hilton Phuket'
  }, {
    'preset': 'islands#redStretchyIcon'
  });
  myMap.geoObjects.add(placemark3);
}