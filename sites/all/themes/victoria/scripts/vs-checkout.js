(function($) {
  $(document).ready(function(){
    $('.vs-cart-remove-link').click(function(){
      $(this).parent().find('input.delete-line-item').mousedown();
      $(this).parent().find('input.delete-line-item').click();
      $(this).parents('.views-row').css({'opacity': '0.25'});
    })
  });
}(jQuery));
