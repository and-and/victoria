<?php
/**
 * @file
 * vs_order_delivery.features.inc
 */

/**
 * Implements hook_eck_bundle_info().
 */
function vs_order_delivery_eck_bundle_info() {
  $items = array(
  'delivery_order_delivery_order' => array(
  'machine_name' => 'delivery_order_delivery_order',
  'entity_type' => 'delivery_order',
  'name' => 'delivery_order',
  'label' => 'delivery_order',
),
  'delivery_product_delivery_product' => array(
  'machine_name' => 'delivery_product_delivery_product',
  'entity_type' => 'delivery_product',
  'name' => 'delivery_product',
  'label' => 'delivery_product',
),
  'order_payment_order_payment' => array(
  'machine_name' => 'order_payment_order_payment',
  'entity_type' => 'order_payment',
  'name' => 'order_payment',
  'label' => 'order_payment',
),
  );
  return $items;
}

/**
 * Implements hook_eck_entity_type_info().
 */
function vs_order_delivery_eck_entity_type_info() {
$items = array(
       'delivery_order' => array(
  'name' => 'delivery_order',
  'label' => 'delivery_order',
  'properties' => array(
    'title' => array(
      'label' => 'Title',
      'type' => 'text',
      'behavior' => 'title',
    ),
    'uid' => array(
      'label' => 'Author',
      'type' => 'integer',
      'behavior' => 'author',
    ),
    'created' => array(
      'label' => 'Created',
      'type' => 'integer',
      'behavior' => 'created',
    ),
    'changed' => array(
      'label' => 'Changed',
      'type' => 'integer',
      'behavior' => 'changed',
    ),
  ),
),
       'delivery_product' => array(
  'name' => 'delivery_product',
  'label' => 'delivery_product',
  'properties' => array(
    'title' => array(
      'label' => 'Title',
      'type' => 'text',
      'behavior' => 'title',
    ),
    'uid' => array(
      'label' => 'Author',
      'type' => 'integer',
      'behavior' => 'author',
    ),
    'created' => array(
      'label' => 'Created',
      'type' => 'integer',
      'behavior' => 'created',
    ),
    'changed' => array(
      'label' => 'Changed',
      'type' => 'integer',
      'behavior' => 'changed',
    ),
  ),
),
       'order_payment' => array(
  'name' => 'order_payment',
  'label' => 'order_payment',
  'properties' => array(
    'uid' => array(
      'label' => 'Author',
      'type' => 'integer',
      'behavior' => 'author',
    ),
    'created' => array(
      'label' => 'Created',
      'type' => 'integer',
      'behavior' => 'created',
    ),
    'changed' => array(
      'label' => 'Changed',
      'type' => 'integer',
      'behavior' => 'changed',
    ),
  ),
),
  );
  return $items;
}

/**
 * Implements hook_node_info().
 */
function vs_order_delivery_node_info() {
  $items = array(
    'delivery_orders_page' => array(
      'name' => t('Доставка с друних сайтов'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
