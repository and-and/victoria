<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>
<?php /*
  <?php foreach ($fields as $id => $field): ?>
  <?php if (!empty($field->separator)): ?>
    <?php print $field->separator; ?>
  <?php endif; ?>

  <?php print $field->wrapper_prefix; ?>
    <?php print $field->label_html; ?>
    <?php print $field->content; ?>
  <?php print $field->wrapper_suffix; ?>
<?php endforeach; ?> 
 */ ?>
<div class="vs-product-display-column-1">
  <?php if (!empty($row->field_field_prod_main_image)) : ?>
    <div class="vs-product-dispay-main-image">
      <a class="cloud-zoom" href="<?php print image_style_url('large_product_image', $row->field_field_prod_main_image[0]['rendered']['#item']['uri']); ?>" id='zoom1'>
        <img src="<?php print image_style_url('product_dispaly_main', $row->field_field_prod_main_image[0]['raw']['uri']);; ?>">
      </a>
    </div>
  <?php endif; ?>
  <?php if (count($row->field_field_prod_main_image) > 1) : ?>
    <div class="vs-product-display-thumnails">
      <?php foreach ($row->field_field_prod_main_image as $img) : ?>
        <?php $img_thumb = theme('image_formatter', $img['rendered']); ?>
        <?php $img_medium = image_style_url('product_dispaly_main', $img['raw']['uri']); ?>
        <?php $img_large = image_style_url('large_product_image', $img['raw']['uri']); ?>
        <a class="cloud-zoom-gallery" href="<?php print $img_large; ?>" rel="useZoom: 'zoom1', smallImage: '<?php print $img_medium; ?>'"><?php print $img_thumb; ?></a>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
</div>
<div class="vs-product-display-column-2">
  <div class="vs-product-display-title">
    <h1><?php print $fields['title']->content; ?></h1>
  </div>
  <div class="vs-product-display-description">
    <?php print $fields['field_product_description']->content; ?>
  </div>
  <div class="vs-category-product-price vs-product-display-price">
    <?php if (!empty($fields['field_old_price']->content)) : ?>
      <span class="vs-category-product-old-price"><div class="field-content"><?php print $fields['field_old_price']->content; ?></div> </span>
      <span class="vs-category-product-new-price"><div class="field-content"><?php print $fields['commerce_price']->content; ?></div></span>
    <?php else : ?>
      <?php print $fields['commerce_price']->content; ?>
    <?php endif; ?>
  </div>
  <div class="vs-product-display-sku">
    <?php print $fields['sku']->content; ?>
  </div>
  <div class="vs-product-display-sizefit">
    <span>Size&fit</span>
  </div>
  <div class="attributes">
    <?php print $fields['add_to_cart_form']->content; ?>
  </div>
</div>
<div class="element-hidden">
  <a href="#vs-data" class="fancy-add-to-cart-confirm">This shows content of element who has id="data"</a>
  <div style="display:none">
    <div id="vs-data"><div class="vs-fancybox-loading"></div></div>
  </div>
  <script>jQuery(setTimeout(function() {jQuery('.fancy-add-to-cart-confirm').click();}, 1000));</script>>
</div>