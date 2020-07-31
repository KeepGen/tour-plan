$(document).ready(function () {

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
  });
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


  // Подключение функции активации мобильного меню
  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass('navbar-bottom_visible');
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.modal__overlay').removeClass('modal__overlay_visible');
      $('.modal__dialog').removeClass('modal__dialog_visible');
    }
  });


  // Подключение Карты Яндекс по API
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [7.890996, 98.293066],
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

});