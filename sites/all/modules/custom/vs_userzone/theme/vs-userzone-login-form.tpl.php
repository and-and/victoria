<?php $errors = form_get_errors(); ?>
<div class="signin checkout">
  <div class="col col-b"><!--main content -->
    <div class="col col-476">
      <h1 class="large ">Войти на сайт</h1>
      <?php if (!empty($errors)) : ?>
        <div class="ui-alert" style="display: block;">
          <p>
            <?php foreach ($errors as $err) : ?>
              <?php print $err . '<br>'; ?>
            <?php endforeach; ?>
          </p>
        </div>
      <?php endif; ?>
      <form id="logonForm" name="logonForm" action="logon.vs?event=login.event" method="post">
        <div class="lyt lyt-even-split">
          <div class="col col-a">
            <h3 class="small ">Зарегистрированный пользователь</h3>
            

            <?php print drupal_render($form['name']); ?>
            <?php print drupal_render($form['pass']); ?>
            <p class="last">
              <a class="ui-callout" href="/user/password">Забыли пароль?</a>
            </p>
            <?php print drupal_render($form['actions']['submit']); ?>
          </div>
          <div class="ui-vr col"></div>
          <div class="col col-b">
            <h3 class="small ">Новый пользователь</h3>
            <button class="btn-40 btn-40-p small cufon-replaced login-form-registr-submit vs-button-3-steps" type="submit">Регистрация</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
<?php print drupal_render_children($form); ?>