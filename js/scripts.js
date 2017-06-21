function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

$(document).ready(function() {
  $('.hamburger').click(function () {
    // get random number from 1 to (number of jokes)
    var random = getRandomArbitrary(1, 24);
    if ($(this).hasClass('hamburger-active')) {
      $(this).removeClass('hamburger-active'); //keeps track of state
      $('.question').hide();
      $('.answer').show('slide', {direction: 'left'}, 1000);
      $('.headtop').removeClass('head-animation'); //remove class so head can open again
    } else {
      $(this).addClass('hamburger-active'); //keeps track of state
      $(".roll-img").removeClass("tp-animation");  //hide tp
      $('[class*="joke"]').hide(); //hide all old jokes
      $('.joke' + random).show();
      $('.tp-sheet').show(); //white box hiding joke appears
      setTimeout(function(){
        $('.tp-sheet').hide('slide', {direction: 'right'}, 1000); //white box hiding joke slides away after 5.2 seconds
      }, 5200);
      $('.hamburger').addClass("unclickable"); //disable hamburger button for 5.2 seconds
      setTimeout(function(){
        $('.hamburger').removeClass('unclickable');
      }, 5200);
      $('.answer').hide();
      $('.question').show('slide', {direction: 'left'}, 1000);
      $('.headtop').addClass('head-animation'); //open head
      setTimeout(function(){
          $(".roll-img").addClass("tp-animation"); //tp flys out of head after 1 second
      }, 1000);
    }
  });

});
