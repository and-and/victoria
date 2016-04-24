<?php
/**
 * @file
 * vs_user.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function vs_user_user_default_roles() {
  $roles = array();

  // Exported role: administrator.
  $roles['administrator'] = array(
    'name' => 'administrator',
    'weight' => '2',
  );

  // Exported role: moderator.
  $roles['moderator'] = array(
    'name' => 'moderator',
    'weight' => '3',
  );

  return $roles;
}
