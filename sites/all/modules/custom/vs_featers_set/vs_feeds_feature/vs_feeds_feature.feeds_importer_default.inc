<?php
/**
 * @file
 * vs_feeds_feature.feeds_importer_default.inc
 */

/**
 * Implements hook_feeds_importer_default().
 */
function vs_feeds_feature_feeds_importer_default() {
  $export = array();

  $feeds_importer = new stdClass();
  $feeds_importer->disabled = FALSE; /* Edit this to true to make a default feeds_importer disabled initially */
  $feeds_importer->api_version = 1;
  $feeds_importer->id = 'import_request_product';
  $feeds_importer->config = array(
    'name' => 'Импорт продуктов под заказ',
    'description' => 'Импорт продуктов под заказ',
    'fetcher' => array(
      'plugin_key' => 'FeedsFileFetcher',
      'config' => array(
        'allowed_extensions' => 'txt csv tsv xml opml',
        'direct' => FALSE,
      ),
    ),
    'parser' => array(
      'plugin_key' => 'FeedsCSVParser',
      'config' => array(
        'delimiter' => ',',
        'no_headers' => 0,
      ),
    ),
    'processor' => array(
      'plugin_key' => 'FeedsCommerceProductProcessor',
      'config' => array(
        'product_type' => 'product_request',
        'author' => 0,
        'tax_rate' => '',
        'mappings' => array(
          0 => array(
            'source' => 'SKU',
            'target' => 'sku',
            'unique' => 1,
          ),
          1 => array(
            'source' => 'Коллекция',
            'target' => 'field_collection',
            'unique' => FALSE,
          ),
          2 => array(
            'source' => 'Название',
            'target' => 'title',
            'unique' => FALSE,
          ),
          3 => array(
            'source' => 'Описание',
            'target' => 'field_product_description',
            'unique' => FALSE,
          ),
          4 => array(
            'source' => 'Цена',
            'target' => 'commerce_price:amount',
            'unique' => FALSE,
          ),
          5 => array(
            'source' => 'Старая цена',
            'target' => 'field_old_price:amount',
            'unique' => FALSE,
          ),
          6 => array(
            'source' => 'Заголовки размеров',
            'target' => 'field_size_labels',
            'unique' => FALSE,
          ),
          7 => array(
            'source' => 'Доступные размеры',
            'target' => 'field_valid_attributes',
            'unique' => FALSE,
          ),
        ),
        'update_existing' => '2',
        'input_format' => 'plain_text',
        'skip_hash_check' => 0,
      ),
    ),
    'content_type' => '',
    'update' => 0,
    'import_period' => '-1',
    'expire_period' => 3600,
    'import_on_create' => 1,
    'process_in_background' => 0,
  );
  $export['import_request_product'] = $feeds_importer;

  $feeds_importer = new stdClass();
  $feeds_importer->disabled = FALSE; /* Edit this to true to make a default feeds_importer disabled initially */
  $feeds_importer->api_version = 1;
  $feeds_importer->id = 'product_importer';
  $feeds_importer->config = array(
    'name' => 'Импорт продуктов',
    'description' => 'Import the commerce products',
    'fetcher' => array(
      'plugin_key' => 'FeedsFileFetcher',
      'config' => array(
        'allowed_extensions' => 'txt csv tsv xml opml',
        'direct' => FALSE,
      ),
    ),
    'parser' => array(
      'plugin_key' => 'FeedsCSVParser',
      'config' => array(
        'delimiter' => ',',
        'no_headers' => 0,
      ),
    ),
    'processor' => array(
      'plugin_key' => 'FeedsCommerceProductProcessor',
      'config' => array(
        'product_type' => 'product',
        'author' => 0,
        'tax_rate' => '',
        'mappings' => array(
          0 => array(
            'source' => 'SKU',
            'target' => 'sku',
            'unique' => 1,
          ),
          1 => array(
            'source' => 'Коллекция',
            'target' => 'field_collection',
            'unique' => FALSE,
          ),
          2 => array(
            'source' => 'Название',
            'target' => 'title',
            'unique' => FALSE,
          ),
          3 => array(
            'source' => 'Описание',
            'target' => 'field_product_description',
            'unique' => FALSE,
          ),
          4 => array(
            'source' => 'Цена',
            'target' => 'commerce_price:amount',
            'unique' => FALSE,
          ),
          5 => array(
            'source' => 'Старая цена',
            'target' => 'field_old_price:amount',
            'unique' => FALSE,
          ),
          6 => array(
            'source' => 'Заголовки размеров',
            'target' => 'field_size_labels',
            'unique' => FALSE,
          ),
          7 => array(
            'source' => 'Доступные размеры',
            'target' => 'field_valid_attributes',
            'unique' => FALSE,
          ),
        ),
        'update_existing' => '2',
        'input_format' => 'plain_text',
        'skip_hash_check' => 0,
      ),
    ),
    'content_type' => '',
    'update' => 0,
    'import_period' => '-1',
    'expire_period' => 3600,
    'import_on_create' => 1,
    'process_in_background' => 0,
  );
  $export['product_importer'] = $feeds_importer;

  return $export;
}
