<?php $quantity = vs_product_cart_get_count_products(); ?>
<?php $ending = vs_product_get_num_ending($quantity['product_count']); ?>
<div class="shopping-bag vs-button-2-steps" style="visibility: visible;">
  <a href="/checkout/<?php print $quantity['order_id']; ?>">Корзина</a>
  <em><?php ($quantity['product_count'] > 0)? print $quantity['product_count'] . ' продукт' . $ending: NULL;?></em>
</div>