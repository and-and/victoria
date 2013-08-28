<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$quantity = $form['#delivery_products_quantity'];
?>
<!--<div class="vs-delivery-order-form-content-wrapper" >-->
  <div class="vs-delivery-order-form-content checkout_completion_message" >
    <p>
      <?php print t('!Quantity продукт!Num_ending успешно заказан!Num_ending1. Заказ №!Order_id .
Мы свяжемся с вами для подтверждения заказа.', array(
    '!Quantity' => $quantity,
    '!Num_ending' => vs_product_get_num_ending($quantity),
    '!Num_ending1' => vs_product_get_num_ending($quantity, array('', 'о', 'о')),
    '!Order_id' => $form['#delivery_order_number'])); ?>
    </p>
  </div>
  <div class="vs-cart-confirm-footer">
    <div class="vs-cart-confirm-footer-buttons vs-order-delivery-popup-footer">
      <?php if (isset($form['#delivery_order_id'])) : ?>
        <?php print drupal_render($form['continue_order']) ?> 
      <?php endif; ?>
      <div class="grp footer-bar-buttons">
        <button class="ui-button btn-40 btn-40-p checkout vs-button-3-steps vs-order-delivery-popup-close" ><?php print t('Вернуться на сайт'); ?></button>
      </div>
    </div>
  </div>
<!--</div>-->
<div class="element-hidden">
  <?php print drupal_render_children($form); ?>
</div>
