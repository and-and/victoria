<?php
/**
 * @file
 * vs_user.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function vs_user_user_default_permissions() {
  $permissions = array();

  // Exported permission: access administration menu.
  $permissions['access administration menu'] = array(
    'name' => 'access administration menu',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'admin_menu',
  );

  // Exported permission: access administration pages.
  $permissions['access administration pages'] = array(
    'name' => 'access administration pages',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'system',
  );

  // Exported permission: access checkout.
  $permissions['access checkout'] = array(
    'name' => 'access checkout',
    'roles' => array(
      0 => 'administrator',
      1 => 'anonymous user',
      2 => 'authenticated user',
    ),
    'module' => 'commerce_checkout',
  );

  // Exported permission: administer commerce_customer_profile entities.
  $permissions['administer commerce_customer_profile entities'] = array(
    'name' => 'administer commerce_customer_profile entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_customer',
  );

  // Exported permission: administer commerce_product entities.
  $permissions['administer commerce_product entities'] = array(
    'name' => 'administer commerce_product entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: administer taxonomy.
  $permissions['administer taxonomy'] = array(
    'name' => 'administer taxonomy',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: block IP addresses.
  $permissions['block IP addresses'] = array(
    'name' => 'block IP addresses',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'system',
  );

  // Exported permission: configure store.
  $permissions['configure store'] = array(
    'name' => 'configure store',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce',
  );

  // Exported permission: create commerce_customer_profile entities.
  $permissions['create commerce_customer_profile entities'] = array(
    'name' => 'create commerce_customer_profile entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_customer',
  );

  // Exported permission: create commerce_product entities.
  $permissions['create commerce_product entities'] = array(
    'name' => 'create commerce_product entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: create commerce_product entities of bundle product.
  $permissions['create commerce_product entities of bundle product'] = array(
    'name' => 'create commerce_product entities of bundle product',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: edit any commerce_customer_profile entity.
  $permissions['edit any commerce_customer_profile entity'] = array(
    'name' => 'edit any commerce_customer_profile entity',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'commerce_customer',
  );

  // Exported permission: edit any commerce_product entity.
  $permissions['edit any commerce_product entity'] = array(
    'name' => 'edit any commerce_product entity',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: edit any commerce_product entity of bundle product.
  $permissions['edit any commerce_product entity of bundle product'] = array(
    'name' => 'edit any commerce_product entity of bundle product',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: edit own commerce_customer_profile entities.
  $permissions['edit own commerce_customer_profile entities'] = array(
    'name' => 'edit own commerce_customer_profile entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_customer',
  );

  // Exported permission: edit own commerce_product entities.
  $permissions['edit own commerce_product entities'] = array(
    'name' => 'edit own commerce_product entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: edit own commerce_product entities of bundle product.
  $permissions['edit own commerce_product entities of bundle product'] = array(
    'name' => 'edit own commerce_product entities of bundle product',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: import product_importer feeds.
  $permissions['import product_importer feeds'] = array(
    'name' => 'import product_importer feeds',
    'roles' => array(
      0 => 'moderator',
    ),
    'module' => 'feeds',
  );

  // Exported permission: tamper product_importer.
  $permissions['tamper product_importer'] = array(
    'name' => 'tamper product_importer',
    'roles' => array(
      0 => 'moderator',
    ),
    'module' => 'feeds_tamper',
  );

  // Exported permission: view any commerce_order entity.
  $permissions['view any commerce_order entity'] = array(
    'name' => 'view any commerce_order entity',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_order',
  );

  // Exported permission: view any commerce_product entity.
  $permissions['view any commerce_product entity'] = array(
    'name' => 'view any commerce_product entity',
    'roles' => array(
      0 => 'administrator',
      1 => 'anonymous user',
      2 => 'authenticated user',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: view any commerce_product entity of bundle product.
  $permissions['view any commerce_product entity of bundle product'] = array(
    'name' => 'view any commerce_product entity of bundle product',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: view own commerce_customer_profile entities.
  $permissions['view own commerce_customer_profile entities'] = array(
    'name' => 'view own commerce_customer_profile entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'authenticated user',
    ),
    'module' => 'commerce_customer',
  );

  // Exported permission: view own commerce_order entities.
  $permissions['view own commerce_order entities'] = array(
    'name' => 'view own commerce_order entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'authenticated user',
    ),
    'module' => 'commerce_order',
  );

  // Exported permission: view own commerce_product entities.
  $permissions['view own commerce_product entities'] = array(
    'name' => 'view own commerce_product entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: view own commerce_product entities of bundle product.
  $permissions['view own commerce_product entities of bundle product'] = array(
    'name' => 'view own commerce_product entities of bundle product',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'commerce_product',
  );

  // Exported permission: view the administration theme.
  $permissions['view the administration theme'] = array(
    'name' => 'view the administration theme',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'system',
  );

  return $permissions;
}
