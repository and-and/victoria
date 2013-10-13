<?php
/**
 * @file
 * vs_faq.features.inc
 */

/**
 * Implements hook_views_api().
 */
function vs_faq_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function vs_faq_node_info() {
  $items = array(
    'faq' => array(
      'name' => t('FAQ'),
      'base' => 'node_content',
      'description' => t('Вопрос ответ'),
      'has_title' => '1',
      'title_label' => t('Вопрос'),
      'help' => '',
    ),
  );
  return $items;
}
