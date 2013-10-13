(function($) {
  Drupal.behaviors.searchHeaderRedirect = {
    attach:function() {
      jQuery('#searchform input').watermark('Поиск', {useNative: false});
      $('#searchform .vs-header-search-submit').click(function(){
        var path = '/product/search/' + $(this).parent().find('input[type=text]').val();
        document.location.href = path;
        return false;
      })
    }
  }
}(jQuery));
