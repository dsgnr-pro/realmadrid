(function(){
  if (window.matchMedia("(min-width: 1199px)").matches) {
    $(window).scroll(function() {
      var sticky = $('.page-header'),
        scroll = $(window).scrollTop(),
        container = $('.page-main');

      if (scroll >= 320) {
        sticky.addClass('page-header--sticky');
        container.addClass('page-main--sticky');
      } else {
        sticky.removeClass('page-header--sticky');
        container.removeClass('page-main--sticky');
      }
    });
  }
})();
