(function ($){
  $(document).ready(function(){
    $('.fancy-add-to-cart-confirm').fancybox({
//                maxWidth	: 800,
//		maxHeight	: 600,
                minWidth	: 450,
                minHeight	: 350,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: true,
		openEffect	: 'none',
		closeEffect	: 'none',
                closeBtn        : false,
                padding         : 0,
                helpers : { 
                  overlay : {closeClick: false}
                },
                scrollOutside   : false
    });
  });
})(jQuery);