<?php

/**
 * @file
 * Commerce panels integration plugin nodeque suggestion product block.
 */

 /**
  * Plugins are described by creating a $plugin array which will be used
  * by the system that includes this file.
  */

$plugin = array(
  'single' => TRUE,
  'title' => t('VS User delivery order view'),
  'description' => t('Provide user order view'),
  'category' => t('VS'),
//  'edit form' => 'querlain_checkout_suggestions_edit_form',
  'render callback' => 'vs_userzone_delivery_order_view_callback',
  'required context' => new ctools_context_required(t('Order'), 'delivery_order'),
);


/**
 * Output function for the querlain checkout suggestion block.
 */
function vs_userzone_delivery_order_view_callback($subtype, $conf, $panel_args, $context) {
  global $user;
  if (!$user->uid) {
    return;
  }
  
  drupal_add_js(drupal_get_path('theme', 'victoria') . '/scripts/vs-userzone.js');
  //Init variables
  $block = new stdClass();
  
  $order = $context->data;
  $order_wrapper = entity_metadata_wrapper('delivery_order', $order);

  $billing['name'] = $order_wrapper->field_fname_lname->value(array('sanitize' => TRUE));
  $billing['city'] = $order_wrapper->field_city->value(array('sanitize' => TRUE));
  $billing['n_sclada'] = $order_wrapper->field_n_sclada->value(array('sanitize' => TRUE));
  $billing['phone'] = $order_wrapper->field_user_phone->value(array('sanitize' => TRUE));

  $line_item_wrappers = $order_wrapper->field_delivery_products;
  $products = array();
  foreach ($line_item_wrappers as $product_wrapper) {
    $line_item_id = $product_wrapper->id->raw();
    $sku = $product_wrapper->field_product_code->value(array('sanitize' => TRUE));
    $link = $product_wrapper->field_vs_link->value(array('sanitize' => TRUE));
    if (strpos('http://', $link) === FALSE || strpos('https://', $link) === FALSE) {
      $link = 'http://' . $link;
    }
    $products[$line_item_id]['sku'] = l($sku, $link, array('absolute' => TRUE, 'external' => TRUE, 'attributes' => array('target' => '_blank')));
    $products[$line_item_id]['size'] = $product_wrapper->field_product_size->value(array('sanitize' => TRUE));
    $products[$line_item_id]['color'] = $product_wrapper->field_product_color->value(array('sanitize' => TRUE));
    $products[$line_item_id]['price'] = $product_wrapper->field_product_price->value(array('sanitize' => TRUE));
  }
  
  $order_number = $order_wrapper->field_order_number->value();

  $block->content = theme('vs_user_delivery_order_view', array(
    'order_number' => $order_number,
    'billing' => $billing,
    'products' => $products,
  ));

  return $block;
}
