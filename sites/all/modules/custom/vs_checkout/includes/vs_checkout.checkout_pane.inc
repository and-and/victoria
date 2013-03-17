<?php 

function vs_checkout_login_checkout_form($form, &$form_state, $checkout_pane, $order) {
  $form = array();
//  $form = drupal_get_form('user_login');
//  unset($form['#id']);
//  unset($form['#form_id']);
//  unset($form['form_id']);
//  unset($form['form_build_id']);
  return $form;
}

//function vs_checkout_login_checkout_form_validate($form, &$form_state, $checkout_pane, $order) {
//  dsm(__FUNCTION__);
//}

function vs_checkout_login_checkout_form_submit($form, &$form_state, $checkout_pane, $order) {
  dsm(__FUNCTION__);
  return TRUE;
}