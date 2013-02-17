<?php
/**
 * @file
 * vs_menu.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function vs_menu_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'category_page';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'commerce_product';
  $view->human_name = 'Category page';
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
  $handler->display->display_options['style_plugin'] = 'grid';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Commerce Product: Product ID */
  $handler->display->display_options['fields']['product_id']['id'] = 'product_id';
  $handler->display->display_options['fields']['product_id']['table'] = 'commerce_product';
  $handler->display->display_options['fields']['product_id']['field'] = 'product_id';
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
    'image_style' => 'category_thumb',
    'image_link' => '',
  );
  /* Field: Commerce Product: Price */
  $handler->display->display_options['fields']['commerce_price']['id'] = 'commerce_price';
  $handler->display->display_options['fields']['commerce_price']['table'] = 'field_data_commerce_price';
  $handler->display->display_options['fields']['commerce_price']['field'] = 'commerce_price';
  $handler->display->display_options['fields']['commerce_price']['click_sort_column'] = 'amount';
  $handler->display->display_options['fields']['commerce_price']['type'] = 'commerce_price_formatted_amount';
  $handler->display->display_options['fields']['commerce_price']['settings'] = array(
    'calculation' => '0',
  );
  /* Field: Commerce Product: Старая цена */
  $handler->display->display_options['fields']['field_old_price']['id'] = 'field_old_price';
  $handler->display->display_options['fields']['field_old_price']['table'] = 'field_data_field_old_price';
  $handler->display->display_options['fields']['field_old_price']['field'] = 'field_old_price';
  $handler->display->display_options['fields']['field_old_price']['hide_empty'] = TRUE;
  $handler->display->display_options['fields']['field_old_price']['click_sort_column'] = 'amount';
  $handler->display->display_options['fields']['field_old_price']['type'] = 'commerce_price_formatted_amount';
  $handler->display->display_options['fields']['field_old_price']['settings'] = array(
    'calculation' => FALSE,
  );
  /* Contextual filter: Commerce Product: Категория (field_category) */
  $handler->display->display_options['arguments']['field_category_tid']['id'] = 'field_category_tid';
  $handler->display->display_options['arguments']['field_category_tid']['table'] = 'field_data_field_category';
  $handler->display->display_options['arguments']['field_category_tid']['field'] = 'field_category_tid';
  $handler->display->display_options['arguments']['field_category_tid']['default_action'] = 'access denied';
  $handler->display->display_options['arguments']['field_category_tid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_category_tid']['default_argument_skip_url'] = TRUE;
  $handler->display->display_options['arguments']['field_category_tid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_category_tid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_category_tid']['summary_options']['items_per_page'] = '25';
  $export['category_page'] = $view;

  return $export;
}
