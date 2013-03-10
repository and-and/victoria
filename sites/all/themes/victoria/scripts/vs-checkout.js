(function($) {
  $(document).ready(function(){
    $('.vs-cart-remove-link').click(function(){
      $(this).parent().find('input.delete-line-item').mousedown();
      $(this).parent().find('input.delete-line-item').click();
      $(this).parents('.views-row').css({'opacity': '0.25'});
    })
  });
//  $(document).ready(function(){
//    $('.vs-checkout-login').click(function(){
//      $('.vs-checkout-login-submit input').click();
//      return false;
//    });
//    $('.vs-checkout-continue-guest').click(function(){
//      $('.vs-checkout-continue-guest-submit input').click();
//      return false;
//    });
//  });
}(jQuery));
(function($) {
  $(document).ready(function(){
    $('.vs-checkout-login').click(function(){
      $('.vs-checkout-login-submit input').mousedown();
      return false;
    });
    $('.vs-checkout-continue-guest').click(function(){
      $('.vs-checkout-continue-guest-submit input').mousedown();
      return false;
    });
      
  });
})(jQuery);

