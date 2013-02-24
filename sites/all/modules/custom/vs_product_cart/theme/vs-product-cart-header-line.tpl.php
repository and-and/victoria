<?php $quantity = vs_product_cart_get_count_products(); ?>
<?php $ending = vs_product_get_num_ending($quantity); ?>
<div class="shopping-bag vs-button-2-steps" style="visibility: visible;">
  <a href="#">Корзина</a>
  <em><?php ($quantity > 0)? print $quantity . ' продукт' . $ending: NULL;?></em>
</div>