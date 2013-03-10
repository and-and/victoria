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
  'title' => t('VS Checkout panel'),
  'description' => t('Provide checkout'),
  'category' => t('VS'),
//  'edit form' => 'querlain_checkout_suggestions_edit_form',
  'render callback' => 'vs_checkout_panel_render',
  'required context' => new ctools_context_required(t('Order'), 'commerce_order'),
);


/**
 * Output function for the querlain checkout suggestion block.
 */
function vs_checkout_panel_render($subtype, $conf, $panel_args, $context) {
  //Init variables
  module_load_include('inc', 'commerce_checkout', 'includes/commerce_checkout.pages');
  $block = new stdClass();
  
  $order = $context->data;
  $block->content = commerce_checkout_router($order);

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