var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'locale': {} };
var GPopup = GPopup || { 'settings': {}, 'behaviors': {}, 'locale': {} };

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

    $('.fancy-delivery-order-form').fancybox({
//                maxWidth	: 800,
            maxHeight	: 800,
            minWidth	: 450,
            minHeight	: 350,
            fitToView	: false,
            openEffect	: 'none',
            closeEffect	: 'none',
            closeBtn        : false,
            padding         : 0,
            scrolling   : 'no',
            type: 'ajax',
            helpers : { 
              overlay : {closeClick: false}
            },
            scrollOutside   : false,
            afterLoad      : function(){
              setTimeout(function(){
                if (Drupal.attachBehaviors) {
                  Drupal.attachBehaviors(document, GPopup.settings);
                  GPopup = { 'settings': {}, 'behaviors': {}, 'locale': {} };
                };
                
              }, 0);
            },
      });
    $('.vs-payment-confirm-popup').fancybox({
//                maxWidth	: 800,
//            maxHeight	: 800,
            minWidth	: 450,
            minHeight	: 350,
            fitToView	: false,
            openEffect	: 'none',
            closeEffect	: 'none',
            closeBtn        : false,
            padding         : 0,
            scrolling   : 'no',
            type: 'ajax',
            helpers : { 
              overlay : {closeClick: false}
            },
            scrollOutside   : false,
            afterLoad      : function(){
              setTimeout(function(){
                if (Drupal.attachBehaviors) {
                  Drupal.attachBehaviors(document, GPopup.settings);
                  GPopup = { 'settings': {}, 'behaviors': {}, 'locale': {} };
                };
                
              }, 0);
            },
      });
    $('.popup-sizes').fancybox({
//                maxWidth	: 800,
            maxHeight	: 650,
            minWidth	: 700,
            minHeight	: 350,
            fitToView	: false,
            openEffect	: 'none',
            closeEffect	: 'none',
            closeBtn        : false,
            padding         : 0,
            scrolling   : 'no',
            type: 'ajax',
            helpers : { 
              overlay : {closeClick: false}
            },
            scrollOutside   : false,
            afterLoad      : function(){
              setTimeout(function(){
                if (Drupal.attachBehaviors) {
                  Drupal.attachBehaviors(GPopup.settings);
                  GPopup = { 'settings': {}, 'behaviors': {}, 'locale': {} };
                };
                
              }, 0);
            },
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
  Drupal.behaviors.scrollPoppupContent = {
    attach:function() {
      jQuery('.vs-scrollable-popup').jScrollPane({showArrows: true});
    }
  }
}(jQuery));


