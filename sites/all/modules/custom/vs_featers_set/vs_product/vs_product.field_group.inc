<?php
/**
 * @file
 * vs_product.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function vs_product_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_locked|commerce_product|product|form';
  $field_group->group_name = 'group_locked';
  $field_group->entity_type = 'commerce_product';
  $field_group->bundle = 'product';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_main';
  $field_group->data = array(
    'label' => 'Locked',
    'weight' => '6',
    'children' => array(
      0 => 'status',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_locked|commerce_product|product|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_main|commerce_product|product|form';
  $field_group->group_name = 'group_main';
  $field_group->entity_type = 'commerce_product';
  $field_group->bundle = 'product';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Main',
    'weight' => '0',
    'children' => array(
      0 => 'commerce_price',
      1 => 'field_old_price',
      2 => 'field_product_description',
      3 => 'sku',
      4 => 'title',
      5 => 'group_locked',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'label' => 'Main',
      'instance_settings' => array(
        'required_fields' => 0,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $export['group_main|commerce_product|product|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_media|commerce_product|product|form';
  $field_group->group_name = 'group_media';
  $field_group->entity_type = 'commerce_product';
  $field_group->bundle = 'product';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Media',
    'weight' => '1',
    'children' => array(
      0 => 'field_category',
      1 => 'field_prod_main_image',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_media|commerce_product|product|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_sizes|commerce_product|product|form';
  $field_group->group_name = 'group_sizes';
  $field_group->entity_type = 'commerce_product';
  $field_group->bundle = 'product';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Размеры',
    'weight' => '8',
    'children' => array(
      0 => 'field_options',
      1 => 'field_valid_attributes',
    ),
    'format_type' => 'tab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_sizes|commerce_product|product|form'] = $field_group;

  return $export;
}
