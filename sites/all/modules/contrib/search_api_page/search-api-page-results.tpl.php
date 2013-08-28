<?php
/**
 * @file
 * Default theme implementation for displaying search results.
 *
 * This template collects each invocation of theme_search_result(). This and the
 * child template are dependent on one another, sharing the markup for
 * definition lists.
 *
 * Note that modules and themes may implement their own search type and theme
 * function completely bypassing this template.
 *
 * Available variables:
 * - $index: The search index this search is based on.
 * - $result_count: Number of results.
 * - $spellcheck: Possible spelling suggestions from Search spellcheck module.
 * - $search_results: All results rendered as list items in a single HTML
 *   string.
 * - $items: All results as it is rendered through search-result.tpl.php.
 * - $search_performance: The number of results and how long the query took.
 * - $sec: The number of seconds it took to run the query.
 * - $pager: Row of control buttons for navigating between pages of results.
 * - $keys: The keywords of the executed search.
 * - $classes: String of CSS classes for search results.
 * - $page: The current Search API Page object.
 *
 * View mode is set in the Search page settings. If you select
 * "Themed as search results", then the child template will be used for
 * theming the individual result. Any other view mode will bypass the
 * child template.
 *
 * @see template_preprocess_search_api_page_results()
 */

$i = 1;
?>
<?php if (!empty($result_count)) : ?>
  <div class="<?php print $classes;?>">
    <?php if ($result_count) : ?>
    
      <?php print render($spellcheck); ?>
      
      <div class="vs-serch-page-results">
        <h2><?php print t('Найден!END0 !COUNT продукт!END1:', array('!END0' => vs_product_get_num_ending($quantity, array('', 'о', 'о')), '!COUNT' => $result_count, '!END1' => vs_product_get_num_ending($result_count))); ?></h2>
        <div class="vs-category-content">
          <table class="views-view-grid cols-4">
            <tbody>
              <?php foreach ($search_results['commerce_product'] as $product) {
                if (($i - 1) % 4 == 0) {
                  print '<tr><td class="col-first">';
                } 
                elseif ($i % 4 == 0 || $i == count($search_results['commerce_product'])) {
                  print '<td class="col-last">';
                }
                else {
                  print '<td>';
                }
                print render($product);
                if ($i % 4 == 0 || $i == count($search_results['commerce_product'])) {
                  print '</td class="col-last"></tr>';
                }
                $i ++;
              } ?>
            </tbody>
          </table>
        </div>
      </div>
      <?php print render($pager); ?>
    <?php else : ?>
      <h2><?php print t('Your search yielded no results.');?></h2>
    <?php endif; ?>
  </div>
<?php endif; ?>
