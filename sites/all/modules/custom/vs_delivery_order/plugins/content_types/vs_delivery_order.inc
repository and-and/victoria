<?php

define('V_NALICHII_VID', 2);
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
  'title' => t('VS Delivery order info'),
  'description' => t('Provide delivery order info about customer'),
  'category' => t('VS'),
//  'edit form' => 'querlain_checkout_suggestions_edit_form',
  'render callback' => 'vs_delivery_order_render',
  'required context' => new ctools_context_required(t('Delivery Order'), 'delivery_order'),
);


/**
 * Output function for the querlain checkout suggestion block.
 */
function vs_delivery_order_render($subtype, $conf, $panel_args, $context) {
  //Init variables
  $block = new stdClass();
  
  $order = $context->data;

  $block->content = drupal_render(entity_view('delivery_order', array($order), 'full', NULL, TRUE));

  $block->content .=  '<div style="height:30px;"></div>';

  return $block;
}
