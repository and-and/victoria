<?php global $user; ?>
<ul class="utilities" style="visibility: visible;">
  <?php if ($user->uid != 0) : ?>
    <li id="welcome">Здравствуйте 
      <span id="nickname"><?php print $user->name; ?></span>
      <li id="signIn" class="first"><a href="/user">Профиль</a></li>
      <li id="account"><a href="/user/logout">Выйти</a></li>
    </li>
  <?php else : ?>
    <li id="signIn" class="first"><a href="/user">Войти</a></li>
    <li id="english" ><a href="/user/register" >Рейгистрация</a></li>
  <?php endif; ?>
</ul>