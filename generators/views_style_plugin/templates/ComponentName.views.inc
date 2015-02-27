<?php

/**
 * Implements hook_views_plugins().
 */
function <%= ComponentName %>_views_plugins() {
  $plugins = array(
    'module' => '<%= ComponentName %>',
    'style' => array(
      '<%= ComponentName %>' => array(
        'title' => '<%= ComponentName %>',
        'help' => '',
        'handler' => 'views_plugin_style',
        'theme' => '<%= ComponentName %>',
        'uses fields' => FALSE,
        'uses row plugin' => TRUE,
        'uses options' => TRUE,
        'uses grouping' => TRUE,
        'type' => 'normal',
        'even empty' => TRUE,
      ),
    ),
  );

  return $plugins;
}
