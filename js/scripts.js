function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

$(document).ready(function() {
  $('.hamburger').click(function () {
    var random = getRandomArbitrary(1, 24)
    if ($(this).hasClass('hamburger-active')) {
      $(this).removeClass('hamburger-active');
      $('.question').hide();
      $('.answer').show();
      $('.headtop').removeClass('head-animation');

      setTimeout(function(){
          $(".roll-img").removeClass("tp-animation");
      }, 3000);
    } else {
      $(this).addClass('hamburger-active');
      $('[class*="joke"]').hide();
      $('.joke' + random).show();
      $('.answer').hide();
      $('.question').show();
      $('.headtop').addClass('head-animation');
      setTimeout(function(){
          $(".roll-img").addClass("tp-animation");
      }, 1000);
    }
  });

});
