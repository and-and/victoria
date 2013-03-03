<?php
/**
 * @file
 * vs_product.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function vs_product_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'product_display';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'commerce_product';
  $view->human_name = 'Product display';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['row_options']['inline'] = array(
    'product_id' => 'product_id',
    'add_to_cart_form' => 'add_to_cart_form',
    'commerce_price' => 'commerce_price',
    'sku' => 'sku',
    'title' => 'title',
    'field_prod_main_image' => 'field_prod_main_image',
    'field_options' => 'field_options',
    'field_old_price' => 'field_old_price',
    'field_product_description' => 'field_product_description',
    'field_valid_attributes' => 'field_valid_attributes',
  );
  /* Field: Commerce Product: Product ID */
  $handler->display->display_options['fields']['product_id']['id'] = 'product_id';
  $handler->display->display_options['fields']['product_id']['table'] = 'commerce_product';
  $handler->display->display_options['fields']['product_id']['field'] = 'product_id';
  /* Field: Commerce Product: Add to Cart form */
  $handler->display->display_options['fields']['add_to_cart_form']['id'] = 'add_to_cart_form';
  $handler->display->display_options['fields']['add_to_cart_form']['table'] = 'commerce_product';
  $handler->display->display_options['fields']['add_to_cart_form']['field'] = 'add_to_cart_form';
  $handler->display->display_options['fields']['add_to_cart_form']['show_quantity'] = 0;
  $handler->display->display_options['fields']['add_to_cart_form']['default_quantity'] = '1';
  $handler->display->display_options['fields']['add_to_cart_form']['combine'] = 0;
  $handler->display->display_options['fields']['add_to_cart_form']['display_path'] = 0;
  $handler->display->display_options['fields']['add_to_cart_form']['line_item_type'] = 0;
  /* Field: Commerce Product: Price */
  $handler->display->display_options['fields']['commerce_price']['id'] = 'commerce_price';
  $handler->display->display_options['fields']['commerce_price']['table'] = 'field_data_commerce_price';
  $handler->display->display_options['fields']['commerce_price']['field'] = 'commerce_price';
  $handler->display->display_options['fields']['commerce_price']['click_sort_column'] = 'amount';
  $handler->display->display_options['fields']['commerce_price']['type'] = 'commerce_price_formatted_amount';
  $handler->display->display_options['fields']['commerce_price']['settings'] = array(
    'calculation' => '0',
  );
  /* Field: Commerce Product: Product ID */
  $handler->display->display_options['fields']['product_id_1']['id'] = 'product_id_1';
  $handler->display->display_options['fields']['product_id_1']['table'] = 'commerce_product';
  $handler->display->display_options['fields']['product_id_1']['field'] = 'product_id';
  $handler->display->display_options['fields']['product_id_1']['link_to_product'] = 0;
  /* Field: Commerce Product: SKU */
  $handler->display->display_options['fields']['sku']['id'] = 'sku';
  $handler->display->display_options['fields']['sku']['table'] = 'commerce_product';
  $handler->display->display_options['fields']['sku']['field'] = 'sku';
  $handler->display->display_options['fields']['sku']['link_to_product'] = 0;
  /* Field: Commerce Product: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'commerce_product';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['link_to_product'] = 0;
  /* Field: Commerce Product: Изображение главное */
  $handler->display->display_options['fields']['field_prod_main_image']['id'] = 'field_prod_main_image';
  $handler->display->display_options['fields']['field_prod_main_image']['table'] = 'field_data_field_prod_main_image';
  $handler->display->display_options['fields']['field_prod_main_image']['field'] = 'field_prod_main_image';
  $handler->display->display_options['fields']['field_prod_main_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_prod_main_image']['settings'] = array(
    'image_style' => 'thumbnail_product_display',
    'image_link' => '',
  );
  $handler->display->display_options['fields']['field_prod_main_image']['delta_limit'] = '0';
  $handler->display->display_options['fields']['field_prod_main_image']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_prod_main_image']['multi_type'] = 'ul';
  /* Field: Commerce Product: Опции */
  $handler->display->display_options['fields']['field_options']['id'] = 'field_options';
  $handler->display->display_options['fields']['field_options']['table'] = 'field_data_field_options';
  $handler->display->display_options['fields']['field_options']['field'] = 'field_options';
  $handler->display->display_options['fields']['field_options']['type'] = 'commerce_option_set_reference_attribute_view';
  $handler->display->display_options['fields']['field_options']['delta_offset'] = '0';
  /* Field: Commerce Product: Старая цена */
  $handler->display->display_options['fields']['field_old_price']['id'] = 'field_old_price';
  $handler->display->display_options['fields']['field_old_price']['table'] = 'field_data_field_old_price';
  $handler->display->display_options['fields']['field_old_price']['field'] = 'field_old_price';
  $handler->display->display_options['fields']['field_old_price']['click_sort_column'] = 'amount';
  $handler->display->display_options['fields']['field_old_price']['type'] = 'commerce_price_formatted_amount';
  $handler->display->display_options['fields']['field_old_price']['settings'] = array(
    'calculation' => FALSE,
  );
  /* Field: Commerce Product: Описание */
  $handler->display->display_options['fields']['field_product_description']['id'] = 'field_product_description';
  $handler->display->display_options['fields']['field_product_description']['table'] = 'field_data_field_product_description';
  $handler->display->display_options['fields']['field_product_description']['field'] = 'field_product_description';
  /* Field: Commerce Product: Доступные размеры */
  $handler->display->display_options['fields']['field_valid_attributes']['id'] = 'field_valid_attributes';
  $handler->display->display_options['fields']['field_valid_attributes']['table'] = 'field_data_field_valid_attributes';
  $handler->display->display_options['fields']['field_valid_attributes']['field'] = 'field_valid_attributes';
  $handler->display->display_options['fields']['field_valid_attributes']['delta_offset'] = '0';
  /* Contextual filter: Commerce Product: Product ID */
  $handler->display->display_options['arguments']['product_id']['id'] = 'product_id';
  $handler->display->display_options['arguments']['product_id']['table'] = 'commerce_product';
  $handler->display->display_options['arguments']['product_id']['field'] = 'product_id';
  $handler->display->display_options['arguments']['product_id']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['product_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['product_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['product_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['product_id']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Commerce Product: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'commerce_product';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'product' => 'product',
  );
  $translatables['product_display'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('Product ID'),
    t('Add to Cart form'),
    t('Price'),
    t('SKU'),
    t('Title'),
    t('Изображение главное'),
    t('Опции'),
    t('Старая цена'),
    t('Описание'),
    t('Доступные размеры'),
    t('All'),
  );
  $export['product_display'] = $view;

  return $export;
}
