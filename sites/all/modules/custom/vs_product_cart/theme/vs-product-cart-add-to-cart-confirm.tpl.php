<div class="vs-add-to-cart-confirmation-wrapper">
  <div class="column-1">
    <a class="vs-close-popup vs-button-2-steps">close</a>
    <div class="title-bar  titlebar-on">
      <div class="grp titlebar-content">
        <h1 class="title large cufon-replaced">
          <?php print $quantity . ' продукт' . vs_product_get_num_ending($quantity) . ' добавлен' . vs_product_get_num_ending($quantity, array('', 'о', 'о')) . ' в вашу корзину'; ?>
        </h1>
      </div>
    </div>
    <div class="vs-cart-confirm-content">
      <div class="vs-cart-confirm-img">
        <?php print theme('image_style', $product_img); ?>
      </div>
      <div class="vs-cart-confirm-titles">
        <h3><?php print $product->title; ?></h3>
        <p class="item-number"><?php print $product->sku; ?></p>
        <div class="item-specs">
          <?php foreach ($options as $option) : ?>
            <p><span><?php print $option['label']; ?></span><?php print $option['value']; ?></p>
          <?php endforeach; ?>
          <p><span>Количество:</span><?php print $line_item->quantity; ?></p>
        </div>
      </div>
      <div class="vs-cart-confirm-price">
        <p class="grp small item-total R  cufon-replaced"><span><?php print $price; ?></span></p>
      </div>
    </div>
    <div class="vs-cart-confirm-footer">
      <div class="vs-cart-confirm-footer-total">
        <?php $cart_qty = vs_product_cart_get_count_products(); ?>
        <div>
          <strong><?php print $cart_qty['product_count']; ?> </strong> Продукт<?php print vs_product_get_num_ending($cart_qty['product_count']); ?> в вашей корзине.
        </div>
        <h1 class="large cufon-replaced" id="subtotal"><?php print $order_total; ?></h1>
      </div>
      <div class="vs-cart-confirm-footer-buttons">
        <div class="grp footer-bar-buttons">
          <a class="ui-button btn-40-b continue vs-button-3-steps">Продолжить покупки</a>
          <button class="ui-button btn-40 btn-40-p checkout vs-button-3-steps">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
  <div class="column-2">

  </div>
</div>
<script>jQuery.fancybox.update();</script>