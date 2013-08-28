
<div class="panel-title vs-order-complete-message-title">
  <h1 class="large cufon-replaced">Заказ №<?php print $form['#vs_order_id']; ?></h1>
</div>
<div class="vs-complete-message-wrapper">
  <?php print drupal_render($form['checkout_completion_message']); ?>
    <button formaction="<?php print url('<front>'); ?>" class="btn-40 vs-button-3-steps vs-complete-message-button">Вернуться на главную</button>
</div>