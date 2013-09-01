<h1 class="category-header">
  <?php print $title; ?>
</h1>
<?php if (!empty($menu)) : ?>
  <ul class="vs-top-level">
  <?php foreach ($menu as $tab) : ?>
    <li>
      <?php if ($tab['term']->link) : ?>
        <h3 <?php if ($tab['term']->active) { print 'class="vs-selected-item"'; } ?>><?php print $tab['term']->link; ?></h3>
      <?php else : ?>
        <h3><?php print $tab['term']->name; ?></h3>
      <?php endif; ?>  
      <?php if (!empty($tab['childs'])) : ?>
        <ul class="vs-sub-level">
          <?php foreach ($tab['childs'] as $sub_tab) : ?>
            <li <?php if ($sub_tab->active) { print 'class="vs-selected-item"'; } ?> >
              <?php print $sub_tab->link; ?>
            </li>
          <?php endforeach; ?>   
        </ul>
      <?php endif; ?>
    </li>
  <?php endforeach; ?>
  </ul>
<?php endif; ?>
