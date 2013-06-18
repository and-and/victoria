<?php
/**
 * @file
 * vs_pages.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function vs_pages_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function vs_pages_node_info() {
  $items = array(
    'contacts' => array(
      'name' => t('Контакты'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
