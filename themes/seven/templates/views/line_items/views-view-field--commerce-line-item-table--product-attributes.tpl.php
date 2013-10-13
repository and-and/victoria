<?php
/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
 $line_item = $row->_field_data['line_item_id']['entity'];
 $line_item_wrapper = entity_metadata_wrapper('commerce_line_item', $line_item);
 $product = $line_item_wrapper->commerce_product->value();
 $options = vs_product_cart_get_html_options($line_item->line_item_id, $product);
 $values = array();
 foreach ($options as $option) {
   $values[] = implode(' ', $option);
 }
?>
<?php print implode(', ', $values); ?>
