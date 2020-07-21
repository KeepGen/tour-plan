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
    'preset': 'islands#yellowStretchyIcon'
  });

  myMap.geoObjects.add(placemark3);
}