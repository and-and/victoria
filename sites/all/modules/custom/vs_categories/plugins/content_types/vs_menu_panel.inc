<?php

/**
 * @file
 * Commerce panels integration plugin nodeque suggestion product block.
 */

 /**
  * Plugins are described by creating a $plugin array which will be used
  * by the system that includes this file.
  */

$plugin = array(
  'single' => TRUE,
  'title' => t('VS Sidebar menu'),
  'description' => t('Provide sidebar menu panel'),
  'category' => t('VS'),
//  'edit form' => 'querlain_checkout_suggestions_edit_form',
  'render callback' => 'vs_sidebar_menu_render',
//  'required context' => new ctools_context_required(t('Order'), 'commerce_order'),
);


/**
 * Output function for the querlain checkout suggestion block.
 */
function vs_sidebar_menu_render($subtype, $conf, $panel_args, $context) {
  //Init variables
  $block = new stdClass();
  
  $tree = taxonomy_get_tree(2, 0, 3);
  foreach ($tree as $term) {
    switch ($term->depth) {
      case 0:
        $category['title'] = $term->name;
        continue;
      case 1:
        $tid = $term->tid; 
        $menu[$tid]['term'] = $term;
        continue;
      case 2:
        $parent = $term->parents[0];
        $tid = $term->tid;
        if (drupal_get_path_alias('taxonomy/term/' . $term->tid) && drupal_get_path_alias('taxonomy/term/' . $term->tid) != 'taxonomy/term/' . $term->tid) {
          $alias = drupal_get_path_alias('taxonomy/term/' . $term->tid);
        }else {
          $alias = $tid;
        }
        $term->link = l($term->name, 'v-nalichii/' . $alias, array('attributes' => array('class' => array('vs-sub-category-link'))));
        if ($alias == arg(1) && arg(0) != 'product') {
          $term->active = TRUE;
        }else {
          $term->active = FALSE;
        }
        $menu[$parent]['childs'][$tid] = $term;
        continue;
    }
  }
  
  $block->content = theme('vs_sidebar_instock_menu', array('menu' => $menu, 'title' => $category['title']));

  return $block;
}
