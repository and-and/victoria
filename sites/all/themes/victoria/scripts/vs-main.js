(function($) {
  Drupal.behaviors.inputTitles = {
    attach:function() {
      $('input[type=text]').focus(function(){
        var val =   $(this).val()
            title = $(this).attr('title');
        if (val === "") {
          
        }
      });
    }
  }
})(jQuery);