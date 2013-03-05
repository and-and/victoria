<div id="checkoutPanel" class="checkout">
  <div class="panel panel-open ">
    <div class="panel-title checkout-header">
      <h1 class="large" style="text-transform: uppercase;">Оформить заказ</h1>
    </div>
    <div class="panel-body checkout-body">
      <div>
        <div class="signin">
          <div class="signin-header grp">
            <h3 class="small">Зарегистрированный пользователь</h3>
          </div>
          <div class="signin-body">
            <!--<p class="instruction">Sign in for faster checkout.</p>-->
                <div class="ui-alert vs-signin-error-msg" style="display: none;">
                  <p>Неверное имя пользователя или пароль. Проверьте правильность введенных данных.</p>
                </div>
                <?php print render($form['name']); ?>
                <?php print render($form['pass']); ?>
<!--              <div class="password-help">
                <a href="/commerce/forgotPassword.vs?namespace=user&amp;origin=logon.jsp&amp;event=link.forgotPassword" class="ui-callout">Password Help</a>
              </div>-->
              <button class="btn-40 btn-40-p small ui-loader vs-checkout-login vs-button-3-steps"><span>Войти и заказать</span></button>
              <div class="element-hidden vs-checkout-login-submit">
                <?php print render($form['actions']['submit']); ?>
              </div>
          </div>
        </div>
        <div class="ui-vr"></div> <!--topc changes line ramya-->
        <div class="checkout-option">

          <h3 class="small">Новый пользователь</h3>
          <!--<p>You'll have the option to register and save your information later in the checkout process.</p>-->

          <div class="panel-footer grp"> 
            <button class="btn-40 btn-40-p btn-w-195 small ui-loader vs-checkout-continue-guest vs-button-3-steps"><span>Заказать как гость</span></button>
            <div class="element-hidden vs-checkout-continue-guest-submit">
              <?php print render($form['actions']['continue_guest']); ?>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
<div class="element-hidden"><?php print drupal_render_children($form); ?></div>