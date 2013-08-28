<div class="vs-userzone-menu-wrapper">  
  <div class="col col-a">
    <h2 class="category-header">		
      <?php print l(t('Ваш профиль'), 'user', array('attributes' => array('class' => array('large')))); ?>
    </h2>
    <ul id="leftnav" class="level-0 size-124 new-class">			
      <li>
        <?php print l(t('Редактировать личные данные'), 'user/edit', array('attributes' => array('class' => array('ui-callout')))); ?>
      </li>												
      <li>													
        <?php // print l(t('Ваши заказы'), 'user/orders', array('attributes' => array('class' => array('ui-callout')))); ?>
      </li>												
    </ul>									
  </div>

</div>