<?php unset($form['account']['pass']['#attached']['js']); ?>
<?php $errors = form_get_errors(); ?>
<div class="checkout vs-register">
  <div class="col-476 col-a">
    <h1 class="large">Регистрация</h1>
    <?php if (!empty($errors)) : ?>
      <div class="ui-alert" style="display: block;">
        <p>
          <?php foreach ($errors as $err) : ?>
            <?php print $err . '<br>'; ?>
          <?php endforeach; ?>
        </p>
      </div>
    <?php endif; ?>
    <?php // print drupal_render($form['field_user_address']); ?>
    <?php print drupal_render_children($form); ?>
  </div>
</div>