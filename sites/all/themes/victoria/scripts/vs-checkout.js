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
      $('#edit-continue').mousedown();
      $('#edit-continue').click();
      return false;
    });
    $('.vs-checkout-continue-guest').click(function(){
      $('.vs-checkout-continue-guest-submit input').mousedown();
      $('.vs-checkout-continue-guest-submit input').click();
      return false;
    });
    $('.vs-checkout-billing-confirm').click(function(){
      $(this).parent().find('.checkout-continue').mousedown();
      $(this).parent().find('.checkout-continue').click();
      return false;
    });
    $('.vs-complete-message-button').click(function(){
      location.href = '/';
      return false;
    });
  });
})(jQuery);
(function($) {
  Drupal.behaviors.test = {
    attach:function() {
      $('#edit-customer-profile-billing-commerce-customer-address-und-0-country').selectbox();
    }
  }
}(jQuery));

