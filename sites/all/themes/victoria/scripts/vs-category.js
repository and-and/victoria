(function($) {
  $(document).ready(function() {
    $('.vs-category-product-link').hover(function () {
        $(this).find('.vs-category-product-image').addClass('hover');
        $(this).find('.vs-title-text').addClass('hover');
      }, function () {
        $(this).find('.vs-category-product-image').removeClass('hover');
        $(this).find('.vs-title-text').removeClass('hover');
    });
  }); 
})(jQuery);