<?php
/**
 * @file
 * vs_product.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_pages().
 */
function vs_product_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'product_page';
  $page->task = 'page';
  $page->admin_title = 'Product page';
  $page->admin_description = 'Display of a product';
  $page->path = 'product/%commerce_product';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array(
    'commerce_product' => array(
      'id' => 1,
      'identifier' => 'Commerce Product: ID',
      'name' => 'entity_id:commerce_product',
      'settings' => array(),
    ),
  );
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_product_page_panel_context';
  $handler->task = 'page';
  $handler->subtask = 'product_page';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Product display',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'access' => array(
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'flexible:category_page_layout';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar_menu' => NULL,
      'center' => NULL,
    ),
    'center' => array(
      'style' => 'naked',
    ),
    'style' => 'naked',
  );
  $display->cache = array();
  $display->title = '%commerce_product:title';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-1';
    $pane->panel = 'center';
    $pane->type = 'views';
    $pane->subtype = 'product_display';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 1,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 1,
      'link_to_view' => 0,
      'args' => '%commerce_product',
      'url' => '',
      'display' => 'default',
      'context' => array(
        0 => '',
      ),
      'override_title' => 0,
      'override_title_text' => '',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => 'ANDAND-ID',
      'css_class' => 'ANDAND-CLASS',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $display->content['new-1'] = $pane;
    $display->panels['center'][0] = 'new-1';
    $pane = new stdClass();
    $pane->pid = 'new-2';
    $pane->panel = 'sidebar_menu';
    $pane->type = 'vs_menu_panel';
    $pane->subtype = 'vs_menu_panel';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $display->content['new-2'] = $pane;
    $display->panels['sidebar_menu'][0] = 'new-2';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = 'new-1';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['product_page'] = $page;

  return $pages;

}
