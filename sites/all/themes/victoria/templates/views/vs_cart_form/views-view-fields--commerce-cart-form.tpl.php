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
$options = vs_product_cart_get_html_options($row->_field_data['commerce_line_item_field_data_commerce_line_items_line_item_']['entity']->line_item_id, $row->_field_data['commerce_product_field_data_commerce_product_product_id']['entity']);
?>
<div class="grp bagitem bagitem-editable">
  <div class="grp product">
    <div class="grp bagitem-image">
      <div class="thumb-wrap">					
        <div class="item-wrap viewbag-item-wrap edit-btn">
          <span class="thumb">
            <?php print $fields['field_prod_main_image']->content; ?>
          </span>
        </div>
      </div>
      <div class="edit">
        <a class="ui-callout btn-item-remove vs-cart-remove-link" tabindex="0">Удалить</a>
        <div class="element-hidden">
          <?php print $fields['edit_delete']->content; ?>
        </div>
      </div>
    </div>
    <div class="grp bagitem-data">
      <p class="item-name small edit-btn cufon-replaced"><?php print $fields['line_item_title']->content; ?></p>
      <p class="item-number"><?php print $fields['sku']->content; ?></p>
      <div class="grp item-specs">
        <?php if (!empty($options)) : ?>
          <?php foreach ($options as $option) : ?>
            <p><span><?php print $option['label']; ?></span><?php print $option['value']; ?></p>
          <?php endforeach; ?>
        <?php endif; ?>
        <p><span class="label">Количество</span><?php print $fields['quantity']->content; ?></p>
      </div>
    </div>
    <div class="grp bagitem-price" style="margin-right: 0px;">
      <p class="grp small item-total R  cufon-replaced"><span><?php print $fields['commerce_total']->content; ?></span></p>
    </div>
  </div>
</div>