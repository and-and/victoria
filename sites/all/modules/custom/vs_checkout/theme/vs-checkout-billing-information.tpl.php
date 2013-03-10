<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */dsm(element_children($form));
?>
<div id="checkoutWrapper" class="checkout-wrapper">
  <div id="checkoutClosed" class="checkout-panel grp hide expand" style="display: block;">
    <h1 class="large" style="text-transform: uppercase;">Оформить заказ</h1>
    <span id="checkoutStatus"> <b>Гость</b> <!--<a class="signInLink" href="#">Sign In</a>--> 
    </span>
    <div class="clearfix"></div>
  </div>
</div>
<!--//////////////////////-->
<div id="addresses">
  <div id="addressOpen" class="panel panel-open  first-panel" style="">

      <div class="panel-title grp">
        <h1 class="large cufon-replaced"><cufon class="cufon cufon-canvas" alt="1. " style="width: 24px; height: 21px;"><canvas width="47" height="25" style="width: 47px; height: 25px; top: -5px; left: -3px;"></canvas><cufontext>1. </cufontext></cufon><cufon class="cufon cufon-canvas" alt="Addresses" style="width: 122px; height: 21px;"><canvas width="138" height="25" style="width: 138px; height: 25px; top: -5px; left: -3px;"></canvas><cufontext>Addresses</cufontext></cufon></h1>
        <span>*Required</span>
      </div>
      <div class="panel-content">

        <h3>Billing Address</h3>

        <div id="addresserrors"></div>
        

      </div>
      <div class="panel-footer grp">
        <button type="submit" tabindex="0" class="btn-40 btn-40-p small ui-loader save panel-commit-button cufon-replaced" id="addressCommit"><cufon class="cufon cufon-canvas" alt="Continue" style="width: 59px; height: 14px;"><canvas width="72" height="18" style="width: 72px; height: 18px; top: -3px; left: -2px;"></canvas><cufontext>Continue</cufontext></cufon></button>
      </div>
  
  </div>
  
</div>
