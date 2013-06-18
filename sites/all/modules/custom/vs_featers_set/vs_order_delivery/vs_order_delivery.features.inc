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
