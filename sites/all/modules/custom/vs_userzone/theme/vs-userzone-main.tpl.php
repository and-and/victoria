<div class="vs-userzone-main-wrapper account" >
  <div class="col col-b">
    <h1 class="large">Добро пожаловать, <?php print $user->name; ?>.</h1>
    <h3>Личные данные</h3>
    <?php foreach ($account_items as $item) : ?>
      <div class="vs-account-item">
        <span class="label"><?php print $item['label'] . ':'; ?></span>
        <span class="val"><?php print $item['val']; ?></span>
      </div>
    <?php endforeach; ?>
    <?php print l(t('Редактировать личные данные'), 'user/edit', array('attributes' => array('class' => array('ui-callout')))); ?>
  </div>
  <div class="clearfix"></div>
</div>
<div class="footer-border"></div>