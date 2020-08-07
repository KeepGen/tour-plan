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
          minlength: "At least 3 symbols required",
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
      if (/[A-Za-zа-яА-Я\s]/.test(str.charAt(i))) {
        out = out.concat(str.charAt(i));
      }
    }
    this.value = out;
  });

  $(".modal__form_name").bind("input", function (event) {
    var out = "";
    var str = this.value;
    for (var i = 0; i < str.length; i++) {
      if (/[A-Za-zа-яА-Я\s]/.test(str.charAt(i))) {
        out = out.concat(str.charAt(i));
      }
    }
    this.value = out;
  });

  window.onload = function () {
    setTimeout(function () {
      document.getElementById('map0921').src =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0412755651473!2d98.29254205098464!3d7.890750807918165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b7bfcd9f903%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sen!2s!4v1596215493146!5m2!1sen!2s';
    }, 1600);
  };

});