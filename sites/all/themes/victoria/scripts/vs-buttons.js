(function($) {
  Drupal.behaviors.buttonBackgroundThreeSteps = {
    attach:function() {
      $('.vs-button-3-steps').hover(function() {
        $(this).css('background-position-y', '50%');
      } , function () {
        $(this).css('background-position-y', '0%');
      });
    }
  }
  Drupal.behaviors.buttonBackgorundTwoSteps = {
    attach:function(){
      $('.vs-button-2-steps').hover(function() {
        $(this).css('background-position-y', 'bottom');
      } , function () {
        $(this).css('background-position-y', 'top');
      });
    }
  }
}(jQuery));
