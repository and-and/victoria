<?php
/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>
<div class="col col-a">
  <div id="viewbag" class="panel panel-open first-panel viewbag delivery-open" style="border: 1px solid rgb(229, 229, 229);">
    <div class="panel-title" style="border-style: none none solid; border-bottom-width: 1px; border-bottom-color: rgb(229, 229, 229);">
      <h1 class="large cufon-replaced">SHOPPING BAG</h1>
      <span class="offer-upsell" style="display: none;"></span>
    </div>
    <div class="panel-content" style="height: auto;">
      <div class="jScrollPaneContainer" style="height: 314px; width: 470px;" tabindex="0">
        <div class="viewbag-items" style="height: auto; width: 430px; overflow: hidden; padding: 20px; border-left-style: none;">
          <?php foreach ($rows as $id => $row): ?>
            <div class="<?php print $classes_array[$id]; ?>"><?php print $row; ?></div>
          <?php endforeach; ?>
        </div>
      </div>
      <div class="element-hidden">
        <h3 class="small cufon-replaced">Bag is Empty</h3>
        <p>Start shopping by searching, browsing, or going to the homepage. If you have not signed in, please do so to retrieve any items that have been saved to your shopping bag.</p>
        <button id="redirecthome" class="btn-40 btn-40-p small cufon-replaced" tabindex="0">Return to Homepage</button>
      </div>
    </div>
    <div class="panel-footer " style="border-style: solid none none; border-top-width: 1px; border-top-color: rgb(229, 229, 229);">
      <div id="bagTotal" class="bagtotal grp">
        <p id="totalLabel">Merchandise Subtotal</p>
        <h1 id="totalPrice" class="large cufon-replaced">$286.00</h1>
      </div>
    </div>
  </div>
</div>