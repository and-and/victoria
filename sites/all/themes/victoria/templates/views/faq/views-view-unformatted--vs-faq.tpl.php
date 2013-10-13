<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */

?>
<div class="vs-faq-wrapper">
  <h1 class="title" id="page-title">
    Часто задаваемые вопросы:
  </h1>
  <div class="vs-podzakaz-page-wrapper clearfix">

    <div class="content clearfix">

        <div id="accordion">
          <?php foreach ($rows as $id => $row): ?>

              <?php print $row; ?>

          <?php endforeach; ?>
        </div>

    </div>

  </div>
</div>