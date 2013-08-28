<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<div class="vs-delivery-order-form-content-wrapper" >
  <div class="vs-delivery-order-form-content" >
    <div class="vs-scrollable-popup">
      <div class="checkout vs-register">
        <?php foreach (element_children($form) as $key) : ?>
          <?php if ($key != 'submit') : ?>
            <?php print drupal_render($form[$key]); ?>
          <?php endif; ?>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
  <div class="vs-cart-confirm-footer">
    <div class="vs-cart-confirm-footer-buttons vs-order-delivery-popup-footer">
      <?php if (form_get_errors()) : ?>
        <div class="ui-alert" style="display: block; float: left;">
          <p>Поля отмеченные звездочкой обязательные для заполнения.</p>
        </div>
      <?php endif; ?>
      <div class="grp footer-bar-buttons">
        <div class="element-hidden">
        <?php print drupal_render($form['submit']); ?>
          </div>
        <button class="ui-button btn-40 btn-40-p checkout vs-button-3-steps vs-order-delivery-order-button">Оформить заказ</button>
      </div>
    </div>
  </div>
</div>
