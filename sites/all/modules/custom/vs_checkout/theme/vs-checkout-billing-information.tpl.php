<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<div id="checkoutWrapper" class="checkout-wrapper">
  <div id="checkoutClosed" class="checkout-panel grp hide expand" style="display: block;">
    <h1 class="large" style="text-transform: uppercase;">Оформить заказ</h1>
    <span id="checkoutStatus"> <b>Гость</b> <!--<a class="signInLink" href="#">Sign In</a>--> 
    </span>
    <div class="clearfix"></div>
  </div>
</div>

<div id="addresses">
  <div id="addressOpen" class="panel panel-open  first-panel" style="">

      <div class="panel-title grp">
        <h1 class="large">Контактная информация</h1>
        
      </div>
      <div class="panel-content">
        <div class="ui-alert<?php is_null(form_get_errors())? print ' element-hidden ': NULL; ?>" >
          <p>Пожалуйста проверьте правильность введенных данных.</p>
        </div>
        <p>&nbsp</p>
        <?php print drupal_render($form['customer_profile_billing']['commerce_customer_address']['und'][0]['name_block']); ?>
        <?php print drupal_render($form['customer_profile_billing']['field_address_mail']); ?>
        <?php print drupal_render($form['customer_profile_billing']['field_user_phone']); ?>
        <?php // print drupal_render($form['customer_profile_billing']['field_user_phone_1']); ?>
        <?php // print drupal_render($form['customer_profile_billing']['commerce_customer_address']['und'][0]['country']); ?>
        <?php print drupal_render($form['customer_profile_billing']['commerce_customer_address']['und'][0]['locality_block']); ?>
        <?php // print drupal_render($form['customer_profile_billing']['commerce_customer_address']['und'][0]['street_block']); ?>
        <?php print drupal_render($form['customer_profile_billing']['field_n_sclada']); ?>


        <div id="addresserrors"></div>
        

      </div>
      <div class="panel-footer grp">
        <button class="btn-40 btn-40-p small ui-loader vs-checkout-billing-confirm vs-button-3-steps"><span>Заказать</span></button>
        <div class="element-hidden">
          <?php print drupal_render_children($form); ?>
        </div>
      </div>
  
  </div>
  
</div>
