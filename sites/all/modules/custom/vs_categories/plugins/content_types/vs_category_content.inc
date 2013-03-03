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
  'title' => t('VS Categoty content'),
  'description' => t('Provide View with products in this category'),
  'category' => t('VS'),
//  'edit form' => 'querlain_checkout_suggestions_edit_form',
  'render callback' => 'vs_category_content_render',
//  'required context' => new ctools_context_required(t('Order'), 'commerce_order'),
);


/**
 * Output function for the querlain checkout suggestion block.
 */
function vs_category_content_render($subtype, $conf, $panel_args, $context) {
  drupal_add_js(drupal_get_path('theme', 'victoria') . '/scripts/vs-category.js');
  $arg = arg(1);
  if (empty($arg)) {
    $tree = taxonomy_get_tree(2, 0, 1);
    if (!empty($tree)) {
      $tid = $tree[0]->tid;
    }
  }elseif (is_numeric(arg(1))) {
    $tid = arg(1);
  }
  else {
    $path = drupal_get_normal_path(arg(1));
    $pattern = '/\d+$/';
    preg_match($pattern, $path, $matches);
    $tid = $matches[0];
  }

  if (!$term = taxonomy_term_load($tid)) {
    return;
  }
  if (!empty($term->field_main_image['und'][0])) {
    $img = $term->field_main_image['und'][0];
    $img['path'] = $img['uri'];
    $img['style_name'] = 'category_main';
    $img_rendered = theme_image_style($img);
  }
  $view = views_embed_view('category_page', 'default', $term->tid);
//  dsm($img_rendered);
  //Init variables
  $block = new stdClass();
  
  $block->content = theme('vs_category_page_content', array('img' => $img_rendered, 'products' => $view));

  return $block;
}
