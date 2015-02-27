<?php

$plugin = array(
  'single' => TRUE,
  'title' => '<%= ComponentName %>',
  'category' => 'Components',
  'render callback' => '_<%= ComponentName %>_ctools_content_type_render',
  'edit form' => '_<%= ComponentName %>_ctools_content_type_edit_form',
);

function _<%= ComponentName %>_ctools_content_type_render($subtype, $conf, $args, $context) {
  $block = new stdClass();
  $block->content = '';
  return $block;
}


function _<%= ComponentName %>_ctools_content_type_edit_form($form, &$form_state) {
//  $conf = $form_state['conf'];
//
//  $form['text'] = array(
//    '#type' => 'textfield',
//    '#title' => t('Text'),
//    '#default_value' => isset($conf['text']) ? $conf['text'] : '',
//  );

  return $form;
}

//function _<%= ComponentName %>_ctools_content_type_edit_form_submit($form, &$form_state) {
//  foreach (element_children($form) as $key) {
//    if (isset($form_state['values'][$key])) {
//      $form_state['conf'][$key] = $form_state['values'][$key];
//    }
//  }
//}
