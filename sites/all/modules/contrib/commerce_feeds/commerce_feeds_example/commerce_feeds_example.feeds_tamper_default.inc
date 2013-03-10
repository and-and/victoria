<?php
/**
 * @file
 * commerce_feeds_example.feeds_tamper_default.inc
 */

/**
 * Implements hook_feeds_tamper_default().
 */
function commerce_feeds_example_feeds_tamper_default() {
  $export = array();

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'product_importer-_________________________________-explode';
  $feeds_tamper->importer = 'product_importer';
  $feeds_tamper->source = 'Доступные размеры';
  $feeds_tamper->plugin_id = 'explode';
  $feeds_tamper->settings = array(
    'separator' => ',',
    'limit' => '',
    'real_separator' => ',',
  );
  $feeds_tamper->weight = 0;
  $feeds_tamper->description = 'Explode';
  $export['product_importer-_________________________________-explode'] = $feeds_tamper;

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'product_importer-___________________________________-explode';
  $feeds_tamper->importer = 'product_importer';
  $feeds_tamper->source = 'Заголовки размеров';
  $feeds_tamper->plugin_id = 'explode';
  $feeds_tamper->settings = array(
    'separator' => ',',
    'limit' => '',
    'real_separator' => ',',
  );
  $feeds_tamper->weight = 0;
  $feeds_tamper->description = 'Explode';
  $export['product_importer-___________________________________-explode'] = $feeds_tamper;

  return $export;
}
