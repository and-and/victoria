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
