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
  'title' => t('VS User commerce order view'),
  'description' => t('Provide user order view'),
  'category' => t('VS'),
//  'edit form' => 'querlain_checkout_suggestions_edit_form',
  'render callback' => 'vs_userzone_user_order_view_callback',
  'required context' => new ctools_context_required(t('Order'), 'commerce_order'),
);


/**
 * Output function for the querlain checkout suggestion block.
 */
function vs_userzone_user_order_view_callback($subtype, $conf, $panel_args, $context) {
  global $user;
  if (!$user->uid) {
    return;
  }
  
  drupal_add_js(drupal_get_path('theme', 'victoria') . '/scripts/vs-userzone.js');
  //Init variables
  $block = new stdClass();
  
  $order = $context->data;
  $order_wrapper = entity_metadata_wrapper('commerce_order', $order);
  
  $billing_wrapper = $order_wrapper->commerce_customer_billing;
  $commerce_address = $billing_wrapper->commerce_customer_address->value();
  $billing['f_name'] = check_plain($commerce_address['first_name']);
  $billing['l_name'] = check_plain($commerce_address['last_name']);
  $billing['city'] = check_plain($commerce_address['locality']);
  $billing['n_sclada'] = $billing_wrapper->field_n_sclada->value(array('sanitize' => TRUE));
  $billing['mail'] = $billing_wrapper->field_address_mail->value(array('sanitize' => TRUE));
  $billing['phone'] = $billing_wrapper->field_user_phone->value(array('sanitize' => TRUE));

  $line_item_wrappers = $order_wrapper->commerce_line_items;
  $products = array();
  foreach ($line_item_wrappers as $line_item_wrapper) {
    $product = $line_item_wrapper->commerce_product->value();
    if (empty($product)) {
      continue;
    }
    $line_item_id = $line_item_wrapper->line_item_id->raw();
    $options = vs_product_cart_get_html_options($line_item_id, $product);
    $sizes = array();
    if (!empty($options)) {
      foreach ($options as $option) {
        $sizes[] = implode(' ', $option);
      }
    }
    $price = $line_item_wrapper->commerce_total->value();
    $products[$line_item_id]['sku'] = $product->sku;
    $products[$line_item_id]['title'] = $product->title;
    $products[$line_item_id]['size'] = implode(', ', $sizes);
    $products[$line_item_id]['quantity'] = (int) $line_item_wrapper->quantity->raw();
    $products[$line_item_id]['price'] = commerce_currency_format($price['amount'], $price['currency_code']);
  }
  
  $order_total = $order_wrapper->commerce_order_total->value();

  $block->content = theme('vs_user_commerce_order_view', array(
    'order' => $order,
    'billing' => $billing,
    'products' => $products,
    'total' => commerce_currency_format($order_total['amount'], $order_total['currency_code']),
  ));

  return $block;
}
