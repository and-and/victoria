(function ($){
  $(document).ready(function(){
    $('.fancy-add-to-cart-confirm').fancybox({
//                maxWidth	: 800,
//		maxHeight	: 600,
                minWidth	: 450,
                minHeight	: 350,
		fitToView	: false,
//		width		: '70%',
//		height		: '70%',
		autoSize	: true,
                autoResize      : true,
		openEffect	: 'none',
		closeEffect	: 'none',
                closeBtn        : false,
                padding         : 0,
                helpers : { 
                  overlay : {closeClick: false}
                },
                scrollOutside   : false,
                afterClose     : function(){
                  $('#vs-cart-confirmation-ajax-wrapper').html('<div class="vs-fancybox-loading"></div>');
                }
    });
  });
})(jQuery);
(function($) {
  Drupal.behaviors.popupCustomCloseButton = {
    attach:function() {
      $('.vs-close-popup').click(function() {
        $.fancybox.close();
      });
    }
  }
}(jQuery));
