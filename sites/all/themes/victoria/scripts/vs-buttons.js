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
}(jQuery));
