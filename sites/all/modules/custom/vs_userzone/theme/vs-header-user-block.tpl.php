<?php global $user; ?>
<ul class="utilities" style="visibility: visible;">
  <?php if ($user->uid != 0) : ?>
    <li id="welcome">Здравствуйте, 
      <span id="nickname"><?php print check_plain($user->name); ?></span>
      <li class="first"><a class="vs-payment-confirm-popup" href="/popup/vs-payment-confirm">Я оплатил</a></li>
      <li id="signIn"><a href="/user">Профиль</a></li>
      <li id="account"><a href="/user/logout">Выйти</a></li>
    </li>
  <?php else : ?>
    <li class="first"><a class="vs-payment-confirm-popup" href="/popup/vs-payment-confirm">Я оплатил</a></li>
    <li id="signIn" ><a href="/user">Войти</a></li>
    <li id="english" ><a href="/user/register" >Регистрация</a></li>
  <?php endif; ?>
</ul>