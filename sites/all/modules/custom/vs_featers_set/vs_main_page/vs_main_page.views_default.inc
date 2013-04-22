<?php
/**
 * @file
 * vs_main_page.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function vs_main_page_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'main_slider';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Слайдер';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Слайдер';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Сбросить';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'views_nivo_slider';
  $handler->display->display_options['style_options']['imagefield_preset'] = 'main_slider';
  $handler->display->display_options['style_options']['style'] = 'light';
  $handler->display->display_options['style_options']['effect'] = array(
    'random' => 'random',
  );
  $handler->display->display_options['style_options']['pauseTime'] = '5000';
  $handler->display->display_options['style_options']['directionNav'] = 'false';
  $handler->display->display_options['style_options']['controlNav'] = 'basic';
  $handler->display->display_options['style_options']['controlNavThumbsField'] = 'title';
  $handler->display->display_options['style_options']['controlNavThumbsIC'] = 'thumbnail';
  $handler->display->display_options['style_options']['pauseOnHover'] = 'false';
  $handler->display->display_options['row_plugin'] = 'nivo_sliderfields';
  $handler->display->display_options['row_options']['image_field'] = 'field_image';
  /* Поле: Содержимое: Заголовок */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Поле: Содержимое: Изображение */
  $handler->display->display_options['fields']['field_image']['id'] = 'field_image';
  $handler->display->display_options['fields']['field_image']['table'] = 'field_data_field_image';
  $handler->display->display_options['fields']['field_image']['field'] = 'field_image';
  $handler->display->display_options['fields']['field_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_image']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  /* Sort criterion: Содержимое: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Содержимое: Тип */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'slider_img' => 'slider_img',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $translatables['main_slider'] = array(
    t('Master'),
    t('Слайдер'),
    t('more'),
    t('Apply'),
    t('Сбросить'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Изображение'),
    t('Block'),
  );
  $export['main_slider'] = $view;

  return $export;
}