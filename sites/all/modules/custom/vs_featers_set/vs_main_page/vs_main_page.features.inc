<?php
/**
 * @file
 * vs_main_page.features.inc
 */

/**
 * Implements hook_views_api().
 */
function vs_main_page_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function vs_main_page_image_default_styles() {
  $styles = array();

  // Exported image style: main_slider.
  $styles['main_slider'] = array(
    'name' => 'main_slider',
    'effects' => array(
      9 => array(
        'label' => 'Масштабирование',
        'help' => 'Масштабирование позволяет изменить размеры изображения с сохранением пропорций. Если введён размер только одной стороны, то размер другой будет вычислен автоматически. Если введены два размера, то каждое будет определять максимальный размер по своему направлению и применяться в зависимости от формата изображения.',
        'effect callback' => 'image_scale_effect',
        'dimensions callback' => 'image_scale_dimensions',
        'form callback' => 'image_scale_form',
        'summary theme' => 'image_scale_summary',
        'module' => 'image',
        'name' => 'image_scale',
        'data' => array(
          'width' => '1024',
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => '1',
      ),
    ),
  );

  // Exported image style: news_blocks_homepage.
  $styles['news_blocks_homepage'] = array(
    'name' => 'news_blocks_homepage',
    'effects' => array(
      10 => array(
        'label' => 'Масштабирование',
        'help' => 'Масштабирование позволяет изменить размеры изображения с сохранением пропорций. Если введён размер только одной стороны, то размер другой будет вычислен автоматически. Если введены два размера, то каждое будет определять максимальный размер по своему направлению и применяться в зависимости от формата изображения.',
        'effect callback' => 'image_scale_effect',
        'dimensions callback' => 'image_scale_dimensions',
        'form callback' => 'image_scale_form',
        'summary theme' => 'image_scale_summary',
        'module' => 'image',
        'name' => 'image_scale',
        'data' => array(
          'width' => '310',
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => '1',
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function vs_main_page_node_info() {
  $items = array(
    'news_block' => array(
      'name' => t('Блок новостей Homepage'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'slider_img' => array(
      'name' => t('Слайдер'),
      'base' => 'node_content',
      'description' => t('Содержит изображения для слайдшоу на главной странице'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
