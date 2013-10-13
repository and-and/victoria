<div class="vs-userzone-main-wrapper account" >
  <div class="col col-b">
    <h1 class="large"><?php print t('Ваши заказы:'); ?></h1>
    
    <?php if (!empty($orders)) : ?>
      <table class="vs-orders-list">
        <tr>
          <th><?php print t('Номер заказа'); ?></th>
          <th><?php print t('Дата'); ?></th>
        </tr>
        <?php foreach ($orders as $order_time => $order) : ?>
          <tr>
            <td><?php print $order['link']; ?></td>
            <td><?php print format_date($order_time, 'short'); ?></td>
          </tr>
        <?php endforeach; ?>
      </table>
    <?php else : ?>
     <h3><?php print t('У вас нет заказов.'); ?></h3>
    <?php endif; ?>
  </div>
  <div class="clearfix"></div>
</div>
