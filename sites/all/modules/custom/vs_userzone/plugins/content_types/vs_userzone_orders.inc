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
  'title' => t('VS User orders'),
  'description' => t('Provide user orders block'),
  'category' => t('VS'),
//  'edit form' => 'querlain_checkout_suggestions_edit_form',
  'render callback' => 'vs_userzone_user_orders_callback',
//  'required context' => new ctools_context_required(t('Order'), 'commerce_order'),
);


/**
 * Output function for the querlain checkout suggestion block.
 */
function vs_userzone_user_orders_callback($subtype, $conf, $panel_args, $context) {
  global $user;
  if (!$user->uid) {
    return;
  }
  
  drupal_add_js(drupal_get_path('theme', 'victoria') . '/scripts/vs-userzone.js');
  //Init variables
  $block = new stdClass();
  
  $query = db_select('commerce_order', 'co');
  $query->fields('co');
  $query->condition('co.uid', $user->uid);
  $query->condition('co.status', array('checkout_complete', 'pending', 'processing', 'complete'), 'IN');
  $commerce_orders = $query->execute()->fetchAll();
  
  $query = db_select('eck_delivery_order', 'do');
  $query->fields('do');
  $query->condition('do.uid', $user->uid);
  $query->join('field_data_field_order_number', 'onum', "onum.entity_type = 'delivery_order' AND onum.entity_id = do.id");
  $query->fields('onum');
  $delivery_orders = $query->execute()->fetchAll();

  $orders = array();
  foreach ($commerce_orders as $commerce_order) {
    $orders[$commerce_order->created]['number'] = $commerce_order->order_number;
    $orders[$commerce_order->created]['link'] = l($commerce_order->order_number, 'user/orders/commerce/' . $commerce_order->order_id);
    $orders[$commerce_order->created]['id'] = $commerce_order->order_id;
  }
  foreach ($delivery_orders as $delivery_order) {
    $orders[$delivery_order->created]['number'] = $delivery_order->field_order_number_value;
    $orders[$delivery_order->created]['link'] = l($delivery_order->field_order_number_value, 'user/orders/delivery/' . $delivery_order->id);
    $orders[$delivery_order->created]['number'] = $delivery_order->id;
  }

  krsort($orders);

  $block->content = theme('vs_user_orders_list', array('orders' => $orders));

  return $block;
}

///**
// * Form for querlain checkout suggestions block
// */
//function querlain_checkout_suggestions_edit_form($form, &$form_state) {
//  $suggestion_settings = $form_state['conf'];
//  $product_type = 'product';
//  $nodequeues = nodequeue_load_queues_by_type($product_type);
//  $nodequeue_list = array();
//  if(!empty($nodequeues)){
//    foreach($nodequeues AS $nodequeue){
//      $nodequeue_list[$nodequeue->qid] = $nodequeue->name;
//    }
//  }
//  
//  if(empty($nodequeue_list)){
//    $form['empty'] = array(
//      '#markup' => t('You need to specify at least one nodequeue for product content type.')
//    );
//    return $form;
//  }
//
//  $form['nodequeue'] = array(
//    '#title' => t('Nodequeue'),
//    '#description' => t('Nodequeue to use for suggestion block.'),
//    '#type' => 'select',
//    '#options' => $nodequeue_list,
//    '#default_value' => $suggestion_settings['nodequeue'],
//    '#required' => TRUE,
//  );
// 
//  return $form;
//}
//
//
///**
// * Form submit for querlain checkout suggestions block
// */
//function querlain_checkout_suggestions_edit_form_submit($form, &$form_state) {
//
//  if (isset($form_state['values']['nodequeue'])) {
//    $form_state['conf']['nodequeue'] = $form_state['values']['nodequeue'];
//  }
//}