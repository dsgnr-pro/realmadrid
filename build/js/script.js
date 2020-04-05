// Menu-Toggle

$(".main-nav__toggle").click(function () {
  $('.main-nav__wrap').slideToggle();
  $(this).toggleClass("main-nav__toggle--active");
});

// Menu-items

$(".site-list__item--submenu").click(function () {
  $(this).children('.site-list__submenu').slideToggle();
  $(this).toggleClass("site-list__item--submenu--active");
});

// Comments-Expand

$(".comments__origin-expand").click(function () {
  $(this).parent().siblings('.comments__origin-text').slideToggle();
});


// Slider-Index

$(".slider-index").slick({
  arrows: true,
  dots: true,
  rows: false,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false
    }
  }]
});

//

$('input[name="age"]').mask("99/99/9999");
$('input[name="age_field"]').mask("99/99/9999");

// Slider-Photos

$(".slider-photos").slick({
  arrows: true,
  dots: false,
  rows: false,
  responsive: [{
    breakpoint: 1199,
    settings: {
      arrows: false,
      dots: true
    }
  }]
});

// Trophies

$(".trophies__button").click(function () {
  $(this).parent().siblings('.trophies__content').slideToggle();
  $(this).toggleClass("button--active");
  $('.slider-photos').slick('setPosition');
});

// Calendar-Slide

if (window.matchMedia('(max-width: 767px)').matches) {
  $(".calendar__item").click(function () {
    $(this).children(".calendar__more").slideToggle();
    $(this).children(".more").toggleClass("more--active");
  });
}

// Filter

$(".filter-toggle").click(function () {
  $(".filters").slideToggle();
  $(this).toggleClass("filter-toggle--active");
});

// Form-Labels

var inputs = document.querySelectorAll('.form__input');

inputs.forEach(function(el) {
  if (el.value != "") {
    el.classList.add('form__input--content');
  }
});

$(".form__input").focusout(function () {
  if ($(this).val() !== "") {
    $(this).addClass("form__input--content");
  } else {
    $(this).removeClass("form__input--content");
  }
});

// Popup

$('.popup--link').magnificPopup({
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function () {
      this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
