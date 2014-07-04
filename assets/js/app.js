
$(document).ready(function() {
  $('.facebook-link').magnificPopup({type:'image'});

  $('.contact').on('click', function() {
    var $target = $('html,body'); 
    $target.animate({scrollTop: $target.height()}, 1000);
  });

  $('.hyper').hyphenate('de');

});