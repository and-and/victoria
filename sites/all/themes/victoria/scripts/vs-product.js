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
  jQuery('.fancy-add-to-cart-confirm').click();
}(jQuery);

function validationProductDisplay(wrapper) {
  var has_errors = false;
      elements = jQuery(wrapper).each(function() {
    if (jQuery(this).find('p a.selected').size() == 0) {
      has_errors = true;
      t_top = jQuery(this).offset().top - 2;
      t_left = jQuery(this).offset().left;
      tooltip = '<div class="tooltip-error grp tooltip-error-left"><p>Пожалуйста выберите <span class="ui-caps">размер&nbsp;</span></p></div>'
      jQuery('body').append(tooltip);
      var width = jQuery('.tooltip-error-left:not(.tooltip-error-left-processed)').width();
        t_left = t_left - width;
      jQuery('.tooltip-error-left:not(.tooltip-error-left-processed)').css({'top' : t_top, 'left': t_left}).addClass('tooltip-error-left-processed');
    }
  });
  return has_errors;
}(jQuery);

function tooltipErrorsDelete(wrapper) {
  jQuery(wrapper).find('.tooltip-error-left-processed').remove();
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
(function($) {
  Drupal.behaviors.popupCartConfirmButtonContinue = {
    attach:function() {
      $('.vs-close-popup-continue').click(function() {
        jQuery.fancybox.close();
      });
    }
  }
}(jQuery));
(function($) {
  Drupal.behaviors.popupCartConfirmGoCheckout = {
    attach:function() {
      $('.vs-cart-confirm-go_checkout').click(function() {
        var checkout = $(this).attr('rel');
        location.href = checkout;
      });
    }
  }
}(jQuery));
