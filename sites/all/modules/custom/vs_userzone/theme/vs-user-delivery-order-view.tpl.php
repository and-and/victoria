<div class="vs-userzone-main-wrapper account vs-order-view" >
  <div class="col col-b">
    <h1 class="large"><?php print t('Заказ номер №') . $order_number; ?></h1>
    <h2><?php print t('Личные данные:'); ?></h2>
      <div class="vs-order-view-adddress">
        <span><?php print t('Имя Фамилия: ') . $billing['name'];?></span></br>
        <span><?php print t('Город: ') . $billing['city'];?></span></br>
        <span><?php print t('Телефон: ') . $billing['phone'];?></span></br>
        <span><?php print t('Номер склада новой почты: ') . $billing['n_sclada'];?></span>
      </div>
    <h2><?php print t('Продукты:'); ?></h2>
  </div>
  <div class="clearfix"></div>
</div>
