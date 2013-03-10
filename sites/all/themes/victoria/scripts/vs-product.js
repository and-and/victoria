(function($) {
  Drupal.behaviors.attributeSelector = {
    attach:function() {
      $('.vs-product-display-variants p').click(function() {
        $(this).parent('.vs-product-display-variants').find('a.selected').removeClass('selected');
        $(this).find('a').addClass('selected');
        var size = $(this).find('a').text();
        $(this).parents('.vs-product-display-attribute').find('.vs-product-display-options-selected').html('&nbsp<b>'+size+'</b>');
        $(this).parents('.vs-product-display-attribute').find('input').val(size);
      });
    }
  }
  
}(jQuery));
function popupConfirmStart() {
  $('.fancy-add-to-cart-confirm').click();
}(jQuery);

function validationProductDisplay(wrapper) {
  var has_errors = false;
      elements = $(wrapper).each(function() {
    if ($(this).find('p a.selected').size() == 0) {
      has_errors = true;
      t_top = $(this).offset().top - 2;
      t_left = $(this).offset().left;
      tooltip = '<div class="tooltip-error grp tooltip-error-left"><p>Please select a <span class="ui-caps">Cup Size&nbsp;</span></p></div>'
      $('body').append(tooltip);
      var width = $('.tooltip-error-left:not(.tooltip-error-left-processed)').width();
        t_left = t_left - width;
      $('.tooltip-error-left:not(.tooltip-error-left-processed)').css({'top' : t_top, 'left': t_left}).addClass('tooltip-error-left-processed');
    }
  });
  return has_errors;
}(jQuery);

function tooltipErrorsDelete(wrapper) {
  $(wrapper).find('.tooltip-error-left-processed').remove();
}(jQuery);

(function($) {
  $(document).ready(function(){
    $('.vs-product-display-add-to-bag .add-to-bag-button').click(function(){
      tooltipErrorsDelete('body');
      var err = validationProductDisplay('.vs-product-display-variants');
      if (!err) {
        $('.vs-product-display-add-to-bag input').mousedown();
        popupConfirmStart();
      }
    });
  });
})(jQuery);
