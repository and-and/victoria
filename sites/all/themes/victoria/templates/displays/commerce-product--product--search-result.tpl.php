<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$image = reset(element_children($content['field_prod_main_image']));

?>

  <a href="<?php print url('product/' . $elements['#entity']->product_id); ?>" class="vs-category-product-link">
    <div class="vs-category-product-image">
      <?php print drupal_render($content['field_prod_main_image'][$image]); ?>
    </div>
    <div class="vs-title-text">
      <div class="vs-category-product-title">
        <strong><span class="field-content"><?php print $title; ?></span></strong>
      </div>
      <div class="vs-category-product-price">
        <?php if (isset($field_old_price) && $field_old_price[0]['amount'] != 0) : ?>
          <span class="vs-category-product-old-price"><?php print $content['field_old_price'][0]['#markup']; ?> </span>
          <span class="vs-category-product-new-price"><?php print $content['commerce_price'][0]['#markup']; ?></span>
        <?php else : ?>
          <?php print $content['commerce_price'][0]['#markup']; ?>
        <?php endif; ?>
      </div>
    </div>
  </a>
