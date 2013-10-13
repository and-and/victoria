<?php
/**
 * @file
 * vs_order_delivery.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function vs_order_delivery_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'delivery_orders';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'eck_delivery_order';
  $view->human_name = 'Delivery orders';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Delivery orders';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Сбросить';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '50';
  $handler->display->display_options['pager']['options']['tags']['first'] = '« первая';
  $handler->display->display_options['pager']['options']['tags']['previous'] = '‹ предыдущая';
  $handler->display->display_options['pager']['options']['tags']['next'] = 'следующая ›';
  $handler->display->display_options['pager']['options']['tags']['last'] = 'последняя »';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'field_order_number' => 'field_order_number',
    'created' => 'created',
    'uid' => 'uid',
    'field_city' => 'field_city',
    'field_fname_lname' => 'field_fname_lname',
    'field_user_phone' => 'field_user_phone',
    'field_n_sclada' => 'field_n_sclada',
  );
  $handler->display->display_options['style_options']['default'] = 'created';
  $handler->display->display_options['style_options']['info'] = array(
    'field_order_number' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'created' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'uid' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_city' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_fname_lname' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_user_phone' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_n_sclada' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  $handler->display->display_options['style_options']['sticky'] = TRUE;
  /* Relationship: Delivery_order: Author */
  $handler->display->display_options['relationships']['uid']['id'] = 'uid';
  $handler->display->display_options['relationships']['uid']['table'] = 'eck_delivery_order';
  $handler->display->display_options['relationships']['uid']['field'] = 'uid';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_delivery_products_target_id']['id'] = 'field_delivery_products_target_id';
  $handler->display->display_options['relationships']['field_delivery_products_target_id']['table'] = 'field_data_field_delivery_products';
  $handler->display->display_options['relationships']['field_delivery_products_target_id']['field'] = 'field_delivery_products_target_id';
  /* Поле: Поле: Номер заказа */
  $handler->display->display_options['fields']['field_order_number']['id'] = 'field_order_number';
  $handler->display->display_options['fields']['field_order_number']['table'] = 'field_data_field_order_number';
  $handler->display->display_options['fields']['field_order_number']['field'] = 'field_order_number';
  /* Поле: Delivery_order: Created */
  $handler->display->display_options['fields']['created']['id'] = 'created';
  $handler->display->display_options['fields']['created']['table'] = 'eck_delivery_order';
  $handler->display->display_options['fields']['created']['field'] = 'created';
  $handler->display->display_options['fields']['created']['label'] = 'Создано';
  /* Поле: Пользователь: Название */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'users';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['relationship'] = 'uid';
  /* Поле: delivery_order: Город */
  $handler->display->display_options['fields']['field_city']['id'] = 'field_city';
  $handler->display->display_options['fields']['field_city']['table'] = 'field_data_field_city';
  $handler->display->display_options['fields']['field_city']['field'] = 'field_city';
  /* Поле: delivery_order: Фамилия Имя */
  $handler->display->display_options['fields']['field_fname_lname']['id'] = 'field_fname_lname';
  $handler->display->display_options['fields']['field_fname_lname']['table'] = 'field_data_field_fname_lname';
  $handler->display->display_options['fields']['field_fname_lname']['field'] = 'field_fname_lname';
  /* Поле: Поле: Телефон */
  $handler->display->display_options['fields']['field_user_phone']['id'] = 'field_user_phone';
  $handler->display->display_options['fields']['field_user_phone']['table'] = 'field_data_field_user_phone';
  $handler->display->display_options['fields']['field_user_phone']['field'] = 'field_user_phone';
  /* Поле: Поле: № склада НП */
  $handler->display->display_options['fields']['field_n_sclada']['id'] = 'field_n_sclada';
  $handler->display->display_options['fields']['field_n_sclada']['table'] = 'field_data_field_n_sclada';
  $handler->display->display_options['fields']['field_n_sclada']['field'] = 'field_n_sclada';
  /* Contextual filter: Delivery_order: Id */
  $handler->display->display_options['arguments']['id']['id'] = 'id';
  $handler->display->display_options['arguments']['id']['table'] = 'eck_delivery_order';
  $handler->display->display_options['arguments']['id']['field'] = 'id';
  $handler->display->display_options['arguments']['id']['exception']['title'] = 'Все';
  $handler->display->display_options['arguments']['id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['id']['summary']['format'] = 'default_summary';

  /* Display: Orders list */
  $handler = $view->new_display('page', 'Orders list', 'page');
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Delivery_order: Author */
  $handler->display->display_options['relationships']['uid']['id'] = 'uid';
  $handler->display->display_options['relationships']['uid']['table'] = 'eck_delivery_order';
  $handler->display->display_options['relationships']['uid']['field'] = 'uid';
  $handler->display->display_options['path'] = 'admin/commerce/delivery-orders';
  $handler->display->display_options['menu']['type'] = 'tab';
  $handler->display->display_options['menu']['title'] = 'Заказы доставки';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;

  /* Display: Order */
  $handler = $view->new_display('block', 'Order', 'block_1');
  $handler->display->display_options['defaults']['empty'] = FALSE;
  /* No results behavior: Global: Unfiltered text */
  $handler->display->display_options['empty']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['empty']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['empty']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['empty']['area_text_custom']['label'] = 'No products';
  $handler->display->display_options['empty']['area_text_custom']['empty'] = TRUE;
  $handler->display->display_options['empty']['area_text_custom']['content'] = 'Нет продуктов';
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_delivery_products_target_id']['id'] = 'field_delivery_products_target_id';
  $handler->display->display_options['relationships']['field_delivery_products_target_id']['table'] = 'field_data_field_delivery_products';
  $handler->display->display_options['relationships']['field_delivery_products_target_id']['field'] = 'field_delivery_products_target_id';
  $handler->display->display_options['relationships']['field_delivery_products_target_id']['label'] = 'delivery_product';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Поле: delivery_product: Код товара */
  $handler->display->display_options['fields']['field_product_code']['id'] = 'field_product_code';
  $handler->display->display_options['fields']['field_product_code']['table'] = 'field_data_field_product_code';
  $handler->display->display_options['fields']['field_product_code']['field'] = 'field_product_code';
  $handler->display->display_options['fields']['field_product_code']['relationship'] = 'field_delivery_products_target_id';
  /* Поле: Поле: Ссылка */
  $handler->display->display_options['fields']['field_vs_link']['id'] = 'field_vs_link';
  $handler->display->display_options['fields']['field_vs_link']['table'] = 'field_data_field_vs_link';
  $handler->display->display_options['fields']['field_vs_link']['field'] = 'field_vs_link';
  $handler->display->display_options['fields']['field_vs_link']['relationship'] = 'field_delivery_products_target_id';
  /* Поле: delivery_product: Размер */
  $handler->display->display_options['fields']['field_product_size']['id'] = 'field_product_size';
  $handler->display->display_options['fields']['field_product_size']['table'] = 'field_data_field_product_size';
  $handler->display->display_options['fields']['field_product_size']['field'] = 'field_product_size';
  $handler->display->display_options['fields']['field_product_size']['relationship'] = 'field_delivery_products_target_id';
  /* Поле: delivery_product: Цвет */
  $handler->display->display_options['fields']['field_product_color']['id'] = 'field_product_color';
  $handler->display->display_options['fields']['field_product_color']['table'] = 'field_data_field_product_color';
  $handler->display->display_options['fields']['field_product_color']['field'] = 'field_product_color';
  $handler->display->display_options['fields']['field_product_color']['relationship'] = 'field_delivery_products_target_id';
  /* Поле: delivery_product: Цена */
  $handler->display->display_options['fields']['field_product_price']['id'] = 'field_product_price';
  $handler->display->display_options['fields']['field_product_price']['table'] = 'field_data_field_product_price';
  $handler->display->display_options['fields']['field_product_price']['field'] = 'field_product_price';
  $handler->display->display_options['fields']['field_product_price']['relationship'] = 'field_delivery_products_target_id';
  /* Поле: delivery_product: Примечание */
  $handler->display->display_options['fields']['field_order_info']['id'] = 'field_order_info';
  $handler->display->display_options['fields']['field_order_info']['table'] = 'field_data_field_order_info';
  $handler->display->display_options['fields']['field_order_info']['field'] = 'field_order_info';
  $handler->display->display_options['fields']['field_order_info']['relationship'] = 'field_delivery_products_target_id';
  /* Поле: Delivery_order: Id */
  $handler->display->display_options['fields']['id']['id'] = 'id';
  $handler->display->display_options['fields']['id']['table'] = 'eck_delivery_order';
  $handler->display->display_options['fields']['id']['field'] = 'id';
  $handler->display->display_options['fields']['id']['exclude'] = TRUE;
  /* Поле: Delivery_product: Id */
  $handler->display->display_options['fields']['id_1']['id'] = 'id_1';
  $handler->display->display_options['fields']['id_1']['table'] = 'eck_delivery_product';
  $handler->display->display_options['fields']['id_1']['field'] = 'id';
  $handler->display->display_options['fields']['id_1']['relationship'] = 'field_delivery_products_target_id';
  $handler->display->display_options['fields']['id_1']['exclude'] = TRUE;
  $translatables['delivery_orders'] = array(
    t('Master'),
    t('Delivery orders'),
    t('more'),
    t('Apply'),
    t('Сбросить'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« первая'),
    t('‹ предыдущая'),
    t('следующая ›'),
    t('последняя »'),
    t('Пользователь'),
    t('delivery_product entity referenced from field_delivery_products'),
    t('Номер заказа'),
    t('Создано'),
    t('Название'),
    t('Город'),
    t('Фамилия Имя'),
    t('Телефон'),
    t('№ склада НП'),
    t('Все'),
    t('Orders list'),
    t('Order'),
    t('No products'),
    t('Нет продуктов'),
    t('delivery_product'),
    t('Код товара'),
    t('Ссылка'),
    t('Размер'),
    t('Цвет'),
    t('Цена'),
    t('Примечание'),
    t('Id'),
    t('.'),
    t(','),
  );
  $export['delivery_orders'] = $view;

  return $export;
}
