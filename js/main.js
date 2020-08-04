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

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your name must be at least 5 symbols",
        },
        email: {
          required: "Email address is required",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone number is required",
        },
      },
    });
  });

  // Подключение масок для номеров телефонов
  $('.footer__form_phone').mask('+7 (999) 999-99-99');
  $('.modal__form_phone').mask('+7 (999) 999-99-99');

  // Подключение маски для имени (ограничение по цифрам)
  $(".footer__form_name").bind("input", function (event) {
    var out = "";
    var str = this.value;
    for (var i = 0; i < str.length; i++) {
      if (/[A-Za-z]/.test(str.charAt(i))) {
        out = out.concat(str.charAt(i));
      }
    }
    this.value = out;
  });

  $(".modal__form_name").bind("input", function (event) {
    var out = "";
    var str = this.value;
    for (var i = 0; i < str.length; i++) {
      if (/[A-Za-z]/.test(str.charAt(i))) {
        out = out.concat(str.charAt(i));
      }
    }
    this.value = out;
  });

  AOS.init();

});