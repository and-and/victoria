<?php
/**
 * @file
 * vs_order_delivery.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function vs_order_delivery_user_default_permissions() {
  $permissions = array();

  // Exported permission: counter page.
  $permissions['counter page'] = array(
    'name' => 'counter page',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'vs_counter',
  );

  // Exported permission: eck add bundles.
  $permissions['eck add bundles'] = array(
    'name' => 'eck add bundles',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck add entities.
  $permissions['eck add entities'] = array(
    'name' => 'eck add entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck add entity types.
  $permissions['eck add entity types'] = array(
    'name' => 'eck add entity types',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck administer bundles.
  $permissions['eck administer bundles'] = array(
    'name' => 'eck administer bundles',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck administer entities.
  $permissions['eck administer entities'] = array(
    'name' => 'eck administer entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck administer entity types.
  $permissions['eck administer entity types'] = array(
    'name' => 'eck administer entity types',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck delete bundles.
  $permissions['eck delete bundles'] = array(
    'name' => 'eck delete bundles',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck delete entities.
  $permissions['eck delete entities'] = array(
    'name' => 'eck delete entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck delete entity types.
  $permissions['eck delete entity types'] = array(
    'name' => 'eck delete entity types',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck edit bundles.
  $permissions['eck edit bundles'] = array(
    'name' => 'eck edit bundles',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck edit entities.
  $permissions['eck edit entities'] = array(
    'name' => 'eck edit entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck edit entity types.
  $permissions['eck edit entity types'] = array(
    'name' => 'eck edit entity types',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck list bundles.
  $permissions['eck list bundles'] = array(
    'name' => 'eck list bundles',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck list entities.
  $permissions['eck list entities'] = array(
    'name' => 'eck list entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck list entity types.
  $permissions['eck list entity types'] = array(
    'name' => 'eck list entity types',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'eck',
  );

  // Exported permission: eck view entities.
  $permissions['eck view entities'] = array(
    'name' => 'eck view entities',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'eck',
  );

  // Exported permission: view delivery orders.
  $permissions['view delivery orders'] = array(
    'name' => 'view delivery orders',
    'roles' => array(
      0 => 'administrator',
      1 => 'moderator',
    ),
    'module' => 'vs_delivery_order',
  );

  return $permissions;
}
