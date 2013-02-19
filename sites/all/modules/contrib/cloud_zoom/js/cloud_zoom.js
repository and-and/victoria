(function ($) {
Drupal.behaviors.cloudZoom = {
  attach: function (context, settings) {
    $('.cloud-zoom').click(function () {
      items = $('.cloud-zoom:not(cloud-zoom-processed), .cloud-zoom-gallery:not(cloud-zoom-processed)', context);
      if (items.length) {
        items.addClass('cloud-zoom-processed').CloudZoom();
//        items.parent().css('float', 'left');
      }
      return false;
    });
     $('.cloud-zoom-gallery:not(cloud-zoom-processed)').click(function () {
       var mid_img = $(this).attr('mid');
           large_img = $(this).attr('href');
       $('.cloud-zoom').find('img').attr('src', mid_img);
       $('.cloud-zoom').attr('href', large_img);
       return false;
    });
//    $('.vs-product-dispay-main-image #wrap').hover(function(){}, function(){
//      alert('1');
//    }).hide();
    $('.cloud-zoom-gallery').hover(function(){
      $(this).addClass('thumb-hover');
    }, function(){
      $(this).removeClass('thumb-hover');
    });
    $('.cloud-zoom-gallery').click(function(){
      $('.cloud-zoom-gallery.selected').removeClass('selected');
      $(this).addClass('selected');
    });
  }
};
})(jQuery);
