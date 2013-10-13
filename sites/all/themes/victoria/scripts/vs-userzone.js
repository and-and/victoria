(function($){
  $(document).ready(function(){
      $('.login-form-registr-submit').click(function(){
        location.href = "/user/register";
        return false;
      });
    }
  );
  $(document).ready(function(){
      $('.vs-orders-list tr').click(function(){
        var order = $(this).find('a');
        var href = order.attr('href');
        var targ = order.attr('target');
        if (typeof href != 'undefined') {
          if (targ == '_blank') {
            window.open(href, '_blank');
          }
          else {
            window.open(href, '_self');
          }
        }
        return true;
      });
    }
  );
})(jQuery);