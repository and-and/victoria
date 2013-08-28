(function($) {
  Drupal.behaviors.buttonBackgroundThreeSteps = {
    attach:function() {
      $('.vs-button-3-steps').hover(function() {
        $(this).css('background-position', '0% 50%');
      } , function () {
        $(this).css('background-position', '0% 0%');
      });
    }
  }
  Drupal.behaviors.buttonBackgorundTwoSteps = {
    attach:function(){
      $('.vs-button-2-steps').hover(function() {
        $(this).css('background-position', '0% bottom');
      } , function () {
        $(this).css('background-position', '0% top');
      });
    }
  }
  Drupal.behaviors.uiLoaderAjax ={
    attach:function(){
      $('.ui-loader').click(function(){
        var txt = $(this).find('span').html();
            throbber = '<div class="vs-ajax-submit-throbber"></div>'
        $(this).html('<span>' + txt + '</span>' + throbber);
        $(this).addClass('ui-loader-processed');
        return true;
      })
    }
  }
  Drupal.behaviors.uiLoaderNonAjax ={
    attach:function(){
      $('.ui-loader-non-ajax').click(function(){console.log("s");
        $('body').append('<div class="vs-non-ajax-loader"></div>');
        return;
      })
    }
  }
}(jQuery));

// Show overlay with loader for delivery order button.
(function($) {
  Drupal.behaviors.deliveryFormOpen = {
    attach:function() {
      $('.delivery-order-form-open').click(function(){
        jQuery('.fancy-delivery-order-form').click();
      });
    }
  }
  Drupal.behaviors.deliveryFormClose = {
    attach:function() {
      $('.vs-order-delivery-popup-close').click(function(){
        jQuery.fancybox.close();
        return false;
      });
    }
  }
  Drupal.behaviors.deliveryFormOrder = {
    attach:function() {
      $('.vs-order-delivery-order-button').click(function(){
        $(this).parents('.footer-bar-buttons').find('input').mousedown();
        jQuery.fancybox.showLoading();
        return false;
      });
    }
  }
}(jQuery));
