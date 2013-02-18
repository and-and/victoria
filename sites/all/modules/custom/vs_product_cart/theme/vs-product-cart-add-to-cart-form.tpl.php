<?php
?>
<?php if (isset($rendered_html)) : ?>
  <?php foreach ($rendered_html as $key => $val) : ?>
  <div class="vs-product-display-attribute">
    <div class="vs-product-dispaly-options ui-selectmenu-menu">
      <div class="vs-product-display-options-title">
        <span><?php print $val['title']; ?></span>
        <span class="vs-product-display-options-selected"></span>
      </div>
      <div class="vs-product-display-variants">
        <?php print $val['options']; ?>
      </div>
    </div>
    <div class="element-hidden">
      <?php print drupal_render($form['field_options'][0][$key]); ?>
    </div>
  </div>
  <?php endforeach; ?>
<?php endif; ?>
<div class="vs-product-display-add-to-bag">
  <?php print drupal_render($form['submit']); ?>
</div>
  <?php print drupal_render_children($form); ?>
