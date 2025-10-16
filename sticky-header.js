jQuery(document).ready(function($){
  var header = $('.site-header');  // change selector to match your header
  var headerOffset = header.offset().top;
  $(window).scroll(function(){
    if ($(window).scrollTop() > headerOffset) {
      header.addClass('sticky');
    } else {
      header.removeClass('sticky');
    }
  });
});
