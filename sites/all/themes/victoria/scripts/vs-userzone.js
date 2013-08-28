(function($){
  $(document).ready(function(){
      $('.login-form-registr-submit').click(function(){
        location.href = "/user/register";
        return false;
      });
    }
  );
})(jQuery);